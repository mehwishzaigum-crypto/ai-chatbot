
import Link from "next/link";

const tutorials = [
  {
    number: "01",
    category: "Web Development",
    title: "Web Development Fundamentals",
    description:
      "Understand how websites work and learn the roles of HTML, CSS, and JavaScript.",
    duration: "6 learning modules",
    level: "Beginner",
    href: "/tutorials/web-development-fundamentals",
  },
  {
    number: "02",
    category: "Programming",
    title: "Programming Logic with Python",
    description:
      "Practice variables, conditions, loops, functions, and basic problem solving.",
    duration: "8 learning modules",
    level: "Beginner",
    href: null,
  },
  {
    number: "03",
    category: "Computer Science",
    title: "Data Structures Essentials",
    description:
      "Explore arrays, stacks, queues, linked lists, and their common use cases.",
    duration: "7 learning modules",
    level: "Intermediate",
    href: null,
  },
  {
    number: "04",
    category: "Database",
    title: "SQL and Database Basics",
    description:
      "Learn tables, queries, filtering, sorting, and relationships between data.",
    duration: "5 learning modules",
    level: "Beginner",
    href: null,
  },
  {
    number: "05",
    category: "Problem Solving",
    title: "Algorithms Made Simple",
    description:
      "Discover searching, sorting, algorithm efficiency, and logical thinking.",
    duration: "6 learning modules",
    level: "Intermediate",
    href: null,
  },
  {
    number: "06",
    category: "Modern Development",
    title: "Getting Started with TypeScript",
    description:
      "Learn type annotations, interfaces, and the basics of safer JavaScript.",
    duration: "5 learning modules",
    level: "Beginner",
    href: null,
  },
];

export default function TutorialsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-white px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
          >
            ← Back to Home
          </Link>

          <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                Your learning library
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Small lessons.
                <span className="block text-indigo-600">
                  Stronger skills.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Explore guided learning paths designed to make Computer
                Science and programming easier to understand.
              </p>

              <Link
                href="/computer-science"
                className="mt-8 inline-flex rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
              >
                Explore subjects →
              </Link>
            </div>

            <div className="rounded-3xl bg-indigo-50 p-7 sm:p-9">
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                A simple learning plan
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                Learn at your own pace
              </h2>

              <div className="mt-7 space-y-5">
                {[
                  {
                    title: "Choose a topic",
                    detail: "Find a subject that matches your goals.",
                  },
                  {
                    title: "Understand the basics",
                    detail: "Build your knowledge step by step.",
                  },
                  {
                    title: "Practice what you learn",
                    detail: "Use examples to strengthen your skills.",
                  },
                ].map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-indigo-700 shadow-sm">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {step.detail}
                      </p>
                    </div>
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
            Browse tutorials
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Find your next lesson
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Pick a learning path to explore its subject and continue building
            your technical knowledge.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <article
              key={tutorial.number}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
                  {tutorial.category}
                </span>

                <span className="text-sm font-bold text-slate-300">
                  {tutorial.number}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {tutorial.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {tutorial.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                <span className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
                  {tutorial.duration}
                </span>

                <span className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
                  {tutorial.level}
                </span>
              </div>

              {tutorial.href ? (
                <Link
                  href={tutorial.href}
                  className="mt-5 inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Start Learning →
                </Link>
              ) : (
                <span className="mt-5 inline-flex items-center font-semibold text-slate-400">
                  Course coming soon
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-3xl bg-slate-950 px-7 py-10 text-white sm:px-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Want help with a difficult lesson?
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Use Edu2Skill to explore concepts and prepare questions while you
            study. Live AI responses will be connected in a later step.
          </p>

          <Link
            href="/ai-chat"
            className="mt-7 inline-flex rounded-xl bg-indigo-500 px-5 py-3 font-semibold text-white hover:bg-indigo-400"
          >
            Visit AI Assistant →
          </Link>
        </div>
      </section>
    </main>
  );
}
