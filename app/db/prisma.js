import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient()

export async function getTodos() {
  const notes = await prisma.todo.findMany()
  return notes
}

export async function markDone(id) {
  const note = await prisma.todo.findUnique({
    where: {
      id
    }
  })
  note.completed = !note.completed
  prisma.todo.update({
    where: {
      id
    },
    data: {
      ...note
    }
  })
  // revalidatePath('/')
}