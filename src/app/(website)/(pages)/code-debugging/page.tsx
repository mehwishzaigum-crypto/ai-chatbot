
"use client";

import { useState } from "react";

type ApiResponse = {
  success: boolean;
  message: string;
  language?: string;
  codeLength?: number;
  note?: string;
};

export default function CodeDebuggingPage() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {
    if (!code.trim()) {
      setError("Please enter your code before requesting an analysis.");
      setResult(null);
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/debug", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          language,
        }),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "The API request failed.");
      }

      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to connect to the API. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="font-semibold text-blue-700">CODING TOOL</p>

      <h1 className="mt-3 text-4xl font-bold text-slate-900">
        Code Debugging Assistant
      </h1>

      <p className="mt-4 text-slate-600">
        Submit your code to the Edu2Skill backend API.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <label
          htmlFor="language"
          className="mb-2 block font-semibold text-slate-800"
        >
          Programming Language
        </label>

        <select
          id="language"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          className="mb-5 w-full rounded-lg border border-slate-300 p-3"
        >
          <option>JavaScript</option>
          <option>TypeScript</option>
          <option>Python</option>
          <option>Java</option>
          <option>C++</option>
        </select>

        <label
          htmlFor="code"
          className="mb-2 block font-semibold text-slate-800"
        >
          Your Code
        </label>

        <textarea
          id="code"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="Paste your code here..."
          rows={10}
          className="w-full rounded-lg border border-slate-300 p-4 font-mono text-sm"
        />

        <button
          type="button"
          onClick={handleAnalyze}
          disabled={loading}
          className="mt-4 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending Request..." : "Analyze Code"}
        </button>

        {error && (
          <div
            role="alert"
            className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800"
          >
            <p className="font-semibold">Request Error</p>
            <p className="mt-2">{error}</p>
          </div>
        )}

        {result && (
          <div
            role="status"
            className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-900"
          >
            <p className="font-semibold">API Response</p>
            <p className="mt-2">{result.message}</p>

            {result.language && (
              <p className="mt-2 text-sm">
                Language: {result.language}
              </p>
            )}

            {result.codeLength !== undefined && (
              <p className="mt-1 text-sm">
                Characters received: {result.codeLength}
              </p>
            )}

            {result.note && (
              <p className="mt-2 text-sm">{result.note}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
