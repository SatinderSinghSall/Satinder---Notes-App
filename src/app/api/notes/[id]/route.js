import { prisma } from "../../../lib/prisma";

export async function GET(req, { params }) {
  const note = await prisma.note.findUnique({ where: { id: params.id } });
  return Response.json(note);
}

export async function PUT(req, { params }) {
  const { title, content } = await req.json();
  const note = await prisma.note.update({
    where: { id: params.id },
    data: { title, content },
  });
  return Response.json(note);
}

export async function DELETE(req, { params }) {
  await prisma.note.delete({ where: { id: params.id } });
  return Response.json({ ok: true });
}
