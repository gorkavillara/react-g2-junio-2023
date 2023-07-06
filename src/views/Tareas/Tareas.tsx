import { useContext } from "react"
import Monitor from "./Monitor"
import { TareasContext } from "../../contexts/TareasContextProvider"
const Tareas = () => {
  const { todos, completaTodo } = useContext(TareasContext)
  return (
    <div>
      <h2>Tareas</h2>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.texto}</span>
              <button onClick={() => completaTodo(todo.id)}>Completar</button>
            </li>
          ))}
        </ul>
      )}
      <Monitor />
    </div>
  )
}

export default Tareas
