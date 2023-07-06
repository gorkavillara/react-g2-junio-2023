import "./App.scss"
import Tareas from "./views/Tareas/Tareas"
import TareasContextProvider from "./contexts/TareasContextProvider"
import ContadorContextProvider from "./contexts/ContadorContextProvider"
import Contador from "./views/Contador/Contador"

function App() {
  return (
    <>
      <TareasContextProvider>
        <Tareas />
      </TareasContextProvider>
      <ContadorContextProvider>
        <Contador />
        <Contador />
      </ContadorContextProvider>
    </>
  )
}

export default App
