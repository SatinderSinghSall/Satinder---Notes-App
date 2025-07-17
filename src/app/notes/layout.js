export default function NotesLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 to-blue-100">
      <main className="flex-1 px-4 md:px-8 max-w-3xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
