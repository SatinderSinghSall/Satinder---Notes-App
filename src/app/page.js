import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-purple-200 px-6 text-center">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-md">
          Your Simple & Fast <span className="text-purple-700">Note App</span>
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
          Create, edit, and manage your notes effortlessly. Powered by Next.js,
          Prisma, and Neon.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/notes"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors text-lg"
          >
            Get Started
          </Link>
          <a
            href="https://github.com/SatinderSinghSall/Satinder---Notes-App"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors text-lg"
          >
            GitHub Repo
          </a>
        </div>
      </div>

      <footer className="absolute bottom-6 text-gray-600 text-sm">
        Built with ❤️ by <span className="font-semibold">Satinder Singh Sall </span> using Next.js, Neon,
        Prisma & TailwindCSS
      </footer>
    </div>
  );
}
