
"use client";

import Link from "next/link";
import { useState } from "react";

const suggestions = [
  "Explain variables in Python",
  "What are data structures?",
  "How do JavaScript promises work?",
  "Help me understand recursion",
];

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function AIChatPage() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [notice, setNotice] = useState("");

  function sendMessage(text = question) {
    const cleaned = text.trim();

    if (!cleaned) {
      setNotice("Please type a question first.");
      return;
    }

    setMessages((previous) => [
      ...previous,
      { role: "user", text: cleaned },
    ]);

    setQuestion("");
    setNotice(
      "Your question is ready. Connect an AI API to receive real AI answers."
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white px-5 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <Link
              href="/"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
            >
              ← Back to Home
            </Link>
            <h1 className="mt-2 text-2xl font-bold text-slate-900">
              AI Learning Assistant
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Your companion for Computer Science and coding.
            </p>
          </div>

          <span className="hidden items-center gap-2 rounded-full bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700 sm:inline-flex">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Demo mode
          </span>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="font-bold text-slate-900">Learning tools</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Choose a section to explore more learning resources.
          </p>

          <nav className="mt-5 space-y-2">
            {[
              { label: "Computer Science", href: "/computer-science" },
              { label: "Programming Help", href: "/programming-help" },
              { label: "Tutorials", href: "/tutorials" },
              { label: "Practice Questions", href: "/practice-questions" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
              >
                {item.label} →
              </Link>
            ))}
          </nav>

          <div className="mt-6 rounded-xl bg-indigo-50 p-4">
            <p className="text-sm font-semibold text-indigo-900">
              Learning tip
            </p>
            <p className="mt-2 text-sm leading-6 text-indigo-800">
              Ask specific questions and mention your programming language
              for more focused guidance.
            </p>
          </div>
        </aside>

        <div className="flex min-h-[620px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center gap-3 border-b border-slate-100 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-xl text-white">
              ✦
            </div>
            <div>
              <h2 className="font-bold text-slate-900">
                Edu2Skill Assistant
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Ask about concepts, code, and study topics
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-8">
            {messages.length === 0 ? (
              <div className="m-auto w-full max-w-2xl py-8">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-indigo-50 text-3xl text-indigo-600">
                  ✦
                </div>

                <h3 className="mt-6 text-center text-2xl font-bold text-slate-900">
                  What would you like to learn?
                </h3>
                <p className="mx-auto mt-3 max-w-md text-center text-sm leading-6 text-slate-500">
                  Ask a programming question or choose one of the suggested
                  topics below to get started.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => sendMessage(suggestion)}
                      className="rounded-xl border border-slate-200 p-4 text-left text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50"
                    >
                      {suggestion}
                      <span className="ml-2 text-indigo-600">↗</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`flex ${
                      message.role === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                        message.role === "user"
                          ? "rounded-br-sm bg-indigo-600 text-white"
                          : "rounded-bl-sm bg-slate-100 text-slate-700"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}

                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
                  Demo mode: real AI answers are not connected yet. This
                  message will be replaced when the AI API is integrated.
                </div>

                <button
                  type="button"
                  onClick={() => setMessages([])}
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Start a new conversation
                </button>
              </div>
            )}

            {notice && (
              <p
                role="status"
                className="mt-4 rounded-xl bg-amber-50 p-3 text-sm leading-6 text-amber-800"
              >
                {notice}
              </p>
            )}
          </div>

          <form
            className="border-t border-slate-100 bg-white p-4 sm:p-5"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <label
              htmlFor="question"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Your question
            </label>

            <div className="flex items-end gap-3">
              <textarea
                id="question"
                value={question}
                onChange={(event) => {
                  setQuestion(event.target.value);
                  setNotice("");
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Ask something about programming..."
                rows={2}
                className="min-h-14 flex-1 resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />

              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
              >
                Send ↗
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-400">
              Demo interface · Real AI answers will be enabled in a later step.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
