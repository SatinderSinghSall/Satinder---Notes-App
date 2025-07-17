"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotePage({ params }) {
  const { id } = params;
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/notes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNote(data);
        setTitle(data.title);
        setContent(data.content);
      });
  }, [id]);

  const updateNote = async (e) => {
    e.preventDefault();
    await fetch(`/api/notes/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
    });
    router.push("/notes");
  };

  const deleteNote = async () => {
    await fetch(`/api/notes/${id}`, { method: "DELETE" });
    router.push("/notes");
  };

  if (!note) return <div className="p-6">Loading...</div>;

  return (
    <form onSubmit={updateNote} className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Edit Note</h1>
      <input
        className="border p-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="space-x-2">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Update
        </button>
        <button
          type="button"
          onClick={deleteNote}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </form>
  );
}
