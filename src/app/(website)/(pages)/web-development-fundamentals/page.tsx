
import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/tutorials"
          className="font-semibold text-indigo-600 hover:text-indigo-800"
        >
          ← Back to Tutorials
        </Link>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
            Beginner Course
          </span>

          <h1 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            Web Development Fundamentals
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Learn how websites work and understand the three important
            technologies used to build websites: HTML, CSS, and JavaScript.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <h2 className="font-bold text-slate-900">HTML</h2>
              <p className="mt-2 text-sm text-slate-600">
                Build the structure of a webpage.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <h2 className="font-bold text-slate-900">CSS</h2>
              <p className="mt-2 text-sm text-slate-600">
                Design and style your webpage.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <h2 className="font-bold text-slate-900">JavaScript</h2>
              <p className="mt-2 text-sm text-slate-600">
                Make your webpage interactive.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <p className="font-bold uppercase tracking-wider text-indigo-600">
            Lesson 01
          </p>

          <h2 className="mt-3 text-2xl font-bold text-slate-900">
            Introduction to HTML
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            HTML stands for HyperText Markup Language. It is used
            to create the structure and content of web pages.
            HTML uses elements such as headings, paragraphs,
            images, and links.
          </p>

          <h3 className="mt-8 text-xl font-bold text-slate-900">
            Watch the video tutorial
          </h3>

          <p className="mt-2 text-slate-600">
            Watch this beginner-friendly HTML crash course.
          </p>

          <div className="mt-5 aspect-video overflow-hidden rounded-2xl bg-slate-900">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/UB1O30fR-EE"
              title="HTML Crash Course for Beginners"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-indigo-950 p-8 text-white">
          <h2 className="text-2xl font-bold">
            What you will learn
          </h2>

          <ul className="mt-5 space-y-3 text-indigo-100">
            <li>✓ What HTML is and why it is used</li>
            <li>✓ How HTML elements work</li>
            <li>✓ How to create headings and paragraphs</li>
            <li>✓ How to build your first webpage</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
