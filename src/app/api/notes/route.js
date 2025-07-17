import { prisma } from "../../lib/prisma";

export async function POST(req) {
  const { title, content } = await req.json();
  const note = await prisma.note.create({ data: { title, content } });
  return Response.json(note);
}
