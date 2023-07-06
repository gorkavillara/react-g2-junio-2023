import { useContext } from "react"
import { TareasContext } from "../../contexts/TareasContextProvider"

const Monitor = () => {
  const contexto = useContext(TareasContext)
  if (!contexto) throw new Error("Not in provider")
  const { todos } = contexto
  return (
    <div>
      <p>Num tareas totales: {todos.length}</p>
      <p>
        Num tareas completadas: {todos.filter((todo) => todo.completado).length}
      </p>
    </div>
  )
}

export default Monitor
