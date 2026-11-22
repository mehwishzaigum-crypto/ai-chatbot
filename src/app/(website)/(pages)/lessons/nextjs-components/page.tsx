"use client";

import { useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

const suggestedQuestions = [
  "What is a component in Next.js?",
  "Why should I create separate component files?",
  "How should I organize my project folders?",
  "Explain the code example.",
];

export default function NextJSComponentsLesson() {
  const [chatOpen, setChatOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hi! I'm your lesson assistant. Ask me anything about creating components in Next.js and TypeScript.",
    },
  ]);

  async function sendMessage() {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || isLoading) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text: trimmedQuestion },
    ]);

    setQuestion("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedQuestion,
          lesson:
            "Creating Multiple Components in Next.js and TypeScript. This lesson explains reusable components, multiple sections in one file, why separate components improve readability, reusability and maintenance, and how to organize project folders.",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "The AI assistant could not answer. Please try again."
        );
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text:
            data.reply ||
            "I couldn't generate an answer. Please try again.",
        },
      ]);
    } catch (error) {
      console.error("Lesson chatbot error:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text:
            error instanceof Error
              ? error.message
              : "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Lesson Header */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-200">
            Edu2Skill Learning Center
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Creating Multiple Components in Next.js
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Learn how to organize your Next.js and TypeScript application
            into reusable components and maintain a clean project structure.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-white/10 px-4 py-2">
              Next.js
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2">
              TypeScript
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2">
              Beginner friendly
            </span>
          </div>
        </div>
      </section>

      {/* Lesson Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_260px]">
          <article className="space-y-8">
            {/* Section 1 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                1. What are components?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Components are reusable pieces of a user interface.
                Instead of writing your entire website in one large file,
                you can create separate components for different sections.
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                For example, a website may contain a Header, Navbar,
                Home Page, Registration section, Login section, Diary
                section, and Footer.
              </p>
            </section>

            {/* Section 2 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                2. Creating multiple sections in one file
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                You can begin by placing multiple sections inside the
                main component in <code>src/app/page.tsx</code>. This is
                useful for learning how a page is structured, but large
                files become harder to maintain.
              </p>

              <pre className="mt-5 overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm leading-6 text-green-300">
{`export default function HomePage() {
  return (
    <main>
      <header>
        <h1>My Website</h1>
      </header>

      <nav>Navigation</nav>

      <section>
        <h2>Welcome</h2>
        <p>Learn Next.js components.</p>
      </section>

      <footer>Footer</footer>
    </main>
  );
}`}
              </pre>
            </section>

            {/* Section 3 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                3. Why separate components?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                A better approach is to move reusable sections into
                their own component files and import them where needed.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-blue-50 p-4">
                  <h3 className="font-bold text-blue-900">
                    Readability
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Keep each file easier to understand.
                  </p>
                </div>

                <div className="rounded-xl bg-indigo-50 p-4">
                  <h3 className="font-bold text-indigo-900">
                    Reusability
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Use the same component in multiple places.
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50 p-4">
                  <h3 className="font-bold text-emerald-900">
                    Maintenance
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Update a component without rewriting the whole page.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                4. Example project structure
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                In this project, reusable website components can be
                organized separately from individual pages.
              </p>

              <pre className="mt-5 overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm leading-6 text-green-300">
{`src/
└── app/
    ├── (website)/
    │   ├── component/
    │   │   ├── layout/
    │   │   │   ├── Navbar/
    │   │   │   └── Footer/
    │   └── (pages)/
    │       ├── about/
    │       ├── contact/
    │       └── lessons/
    │           └── nextjs-components/
    │               └── page.tsx
    ├── layout.tsx
    └── page.tsx`}
              </pre>
            </section>

            {/* Section 5 */}
            <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h2 className="text-2xl font-bold text-blue-950">
                5. What you learned
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-700">
                <li>
                  What a component is and why it is useful.
                </li>
                <li>
                  How multiple sections can form a single page.
                </li>
                <li>
                  Why separating components improves maintainability.
                </li>
                <li>
                  How to organize page and component files.
                </li>
              </ul>

              <p className="mt-5 font-medium text-blue-900">
                Tip: Use the lesson assistant in the bottom-right
                corner to ask questions while learning.
              </p>
            </section>
          </article>

          {/* Lesson Sidebar */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Lesson contents
            </h2>

            <ol className="mt-4 space-y-4 text-sm leading-6 text-slate-600">
              <li>01. Introduction to components</li>
              <li>02. Multiple sections in one file</li>
              <li>03. Benefits of separate components</li>
              <li>04. Project structure</li>
              <li>05. Lesson summary</li>
            </ol>

            <div className="mt-6 rounded-xl bg-blue-50 p-4">
              <p className="font-semibold text-blue-900">
                Need help?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Open the lesson chatbot to ask questions while learning.
              </p>

              <button
                type="button"
                onClick={() => setChatOpen(true)}
                className="mt-4 w-full rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Ask a question
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* Floating Chatbot Button */}
      <button
        type="button"
        onClick={() => setChatOpen((open) => !open)}
        aria-label={
          chatOpen ? "Close lesson assistant" : "Open lesson assistant"
        }
        aria-expanded={chatOpen}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-white shadow-xl transition hover:scale-105 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        {chatOpen ? (
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8v.5Z" />
            <path d="M8 10h8M8 14h5" />
          </svg>
        )}
      </button>

      {/* Chatbot Popup */}
      {chatOpen && (
        <section
          aria-label="Lesson assistant chat"
          className="fixed bottom-24 right-4 z-50 flex h-[480px] max-h-[65vh] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:right-6"
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between bg-blue-800 px-4 py-4 text-white">
            <div>
              <h2 className="font-bold">Lesson Assistant</h2>
              <p className="mt-1 text-xs text-blue-100">
                Next.js Components Lesson
              </p>
            </div>

            <button
              type="button"
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
              className="rounded-lg px-3 py-2 text-xl hover:bg-blue-700"
            >
              ×
            </button>
          </div>

          {/* Chat Messages and Suggested Questions */}
          <div
            aria-live="polite"
            className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4"
          >
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Suggested questions
                </p>

                {suggestedQuestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => setQuestion(suggestion)}
                    className="block w-full rounded-xl border border-blue-200 bg-white px-3 py-3 text-left text-sm text-slate-700 transition hover:border-blue-500 hover:bg-blue-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <p
                  className={`max-w-[88%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "bg-blue-700 text-white"
                      : "border border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}

            {isLoading && (
              <p className="text-sm text-slate-500">
                Edu2Skill assistant is typing...
              </p>
            )}
          </div>

          {/* Question Input */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
            className="flex gap-2 border-t border-slate-200 bg-white p-3"
          >
            <input
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              disabled={isLoading}
              placeholder="Ask about this lesson..."
              aria-label="Your lesson question"
              className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="submit"
              disabled={!question.trim() || isLoading}
              className="rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </section>
      )}
    </div>
  );
}