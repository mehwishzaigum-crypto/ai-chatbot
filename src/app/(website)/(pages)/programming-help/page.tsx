
import Link from "next/link";

const languages = [
  {
    number: "01",
    title: "JavaScript",
    subtitle: "Web Development",
    description:
      "Learn variables, functions, arrays, objects, promises, and modern JavaScript.",
    level: "Beginner friendly",
  },
  {
    number: "02",
    title: "Python",
    subtitle: "Programming Fundamentals",
    description:
      "Explore Python syntax, loops, functions, collections, and basic problem solving.",
    level: "Beginner friendly",
  },
  {
    number: "03",
    title: "TypeScript",
    subtitle: "Typed JavaScript",
    description:
      "Understand types, interfaces, functions, and safer JavaScript development.",
    level: "Beginner to Intermediate",
  },
  {
    number: "04",
    title: "C++",
    subtitle: "Logic and Algorithms",
    description:
      "Practice conditions, loops, functions, pointers, and object-oriented concepts.",
    level: "Beginner to Advanced",
  },
  {
    number: "05",
    title: "Java",
    subtitle: "Object-Oriented Programming",
    description:
      "Learn classes, objects, inheritance, methods, and core Java concepts.",
    level: "Beginner to Intermediate",
  },
  {
    number: "06",
    title: "HTML & CSS",
    subtitle: "Website Building",
    description:
      "Build page structures and style responsive websites with modern CSS.",
    level: "Beginner friendly",
  },
];

export default function ProgrammingHelpPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="text-sm text-indigo-300 hover:text-white"
          >
            ← Back to Home
          </Link>

          <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
                Your coding companion
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Make coding feel less complicated.
              </h1>

              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                Explore programming languages, strengthen your logic, and
                learn how code works through clear explanations and examples.
              </p>

              <Link
                href="/ai-chat"
                className="mt-8 inline-flex rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-400"
              >
                Get coding guidance →
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500 text-xl font-bold">
                  {"</>"}
                </span>
                <div>
                  <h2 className="font-bold">A smarter way to practice</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Learn one step at a time
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Understand the programming concept",
                  "Explore a simple code example",
                  "Practice and improve your solution",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white/5 p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-bold text-indigo-200">
                      {index + 1}
                    </span>
                    <p className="text-sm text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
            Choose your language
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            What do you want to code?
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Start with a language that matches your interests. Each option
            offers a starting point for your learning journey.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((language) => (
            <article
              key={language.number}
              className="group rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 font-bold text-indigo-700">
                  {language.number}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  {language.level}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {language.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-indigo-600">
                {language.subtitle}
              </p>
              <p className="mt-4 min-h-20 text-sm leading-6 text-slate-600">
                {language.description}
              </p>

              <Link
                href="/ai-chat"
                className="mt-5 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Get help with {language.title} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-3xl bg-slate-950 px-7 py-10 text-white sm:px-10">
          <h2 className="text-2xl font-bold">
            Stuck on a programming problem?
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-300">
            Visit the AI Assistant page to explore coding questions and
            understand programming concepts. Live AI answers will work after
            the AI API is integrated.
          </p>
          <Link
            href="/ai-chat"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-indigo-50"
          >
            Ask a question →
          </Link>
        </div>
      </section>
    </main>
  );
}
