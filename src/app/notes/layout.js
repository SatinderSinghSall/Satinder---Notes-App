export default function NotesLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          📝 Satinder - Notes App
        </h1>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 md:px-8 max-w-3xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
