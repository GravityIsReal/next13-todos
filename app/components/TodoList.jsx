import { revalidatePath } from "next/cache"
import { prisma } from "../db/prisma"
import TodoCheckbox from "./TodoCheckbox"

async function getTodos() {
  const notes = await prisma.todo.findMany()
  return notes
}

async function markDone(current, id) {
  "use server"
  await prisma.todo.update({
    where: {
      id: id
    },
    data: {
      completed: !current
    }
  })
  revalidatePath('/')
}

export default async function TodoList() {
  const todos = await getTodos()
  return (
    <>
      <table className="table mt-6">
        <thead>
          <tr>
            <th></th>
            <th>Todo</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <th>{todos.indexOf(todo)+1}</th>
              <td>{todo.text}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
              <td>
                <TodoCheckbox markDone={markDone} current={todo.completed} id={todo.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}