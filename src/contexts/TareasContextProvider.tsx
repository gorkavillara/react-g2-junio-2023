import { useState, createContext, PropsWithChildren } from "react"

interface Todo {
  id: number
  texto: string
  completado: boolean
}

interface ProviderValues {
  todos: Todo[]
  completaTodo: (id: number) => void
  nuevoTodo: (item: Todo) => void
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const TareasContext = createContext<ProviderValues>(null!)

const TareasContextProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 0,
      texto: "Sacar la basura",
      completado: false,
    },
  ])

  const nuevoTodo = (item: Todo) => setTodos((prev) => [...prev, item])
  const completaTodo = (id: number) =>
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completado: true } : { ...todo }
      )
    )
  return (
    <TareasContext.Provider value={{ todos, nuevoTodo, completaTodo }}>
      {children}
    </TareasContext.Provider>
  )
}

export default TareasContextProvider
