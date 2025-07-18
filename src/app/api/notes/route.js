import { prisma } from "../../lib/prisma";

export async function POST(req) {
  const { name, title, content } = await req.json();
  const note = await prisma.note.create({ data: { name, title, content } });
  return Response.json(note);
}
