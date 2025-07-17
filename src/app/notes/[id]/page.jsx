"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Trash2, Save, ArrowLeft } from "lucide-react";

export default function NotePage({ params }) {
  const { id } = params;
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
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
    setLoading(true);
    await fetch(`/api/notes/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
    });
    setLoading(false);
    router.push("/notes");
  };

  const deleteNote = async () => {
    setDeleting(true);
    await fetch(`/api/notes/${id}`, { method: "DELETE" });
    setDeleting(false);
    router.push("/notes");
  };

  if (!note) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 text-xl">
        <Loader2 className="animate-spin w-6 h-6 mr-2" /> Loading note...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 p-6">
      <form
        onSubmit={updateNote}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl space-y-6"
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
          className="flex items-center gap-2 text-purple-700 hover:text-purple-900 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Notes</span>
        </button>

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
          ✏️ Edit Note
        </h1>

        <input
          className="border rounded-lg p-3 w-full text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Note Title"
        />

        <textarea
          className="border rounded-lg p-3 w-full h-40 resize-none text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          placeholder="Note Content"
        />

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={loading}
            className={`flex-1 flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-lg transition-colors ${
              loading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" /> Updating...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" /> Update
              </>
            )}
          </button>

          <button
            type="button"
            onClick={deleteNote}
            disabled={deleting}
            className={`flex-1 flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-lg transition-colors ${
              deleting
                ? "bg-red-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {deleting ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" /> Deleting...
              </>
            ) : (
              <>
                <Trash2 className="w-5 h-5" /> Delete
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
