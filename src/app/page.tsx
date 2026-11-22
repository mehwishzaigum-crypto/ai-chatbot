import Link from "next/link";

const learningTools = [
  {
    number: "01",
    title: "Computer Science",
    description:
      "Understand algorithms, data structures, databases, and core CS concepts.",
    href: "/computer-science",
    label: "Explore concepts",
  },
  {
    number: "02",
    title: "Programming Help",
    description:
      "Learn programming logic and get guidance with coding problems.",
    href: "/programming-help",
    label: "Get coding help",
  },
  {
    number: "03",
    title: "Code Explanation",
    description:
      "Break down confusing code into clear, beginner-friendly steps.",
    href: "/code-explanation",
    label: "Explain code",
  },
  {
    number: "04",
    title: "Code Debugging",
    description:
      "Understand common programming errors and explore possible fixes.",
    href: "/code-debugging",
    label: "Debug code",
  },
  {
    number: "05",
    title: "Practice Questions",
    description:
      "Test your understanding with questions on the topics you study.",
    href: "/practice-questions",
    label: "Start practicing",
  },
  {
    number: "06",
    title: "Quiz & MCQs",
    description:
      "Prepare for assessments with multiple-choice questions and quizzes.",
    href: "/mcq-generator",
    label: "Test your knowledge",
  },
];

const popularTopics = [
  "JavaScript",
  "Python",
  "Data Structures",
  "Web Development",
  "Operating Systems",
  "Database Systems",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-white/5 px-4 py-2 text-sm text-indigo-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Your personal AI learning companion
            </span>

            <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learn smarter.
              <span className="block text-indigo-300">
                Code with confidence.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Explore Computer Science, understand programming concepts, and
              build your skills with Edu2Skill AI Teaching Assistant.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/ai-chat"
                className="rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-400"
              >
                Ask the AI Assistant →
              </Link>

              <Link
                href="/tutorials"
                className="rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Explore tutorials
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
              <span>✓ Beginner-friendly learning</span>
              <span>✓ Programming guidance</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg">
            <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur sm:p-7">
              <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500 text-xl text-white">
                  ✦
                </div>
                <div>
                  <h2 className="font-semibold text-white">
                    Edu2Skill AI Assistant
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Your study partner
                  </p>
                </div>
                <span className="ml-auto rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Ready to learn
                </span>
              </div>

              <div className="mt-6 rounded-2xl rounded-tl-sm bg-white/10 p-4">
                <p className="text-xs font-medium text-indigo-300">
                  YOU CAN ASK
                </p>
                <p className="mt-2 leading-6 text-slate-200">
                  “Can you explain JavaScript promises in simple words?”
                </p>
              </div>

              <div className="mt-4 rounded-2xl rounded-tr-sm bg-indigo-500/20 p-4">
                <p className="text-xs font-medium text-indigo-200">
                  YOUR LEARNING JOURNEY
                </p>
                <p className="mt-2 leading-6 text-slate-200">
                  Understand the concept, explore a code example, and then
                  practice what you learned.
                </p>
              </div>

              <Link
                href="/ai-chat"
                className="mt-6 flex items-center justify-between rounded-xl bg-white px-4 py-4 text-sm font-semibold text-slate-900 transition hover:bg-indigo-50"
              >
                Start a conversation
                <span className="text-indigo-600">↗</span>
              </Link>

              <p className="mt-4 text-center text-xs text-slate-500">
                AI responses will be enabled when the AI API is integrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Learn your way
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to grow your skills
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Choose a learning tool and take the next step in your Computer
            Science and programming journey.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningTools.map((tool) => (
            <article
              key={tool.number}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-950/5"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 font-bold text-indigo-700">
                  {tool.number}
                </span>
                <span className="text-xl text-slate-300 transition group-hover:text-indigo-600">
                  ↗
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold">{tool.title}</h3>
              <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">
                {tool.description}
              </p>

              <Link
                href={tool.href}
                className="mt-5 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-800"
              >
                {tool.label} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                Explore subjects
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                What do you want to learn today?
              </h2>
            </div>
            <Link
              href="/computer-science"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              View all subjects →
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {popularTopics.map((topic) => (
              <Link
                key={topic}
                href="/computer-science"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="overflow-hidden rounded-3xl bg-indigo-600 px-7 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
            Your next step starts here
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Confused about a concept? Let’s learn it together.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-indigo-100">
            Ask questions, explore examples, and make challenging programming
            topics easier to understand.
          </p>
          <Link
            href="/ai-chat"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Open AI Assistant →
          </Link>
        </div>
      </section>
    </main>
  );
}