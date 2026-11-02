"use client";

import * as React from "react";
import { MessageCircle, Send, X, Bot, AlertCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "What is your full-stack tech stack?",
  "Tell me about your projects",
  "What database & SQL experience do you have?",
  "Are you open to new opportunities?",
];

export function Chatbot() {
  const { email, name, monogram } = PORTFOLIO_DATA.personal;
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Msg[]>([]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const endRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages]);

  React.useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function send(text: string) {
    const content = text.trim().slice(0, 1000);
    if (!content || loading) return;
    const userMsg: Msg = { role: "user", content };
    const history: Msg[] = [...messages, userMsg].slice(-12);
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);
    setFailed(false);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      if (!res.ok || !res.body) throw new Error("bad response");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: answer }]);
      }
      if (!answer.trim()) throw new Error("empty");
    } catch {
      setFailed(true);
      setMessages(history);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? "Close chat" : `Ask about ${name}`}
        className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 transition-all hover:scale-105"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>

      {open && (
        <div
          id="chat-panel"
          role="dialog"
          aria-label={`Chat about ${name}`}
          className="fixed bottom-20 right-5 z-50 flex h-[30rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="border-b border-[var(--border)] px-4 py-3 bg-[var(--card-hover)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <Bot className="w-4 h-4" />
              </span>
              <div>
                <p className="text-xs font-mono font-bold text-[var(--foreground)]">
                  {monogram} AI Assistant
                </p>
                <p className="text-[10px] text-[var(--muted)]">
                  Grounded with Gemini 2.5 Flash
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-xs" aria-live="polite">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  Hi! I&apos;m the AI assistant for {name}. Ask me anything about Shem&apos;s technical background, projects, or availability:
                </p>
                <div className="flex flex-col gap-1.5">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="text-left rounded-lg border border-[var(--border)] p-2 text-xs font-mono text-[var(--foreground)] hover:bg-[var(--card-hover)] hover:border-emerald-500/40 transition-colors"
                    >
                      &gt; {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto w-fit max-w-[85%] whitespace-pre-wrap rounded-xl bg-emerald-600 p-2.5 text-white shadow-xs font-sans leading-relaxed"
                    : "w-fit max-w-[90%] whitespace-pre-wrap rounded-xl bg-[var(--card-hover)] border border-[var(--border)] p-2.5 text-[var(--foreground)] leading-relaxed"
                }
              >
                {m.content || (loading && i === messages.length - 1 ? (
                  <span className="inline-flex items-center gap-1 text-[var(--muted)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Thinking...
                  </span>
                ) : "")}
              </div>
            ))}

            {failed && (
              <div role="alert" className="p-2.5 rounded-lg border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>
                  Assistant is temporarily unavailable. Please reach Shem directly at{" "}
                  <a className="underline font-mono font-bold" href={`mailto:${email}`}>
                    {email}
                  </a>
                  .
                </p>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-[var(--border)] p-3 bg-[var(--card)]"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={1000}
              placeholder="Ask a question about Shem..."
              aria-label="Your question"
              className="min-w-0 flex-1 rounded-xl border border-[var(--border)] bg-[var(--card-hover)] px-3 py-2 text-xs text-[var(--foreground)] outline-none focus-visible:border-emerald-500 transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-white disabled:opacity-40 hover:bg-emerald-500 transition-colors"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
