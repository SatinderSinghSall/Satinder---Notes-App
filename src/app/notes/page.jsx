import { prisma } from "../lib/prisma";
import Link from "next/link";

export default async function NotesPage() {
  const notes = await prisma.note.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <Link href="/notes/new" className="text-blue-600 underline">
        + New Note
      </Link>
      <ul className="mt-4 space-y-2">
        {notes.map((note) => (
          <li key={note.id}>
            <Link
              href={`/notes/${note.id}`}
              className="text-lg text-gray-800 hover:text-blue-500"
            >
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
