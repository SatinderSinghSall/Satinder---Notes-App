"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Loader2 } from "lucide-react";

export default function NewNotePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createNote = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });
    setLoading(false);
    router.push("/notes");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-6">
      <form
        onSubmit={createNote}
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl space-y-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <Plus className="w-8 h-8 text-purple-700" />
          <h1 className="text-3xl font-bold text-gray-900">Create New Note</h1>
        </div>

        <input
          type="text"
          placeholder="Title"
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          className="border rounded-lg p-3 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`flex justify-center items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg w-full transition-colors ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Creating...
            </>
          ) : (
            "Create Note"
          )}
        </button>
      </form>
    </div>
  );
}
