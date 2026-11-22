
"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "AI Chat", href: "/ai-chat" },
  { name: "CS Topics", href: "/computer-science" },
  { name: "Programming", href: "/programming-help" },
  { name: "Tutorials", href: "/tutorials" },
  { name: "Lessons", href: "/lessons/nextjs-components" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-bold text-white">
            E
          </div>

          <div>
            <span className="block text-lg font-bold tracking-tight text-slate-900">
              Edu2Skill
            </span>

            <span className="block text-xs text-slate-500">
              AI Teaching Assistant
            </span>
          </div>
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/ai-chat"
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Ask AI
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-slate-100 px-5 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/ai-chat"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-xl bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Ask AI
          </Link>
        </nav>
      )}
    </header>
  );
}
