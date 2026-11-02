"use client";

import * as React from "react";
import { Send, X, MessageSquare, AlertCircle, ChevronUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  { label: "What is your full-stack tech stack?", tag: "Engineering" },
  { label: "How can you help my business save hours?", tag: "Client ROI" },
  { label: "Tell me about your featured projects", tag: "Projects" },
  { label: "How can I work with you or hire you?", tag: "Hiring" },
];

function FormattedAssistantMessage({ content }: { content: string }) {
  // Strip any accidental meta scratchpads or planning checklists
  const cleanContent = content
    .replace(/^(\*?\*?word count[^\n]*\n*)+/gi, "")
    .replace(/^(\*?\*?constraints:[^\n]*\n*)+/gi, "")
    .replace(/^\s*\*\s*word count[^\n]*\n*/gi, "")
    .trimStart();

  const parts = cleanContent.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-gray-900 dark:text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      })}
    </>
  );
}

export function Chatbot() {
  const { name } = PORTFOLIO_DATA.personal;
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Msg[]>([]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [showTop, setShowTop] = React.useState(false);
  const endRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading]);

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
      if (!answer.trim()) throw new Error("empty response");
    } catch {
      setFailed(true);
      setMessages(history);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Scroll to Top Button (Bottom-Right, above AI button) */}
      {showTop && !open && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-20 right-4 sm:right-6 z-40 p-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-[#181818]/95 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white backdrop-blur-md shadow-md hover:border-gray-400 dark:hover:border-gray-600 transition-all hover:-translate-y-0.5 cursor-pointer"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Toggle Button (Bottom-Right) */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? "Close chat" : `Ask about ${name}`}
        className="fixed bottom-6 right-4 sm:right-6 z-40 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-gray-200 dark:border-gray-800 bg-[#121212] text-white dark:bg-white dark:text-black shadow-xl hover:opacity-95 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition-all duration-200 select-none cursor-pointer"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-xs font-mono font-medium">Ask Shem AI</span>
        {open ? <X className="h-3.5 w-3.5 ml-0.5 text-gray-300 dark:text-gray-600" /> : <MessageSquare className="h-3.5 w-3.5 ml-0.5 text-emerald-400 dark:text-emerald-600" />}
      </button>

      {/* Floating Chat Modal Panel */}
      {open && (
        <div
          id="chat-panel"
          role="dialog"
          aria-label={`Chat about ${name}`}
          className="fixed bottom-20 right-4 sm:right-6 z-50 flex h-[28rem] sm:h-[30rem] w-[calc(100vw-2rem)] max-w-sm flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#141414] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="border-b border-gray-100 dark:border-gray-800 px-4 py-3 bg-gray-50/70 dark:bg-zinc-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <MessageSquare className="w-4 h-4" />
              </span>
              <div>
                <p className="text-xs font-mono font-semibold text-gray-900 dark:text-white leading-tight">
                  {name} AI Assistant
                </p>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                  Adaptive Assistant · Grounded in Shem&apos;s Work
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-xs" aria-live="polite">
            {messages.length === 0 && (
              <div className="space-y-3 pt-1">
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Hi! I&apos;m Shem&apos;s personal AI assistant. I personalize my response based on your perspective—feel free to ask anything or choose a topic:
                </p>
                <div className="flex flex-col gap-1.5">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => send(s.label)}
                      className="group flex items-center justify-between text-left rounded-lg border border-dashed border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-zinc-900/40 p-2 text-xs font-mono text-gray-700 dark:text-gray-300 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-colors cursor-pointer"
                    >
                      <span>&gt; {s.label}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {s.tag}
                      </span>
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
                    ? "ml-auto w-fit max-w-[85%] whitespace-pre-wrap rounded-xl bg-[#121212] dark:bg-white p-2.5 text-white dark:text-black shadow-xs font-sans text-xs leading-relaxed"
                    : "w-fit max-w-[90%] whitespace-pre-wrap rounded-xl bg-gray-50 dark:bg-zinc-900/90 border border-gray-200 dark:border-gray-800 p-2.5 text-gray-800 dark:text-gray-200 text-xs leading-relaxed"
                }
              >
                {m.role === "user" ? (
                  m.content
                ) : m.content ? (
                  <FormattedAssistantMessage content={m.content} />
                ) : loading && i === messages.length - 1 ? (
                  <span className="inline-flex items-center gap-1.5 text-gray-400 font-mono text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Thinking...
                  </span>
                ) : null}
              </div>
            ))}

            {failed && (
              <div role="alert" className="p-2.5 rounded-lg border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <p>
                  Assistant is temporarily unavailable. Please send a message directly using the &quot;Send Direct Email&quot; button in the Contact section!
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
            className="flex gap-2 border-t border-gray-100 dark:border-gray-800 p-3 bg-white dark:bg-[#141414]"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={1000}
              placeholder="Ask a question about Shem..."
              aria-label="Your question"
              className="min-w-0 flex-1 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900/60 px-3 py-2 text-xs text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#121212] dark:bg-white text-white dark:text-black disabled:opacity-40 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
