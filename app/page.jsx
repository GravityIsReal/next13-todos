import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-gray-900 text-center mt-5">All Todos</h1>
      <TodoForm />
      <TodoList />
    </main>
  )
}
