"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Loader2, ArrowLeft } from "lucide-react";

export default function NewNotePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createNote = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ name, title, content }),
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
        <button
          type="button"
          onClick={() => {
            if (window.history.length > 2) {
              router.back();
            } else {
              router.push("/notes");
            }
          }}
          className="flex items-center gap-2 text-purple-700 hover:text-purple-900 text-sm font-medium transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Notes</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <Plus className="w-8 h-8 text-purple-700" />
          <h1 className="text-3xl font-bold text-gray-900">Create New Note</h1>
        </div>

        <label className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          placeholder="Enter Name..."
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="block text-gray-700 mb-2"> Title</label>
        <input
          type="text"
          placeholder="Enter Title..."
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label className="block text-gray-700 mb-2">Content</label>
        <textarea
          placeholder="Enter Content..."
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
