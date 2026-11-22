
import Link from "next/link";

const topics = [
  {
    number: "01",
    title: "Data Structures",
    description:
      "Learn arrays, linked lists, stacks, queues, trees, and graphs.",
    level: "Beginner to Intermediate",
  },
  {
    number: "02",
    title: "Algorithms",
    description:
      "Understand searching, sorting, recursion, and problem-solving techniques.",
    level: "Beginner to Advanced",
  },
  {
    number: "03",
    title: "Database Systems",
    description:
      "Explore tables, SQL queries, relationships, and database concepts.",
    level: "Beginner",
  },
  {
    number: "04",
    title: "Operating Systems",
    description:
      "Study processes, memory management, scheduling, and file systems.",
    level: "Intermediate",
  },
  {
    number: "05",
    title: "Computer Networks",
    description:
      "Understand network layers, IP addresses, protocols, and the internet.",
    level: "Beginner to Intermediate",
  },
  {
    number: "06",
    title: "Object-Oriented Programming",
    description:
      "Learn classes, objects, inheritance, encapsulation, and polymorphism.",
    level: "Beginner",
  },
];

export default function ComputerSciencePage() {
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
            Explore and understand
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Computer Science, made easier.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Explore essential computer science subjects, build strong
            foundations, and learn difficult concepts one step at a time
            with Edu2Skill.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
              Core concepts
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
              Guided learning
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
              Beginner friendly
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
              Learning library
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Choose a subject
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-slate-600">
              Start with a topic you want to understand. More lessons and
              interactive learning activities can be added next.
            </p>
          </div>

          <Link
            href="/ai-chat"
            className="inline-flex w-fit rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Ask AI for help →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 font-bold text-indigo-700">
                {topic.number}
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {topic.title}
              </h3>

              <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">
                {topic.description}
              </p>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {topic.level}
              </p>

              <Link
                href="/ai-chat"
                className="mt-5 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Ask about this topic →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-7 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Need help understanding a concept?
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Visit the AI Assistant page to explore a concept, ask questions,
            and get ready for your next learning session.
          </p>
          <Link
            href="/ai-chat"
            className="mt-6 inline-flex rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Open AI Assistant →
          </Link>
        </div>
      </section>
    </main>
  );
}
