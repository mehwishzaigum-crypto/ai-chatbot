import Link from "next/link";

const footerLinks = [
  { name: "AI Chat", href: "/ai-chat" },
  { name: "Computer Science", href: "/computer-science" },
  { name: "Programming Help", href: "/programming-help" },
  { name: "Tutorials", href: "/tutorials" },
  { name: "About Us", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-bold text-white">
                E
              </span>
              <span>
                <span className="block text-lg font-bold text-slate-900">
                  Edu2Skill
                </span>
                <span className="block text-xs text-slate-500">
                  AI Teaching Assistant
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Learn computer science, explore programming concepts, and
              improve your skills with your AI learning companion.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-900">
              Explore Learning
            </h2>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-indigo-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-900">
              Your Learning Journey
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Ask questions, understand difficult concepts, practice coding,
              and learn at your own pace.
            </p>
            <Link
              href="/ai-chat"
              className="mt-5 inline-flex rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Start Learning
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Edu2Skill AI Teaching Assistant.
            Built for curious learners.
          </p>
        </div>
      </div>
    </footer>
  );
}