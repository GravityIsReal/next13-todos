"use client";

import { addTodo } from "../actions";

export default function TodoForm() {
  return (
    <form className="flex mx-auto w-fit mt-4 gap-3" action={addTodo}>
      <input type="text" className="input input-bordered" placeholder="Todo Body" name="text" required/>
      <button className="btn btn-neutral">Add Todo</button>
    </form>
  )
}