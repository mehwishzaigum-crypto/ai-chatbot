
"use client";

import Link from "next/link";
import { useState } from "react";

const questionBank = [
  {
    subject: "JavaScript",
    difficulty: "Easy",
    question: "Which method adds an item to the end of an array?",
    options: ["shift()", "push()", "pop()", "slice()"],
    answer: 1,
    explanation:
      "The push() method adds one or more items to the end of an array.",
  },
  {
    subject: "Python",
    difficulty: "Easy",
    question: "Which data type stores True or False values in Python?",
    options: ["String", "Integer", "Boolean", "List"],
    answer: 2,
    explanation:
      "The bool type represents Boolean values: True and False.",
  },
  {
    subject: "Data Structures",
    difficulty: "Medium",
    question: "Which data structure follows FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: 1,
    explanation:
      "A queue follows First In, First Out. The earliest inserted item is removed first.",
  },
  {
    subject: "Databases",
    difficulty: "Medium",
    question: "Which SQL clause filters rows based on a condition?",
    options: ["ORDER BY", "GROUP BY", "WHERE", "SELECT"],
    answer: 2,
    explanation:
      "The WHERE clause filters records according to a specified condition.",
  },
  {
    subject: "Algorithms",
    difficulty: "Hard",
    question: "What is the average time complexity of merge sort?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
    answer: 2,
    explanation:
      "Merge sort divides the input and merges sorted parts, taking O(n log n) time on average.",
  },
];

export default function MCQGeneratorPage() {
  const [subject, setSubject] = useState("JavaScript");
  const [difficulty, setDifficulty] = useState("Easy");
  const [quiz, setQuiz] = useState<typeof questionBank>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [notice, setNotice] = useState("");

  function generateQuiz() {
    const matching = questionBank.filter(
      (item) =>
        item.subject === subject && item.difficulty === difficulty
    );

    if (matching.length === 0) {
      setQuiz([]);
      setAnswers([]);
      setSubmitted(false);
      setNotice(
        "No sample questions are available for this combination yet. Try another subject or difficulty."
      );
      return;
    }

    setQuiz(matching);
    setAnswers([]);
    setSubmitted(false);
    setNotice(
      "Sample quiz created. AI-generated questions will be enabled after API integration."
    );
  }

  function submitQuiz() {
    if (answers.length !== quiz.length) {
      setNotice("Please answer every question before checking your score.");
      return;
    }

    setSubmitted(true);
    setNotice("");
  }

  const score = quiz.reduce(
    (total, question, index) =>
      total + (answers[index] === question.answer ? 1 : 0),
    0
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="text-sm text-indigo-300 hover:text-white"
          >
            ← Back to Home
          </Link>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
            Personalized practice
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            Build a quiz.
            <span className="block text-indigo-300">
              Test your knowledge.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            Choose a subject and difficulty to practice multiple-choice
            questions, review explanations, and check your score.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
              Quiz settings
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Customize your practice
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Select your preferred topic and level to load a sample quiz.
            </p>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Subject
              </label>
              <select
                id="subject"
                value={subject}
                onChange={(event) => {
                  setSubject(event.target.value);
                  setNotice("");
                }}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-400"
              >
                <option>JavaScript</option>
                <option>Python</option>
                <option>Data Structures</option>
                <option>Databases</option>
                <option>Algorithms</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="difficulty"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Difficulty
              </label>
              <select
                id="difficulty"
                value={difficulty}
                onChange={(event) => {
                  setDifficulty(event.target.value);
                  setNotice("");
                }}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-400"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            onClick={generateQuiz}
            className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Generate Sample Quiz →
          </button>

          {notice && (
            <p
              role="status"
              className="mt-5 rounded-xl bg-indigo-50 p-4 text-sm leading-6 text-indigo-800"
            >
              {notice}
            </p>
          )}
        </div>

        {quiz.length > 0 && (
          <div className="mt-8 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-slate-900">
                Your quiz
              </h2>
              <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                {quiz.length} question{quiz.length === 1 ? "" : "s"}
              </span>
            </div>

            {quiz.map((question, questionIndex) => (
              <article
                key={question.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  Question {questionIndex + 1} · {question.difficulty}
                </p>

                <h3 className="mt-3 text-lg font-bold leading-7 text-slate-900">
                  {question.question}
                </h3>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = answers[questionIndex] === optionIndex;
                    const isCorrect = question.answer === optionIndex;

                    let style =
                      "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50";

                    if (submitted && isCorrect) {
                      style = "border-emerald-400 bg-emerald-50";
                    } else if (submitted && isSelected && !isCorrect) {
                      style = "border-rose-400 bg-rose-50";
                    } else if (isSelected) {
                      style = "border-indigo-500 bg-indigo-50";
                    }

                    return (
                      <button
                        key={option}
                        type="button"
                        disabled={submitted}
                        onClick={() =>
                          setAnswers((previous) => {
                            const updated = [...previous];
                            updated[questionIndex] = optionIndex;
                            return updated;
                          })
                        }
                        className={`rounded-xl border p-4 text-left text-sm font-medium text-slate-700 transition ${style}`}
                      >
                        <span className="mr-3 font-bold text-indigo-600">
                          {String.fromCharCode(65 + optionIndex)}.
                        </span>
                        {option}
                      </button>
                    );
                  })}
                </div>

                {submitted && (
                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">
                      {answers[questionIndex] === question.answer
                        ? "Correct answer!"
                        : `Correct answer: ${question.options[question.answer]}`}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {question.explanation}
                    </p>
                  </div>
                )}
              </article>
            ))}

            {!submitted ? (
              <button
                type="button"
                onClick={submitQuiz}
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Check My Score
              </button>
            ) : (
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
                <p className="text-sm font-semibold text-indigo-700">
                  QUIZ RESULTS
                </p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {score} / {quiz.length} correct
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {score === quiz.length
                    ? "Excellent work! You answered every question correctly."
                    : "Review the explanations and try another topic to improve."}
                </p>
                <button
                  type="button"
                  onClick={generateQuiz}
                  className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-bold text-slate-900">
            Need help preparing?
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Review lessons and practice the core concepts before attempting
            another quiz.
          </p>
          <Link
            href="/tutorials"
            className="mt-4 inline-flex font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Explore Tutorials →
          </Link>
        </div>
      </section>
    </main>
  );
}
