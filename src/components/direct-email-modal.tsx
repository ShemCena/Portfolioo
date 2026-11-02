"use client";

import * as React from "react";
import { X, Send, Lock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface DirectEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export function DirectEmailModal({ isOpen, onClose, defaultSubject = "" }: DirectEmailModalProps) {
  const [senderName, setSenderName] = React.useState("");
  const [senderEmail, setSenderEmail] = React.useState("");
  const [subject, setSubject] = React.useState(defaultSubject);
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    if (isOpen && defaultSubject) {
      setSubject(defaultSubject);
    }
  }, [isOpen, defaultSubject]);

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) {
      setErrorMessage("Please complete all required fields.");
      setStatus("error");
      return;
    }

    try {
      setStatus("submitting");
      setErrorMessage("");

      const web3Key =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        process.env.WEB3FORMS_ACCESS_KEY ||
        "fc179080-fa65-4f36-8a6c-fa70438cf135";
      let web3Succeeded = false;

      // 1. Direct browser dispatch via Web3Forms (bypasses server Cloudflare blocks)
      if (web3Key) {
        try {
          const web3Res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: web3Key,
              name: senderName,
              email: senderEmail,
              replyto: senderEmail,
              subject: `[Portfolio Inquiry] ${subject || "New Inquiry"} - from ${senderName}`,
              message: message,
              from_name: `${senderName} via Shem's Portfolio`,
            }),
          });
          const web3Data = await web3Res.json().catch(() => null);
          if (web3Res.ok && web3Data?.success) {
            web3Succeeded = true;
          }
        } catch (wErr) {
          console.warn("Client Web3Forms attempt:", wErr);
        }
      }

      // 2. Server dispatch for local persistence & server SMTP/Resend
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          senderName,
          senderEmail,
          subject,
          message,
          web3Delivered: web3Succeeded,
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok && !web3Succeeded) {
        throw new Error(data?.error || "Failed to send message");
      }

      setStatus("success");
      setSenderName("");
      setSenderEmail("");
      setSubject("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="direct-email-title"
        className="relative w-full max-w-lg rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#141414] shadow-2xl p-6 sm:p-7 space-y-5 animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 id="direct-email-title" className="text-lg font-semibold text-gray-900 dark:text-white">
              Send Direct Message to Shem
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Your inquiry routes securely to Shem&apos;s private inbox.
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Masked / Hashed Recipient Pill */}
        <div className="flex items-center justify-between px-3.5 py-2 rounded-lg border border-dashed border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900/60 text-xs">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="text-gray-500 dark:text-gray-400">Recipient:</span>
            <span className="font-mono text-gray-800 dark:text-gray-200 tracking-wider">
              ●●●●●●●●●●●●●●●●●●●●
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
            Protected Destination
          </span>
        </div>

        {/* Content Body: Success State or Form */}
        {status === "success" ? (
          <div className="py-6 flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white">
              Message Transmitted Successfully!
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm">
              Your inquiry has landed in Shem&apos;s primary inbox. He will review your scope and follow up directly via your email address.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 px-5 py-2 rounded-lg bg-[#121212] dark:bg-white text-white dark:text-black text-xs font-medium hover:opacity-90 transition-opacity"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {status === "error" && (
              <div className="space-y-2 p-3 rounded-lg border border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400 text-xs">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
                <div className="pt-0.5">
                  <a
                    href={`mailto:shemcena@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Project Inquiry")}&body=${encodeURIComponent(`From: ${senderName} (${senderEmail})\n\n${message}`)}`}
                    className="inline-flex items-center gap-1 underline font-medium hover:opacity-80"
                  >
                    Click to launch your email client directly (shemcena@gmail.com) →
                  </a>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block text-[11px] font-medium text-gray-700 dark:text-gray-300">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex Rivera"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 text-xs text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] font-medium text-gray-700 dark:text-gray-300">
                  Your Return Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 text-xs text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. MERN Web App / Power BI Dashboard Project"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 text-xs text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-medium text-gray-700 dark:text-gray-300">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell Shem about your project goals, technical requirements, or timeline..."
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 text-xs text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-500 resize-none"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-gray-100 dark:border-gray-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#121212] dark:bg-white text-white dark:text-black text-xs font-medium hover:opacity-90 disabled:opacity-50 transition-all cursor-pointer"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Email Directly</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

