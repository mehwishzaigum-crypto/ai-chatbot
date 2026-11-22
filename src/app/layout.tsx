
import type { Metadata } from "next";
import Navbar from "./(website)/component/layout/Navbar/page";
import Footer from "./(website)/component/layout/Footer/page";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edu2Skill | AI Teaching Assistant",
  description:
    "Learn Computer Science, explore programming, practice coding, and improve your skills with Edu2Skill.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
