'use server'

import { revalidatePath } from "next/cache"
import { prisma } from "../db/prisma"

export async function addTodo(data) {
  const todo = {
    text: data.get('text'),
    completed: false
  }

  await prisma.todo.create({
    data: todo
  })

  revalidatePath('/')
}