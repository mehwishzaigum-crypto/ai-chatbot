
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Accessible Learning",
    description:
      "Make Computer Science and programming concepts easier for learners with different skill levels.",
  },
  {
    number: "02",
    title: "Learn by Understanding",
    description:
      "Focus on understanding concepts, exploring examples, and developing problem-solving skills.",
  },
  {
    number: "03",
    title: "Technology for Education",
    description:
      "Use AI-assisted learning tools to support students as they explore technical subjects.",
  },
];

const features = [
  "Computer Science learning resources",
  "Programming language guidance",
  "Code explanation and debugging interfaces",
  "Practice questions and quizzes",
  "A simple, student-friendly experience",
  "Learning support for beginners",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-950 px-5 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="text-sm font-medium text-indigo-300 hover:text-white"
          >
            &larr; Back to Home
          </Link>

          <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
            About Edu2Skill
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Helping learners turn curiosity into skills.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Edu2Skill is an AI Teaching Assistant project designed to make
            learning Computer Science and programming more approachable,
            organized, and engaging.
          </p>

          <Link
            href="/tutorials"
            className="mt-8 inline-flex rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-400"
          >
            Explore Learning Resources &rarr;
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
            Our purpose
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Learning technology should feel helpful, not overwhelming.
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Many students find programming difficult when concepts are
            introduced without clear explanations or opportunities to
            practice. Edu2Skill brings learning resources and interactive
            interfaces together in one place.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            Our goal is to help learners explore new subjects, strengthen
            their understanding, and build confidence as they develop
            technical skills.
          </p>
        </div>

        <div className="rounded-3xl bg-indigo-50 p-7 sm:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl text-white">
            ✦
          </div>

          <h3 className="mt-6 text-2xl font-bold">Our mission</h3>

          <p className="mt-4 leading-7 text-slate-700">
            To create a supportive digital learning environment where
            students can explore Computer Science, practice programming,
            and work toward their educational goals.
          </p>

          <div className="mt-7 border-t border-indigo-200 pt-5">
            <p className="text-sm font-semibold text-indigo-700">
              Understand. Practice. Improve.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
            What guides us
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            The values behind Edu2Skill
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 font-bold text-indigo-700">
                  {value.number}
                </span>

                <h3 className="mt-6 text-xl font-bold">{value.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">
              What you can explore
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Learning tools in one place
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              The platform brings together learning pages and interactive
              practice interfaces to support different stages of a learner&apos;s
              learning journey.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-slate-200 p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-bold text-emerald-700">
                  ✓
                </span>

                <p className="text-sm leading-6 text-slate-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-indigo-600 px-7 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
            Start exploring
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Your next learning milestone starts with one question.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-indigo-100">
            Explore learning resources, practice your knowledge, and discover
            new ways to understand programming.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/computer-science"
              className="rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-700 transition hover:bg-indigo-50"
            >
              Explore Subjects
            </Link>

            <Link
              href="/ai-chat"
              className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Visit AI Assistant
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
