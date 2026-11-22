
"use client";

import Link from "next/link";
import { useState } from "react";

const questions = [
  {
    topic: "JavaScript",
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["const", "let", "static", "define"],
    answer: 1,
    explanation:
      "The let keyword declares a block-scoped variable whose value can be reassigned.",
  },
  {
    topic: "Python",
    question: "Which symbol is used for a single-line comment in Python?",
    options: ["//", "<!--", "#", "/*"],
    answer: 2,
    explanation:
      "Python uses the # symbol to begin a single-line comment.",
  },
  {
    topic: "Data Structures",
    question: "Which data structure follows the LIFO principle?",
    options: ["Queue", "Stack", "Graph", "Linked list"],
    answer: 1,
    explanation:
      "A stack follows Last In, First Out (LIFO): the last item added is the first one removed.",
  },
  {
    topic: "Databases",
    question: "Which SQL command retrieves records from a table?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    answer: 2,
    explanation:
      "SELECT is used to retrieve data from one or more database tables.",
  },
  {
    topic: "Algorithms",
    question: "What is the main purpose of a sorting algorithm?",
    options: [
      "To delete data",
      "To arrange data in an order",
      "To encrypt files",
      "To create a database",
    ],
    answer: 1,
    explanation:
      "Sorting algorithms arrange data in a specified order, such as ascending or descending.",
  },
];

export default function PracticeQuestionsPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = questions[current];

  function checkAnswer() {
    if (selected === null || checked) return;

    setChecked(true);

    if (selected === question.answer) {
      setScore((previous) => previous + 1);
    }
  }

  function nextQuestion() {
    if (current === questions.length - 1) {
      setCompleted(true);
      return;
    }

    setCurrent((previous) => previous + 1);
    setSelected(null);
    setChecked(false);
  }

  function restartQuiz() {
    setCurrent(0);
    setSelected(null);
    setChecked(false);
    setScore(0);
    setCompleted(false);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 px-5 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="text-sm text-indigo-300 hover:text-white"
          >
            ← Back to Home
          </Link>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
            Practice makes progress
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Test what you know.
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            Practice essential Computer Science and programming concepts,
            check your answers, and learn from the explanations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-indigo-600">
              PRACTICE SESSION
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Knowledge check
            </h2>
          </div>

          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
            {completed
              ? `${questions.length} of ${questions.length} completed`
              : `Question ${current + 1} of ${questions.length}`}
          </span>
        </div>

        <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-300"
            style={{
              width: `${((completed ? questions.length : current + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
          {completed ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-50 text-3xl">
                🎯
              </div>

              <h2 className="mt-6 text-3xl font-bold text-slate-900">
                Practice complete!
              </h2>

              <p className="mt-4 text-slate-600">
                You answered {score} out of {questions.length} questions correctly.
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {score === questions.length
                  ? "Excellent work! You answered every question correctly."
                  : "Keep practicing to strengthen your understanding."}
              </p>

              <button
                type="button"
                onClick={restartQuiz}
                className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Try Again
              </button>
            </div>
          ) : (
            <>
              <span className="inline-flex rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
                {question.topic}
              </span>

              <h2 className="mt-6 text-xl font-bold leading-8 text-slate-900 sm:text-2xl">
                {question.question}
              </h2>

              <div className="mt-7 space-y-3">
                {question.options.map((option, index) => {
                  const isCorrect = index === question.answer;
                  const isSelected = selected === index;

                  let optionStyle =
                    "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50";

                  if (checked && isCorrect) {
                    optionStyle = "border-emerald-400 bg-emerald-50";
                  } else if (checked && isSelected && !isCorrect) {
                    optionStyle = "border-rose-400 bg-rose-50";
                  } else if (isSelected) {
                    optionStyle = "border-indigo-500 bg-indigo-50";
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={checked}
                      onClick={() => setSelected(index)}
                      className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${optionStyle}`}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-bold text-slate-600 shadow-sm">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span className="flex-1 text-sm font-medium text-slate-800">
                        {option}
                      </span>

                      {checked && isCorrect && (
                        <span className="text-sm font-bold text-emerald-700">
                          Correct
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {checked && (
                <div
                  className={`mt-6 rounded-xl p-4 ${
                    selected === question.answer
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-amber-50 text-amber-800"
                  }`}
                >
                  <p className="font-bold">
                    {selected === question.answer
                      ? "Correct answer!"
                      : "Not quite. Keep learning!"}
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {question.explanation}
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
                <p className="text-sm text-slate-500">
                  Score: {score} / {questions.length}
                </p>

                {!checked ? (
                  <button
                    type="button"
                    disabled={selected === null}
                    onClick={checkAnswer}
                    className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
                  >
                    {current === questions.length - 1
                      ? "See Final Score"
                      : "Next Question →"}
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
          <h3 className="font-bold text-indigo-950">
            Want to study a topic first?
          </h3>
          <p className="mt-2 text-sm leading-6 text-indigo-900">
            Review learning resources before attempting more practice.
          </p>
          <Link
            href="/tutorials"
            className="mt-4 inline-flex font-semibold text-indigo-700 hover:text-indigo-900"
          >
            Explore Tutorials →
          </Link>
        </div>
      </section>
    </main>
  );
}
