import "./App.scss"
import Contador from "./views/Contador/Contador"
import RickMorty from "./views/RickMorty/RickMorty"

// const log = (msg: string) => {
//   if (import.meta.env.MODE === "production") return

//   console.log(msg)
// }

function App() {
  return (
    <>
      <Contador />
      <RickMorty />
    </>
  )
}

export default App
