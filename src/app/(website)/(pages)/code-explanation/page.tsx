
"use client";

import Link from "next/link";
import { useState } from "react";

const examples = [
  {
    title: "JavaScript Function",
    language: "JavaScript",
    code: "function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet('Student'));",
  },
  {
    title: "Python Loop",
    language: "Python",
    code: "for number in range(1, 6):\n    print(number)",
  },
  {
    title: "TypeScript Variable",
    language: "TypeScript",
    code: "const score: number = 95;\nconst passed: boolean = score >= 50;\n\nconsole.log(passed);",
  },
];

export default function CodeExplanationPage() {
  const [language, setLanguage] = useState("JavaScript");
  const [code, setCode] = useState(examples[0].code);
  const [notice, setNotice] = useState("");

  function loadExample(index: number) {
    const example = examples[index];
    setLanguage(example.language);
    setCode(example.code);
    setNotice("");
  }

  function requestExplanation() {
    if (!code.trim()) {
      setNotice("Please enter some code before requesting an explanation.");
      return;
    }

    setNotice(
      "Your code is ready. Real AI-powered explanations will be available after API integration."
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="text-sm text-indigo-300 hover:text-white"
          >
            ← Back to Home
          </Link>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
            Understand every line
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Code can be easier to understand.
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-slate-300 sm:text-lg">
            Explore code examples, choose a programming language, and prepare
            your code for a clear, beginner-friendly explanation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 p-5">
              <div>
                <h2 className="font-bold text-slate-900">
                  Your code workspace
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Paste or edit your code below.
                </p>
              </div>

              <select
                value={language}
                onChange={(event) => {
                  setLanguage(event.target.value);
                  setNotice("");
                }}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 outline-none focus:border-indigo-400"
                aria-label="Programming language"
              >
                <option>JavaScript</option>
                <option>Python</option>
                <option>TypeScript</option>
                <option>Java</option>
                <option>C++</option>
                <option>HTML</option>
                <option>CSS</option>
              </select>
            </div>

            <div className="bg-slate-950 p-4 sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs text-slate-400">
                  code-editor.{language === "Python" ? "py" : language === "Java" ? "java" : language === "C++" ? "cpp" : language === "HTML" ? "html" : language === "CSS" ? "css" : language === "TypeScript" ? "ts" : "js"}
                </span>
              </div>

              <textarea
                value={code}
                onChange={(event) => {
                  setCode(event.target.value);
                  setNotice("");
                }}
                spellCheck={false}
                aria-label="Code editor"
                placeholder="Paste your code here..."
                className="min-h-72 w-full resize-y rounded-xl border border-white/10 bg-slate-900 p-4 font-mono text-sm leading-7 text-emerald-200 outline-none focus:border-indigo-400"
              />
            </div>

            <div className="p-5">
              <button
                type="button"
                onClick={requestExplanation}
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Explain My Code →
              </button>

              {notice && (
                <p
                  role="status"
                  className="mt-4 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-800"
                >
                  {notice}
                </p>
              )}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-slate-900">Try an example</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Load sample code into the editor with one click.
              </p>

              <div className="mt-5 space-y-3">
                {examples.map((example, index) => (
                  <button
                    key={example.title}
                    type="button"
                    onClick={() => loadExample(index)}
                    className="w-full rounded-xl border border-slate-200 p-4 text-left transition hover:border-indigo-300 hover:bg-indigo-50"
                  >
                    <span className="block text-sm font-semibold text-slate-800">
                      {example.title}
                    </span>
                    <span className="mt-1 block text-xs text-slate-500">
                      {example.language}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
              <h2 className="font-bold text-indigo-950">
                What makes a good explanation?
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-indigo-900">
                <li>• Explain what each section does.</li>
                <li>• Describe important variables and functions.</li>
                <li>• Show how the code works step by step.</li>
                <li>• Highlight concepts a beginner should learn.</li>
              </ul>
            </div>

            <Link
              href="/ai-chat"
              className="block rounded-2xl bg-white p-5 font-semibold text-indigo-700 shadow-sm transition hover:bg-indigo-50"
            >
              Have another question?
              <span className="mt-2 block text-sm font-normal text-slate-500">
                Visit the AI Learning Assistant →
              </span>
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
