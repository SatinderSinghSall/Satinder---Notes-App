"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewNotePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const createNote = async (e) => {
    e.preventDefault();
    await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });
    router.push("/notes");
  };

  return (
    <form onSubmit={createNote} className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">New Note</h1>
      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        className="border p-2 w-full"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create
      </button>
    </form>
  );
}
