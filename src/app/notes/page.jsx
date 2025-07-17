import { prisma } from "../lib/prisma";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function NotesPage() {
  const notes = await prisma.note.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
          📒 Your Notes
        </h1>

        <div className="flex justify-center mb-8">
          <Link
            href="/notes/new"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-5 rounded-full transition-colors shadow-lg flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            <span>Create New Note</span>
          </Link>
        </div>

        {notes.length === 0 ? (
          <p className="text-center text-gray-600">
            No notes yet. Create your first note!
          </p>
        ) : (
          <ul className="space-y-4">
            {notes.map((note) => (
              <li key={note.id}>
                <Link
                  href={`/notes/${note.id}`}
                  className="block bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">
                    {note.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {new Date(note.createdAt).toLocaleDateString()}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
