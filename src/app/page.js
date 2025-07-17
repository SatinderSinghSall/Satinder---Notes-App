import Link from "next/link";
import { FaGithub, FaRocket } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 px-6 text-center relative overflow-hidden">
      {/* Blurry Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-300 to-blue-300 opacity-20 blur-[120px]"></div>

      {/* Glass Card Container */}
      <div className="relative max-w-4xl w-full bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-12 space-y-10 border border-white/30">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-xl">
          Effortless <span className="text-purple-700">Note Taking</span>
        </h1>

        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg animate-gradient-modern">
          Satinder - Note App
        </h2>

        <p className="text-gray-800 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
          ✨ Create, edit, and manage your notes effortlessly. <br />
          Built with Next.js, Prisma, Neon, and TailwindCSS.
        </p>

        {/* Call-to-Actions */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
          <Link
            href="/notes"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-700 to-pink-500 hover:scale-105 transition-transform duration-300 text-white font-bold py-4 px-8 rounded-2xl shadow-xl text-xl"
          >
            <FaRocket className="text-2xl" /> Get Started
          </Link>
          <a
            href="https://github.com/SatinderSinghSall/Satinder---Notes-App"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-purple-700 hover:bg-purple-700 hover:text-white text-purple-700 transition-all duration-300 font-bold py-4 px-8 rounded-2xl shadow-xl text-xl"
          >
            <FaGithub className="text-2xl" /> GitHub Repo
          </a>
        </div>
      </div>

      <footer className="absolute bottom-6 text-gray-700 text-sm font-medium">
        Built with ❤️ by{" "}
        <span className="font-semibold text-purple-700">
          Satinder Singh Sall
        </span>{" "}
        using Next.js, Neon, Prisma & TailwindCSS
      </footer>
    </div>
  );
}
