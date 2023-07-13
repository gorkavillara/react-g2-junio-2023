import "./App.scss"
import Contador from "./views/Contador/Contador"

// const log = (msg: string) => {
//   if (import.meta.env.MODE === "production") return

//   console.log(msg)
// }

function App() {
  const entorno = import.meta.env.MODE

  return (
    <>
      <h2>{import.meta.env.VITE_APP_NAME}</h2>
      <Contador />
      <p>Entorno: {entorno}</p>
      <p>Api URL: {import.meta.env.VITE_API_URL}</p>
    </>
  )
}

export default App
