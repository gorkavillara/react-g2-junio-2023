import { useState } from "react"
import axios from "axios"
import "./App.scss"

const baseUrl = "https://rickandmortyapi.com/api/character/"

interface Personaje {
  name: string
  id: number
  image: string
}

function App() {
  const [id, setId] = useState<string>("")
  const [personaje, setPersonaje] = useState<Personaje | null>(null)

  const buscaIdFetch = async () => {
    // hacer la búsqueda del id
    const url = `${baseUrl}${id}`
    const respuesta = await fetch(url)
    console.log(respuesta)
    const info = await respuesta.json()
    console.log(info)
  }
  const buscaIdAxios = async () => {
    // hacer la búsqueda del id
    const url = `${baseUrl}${id}`
    // try {
      // const { data: pers } = await axios.get(url)
      // console.log(pers)
      // setPersonaje(pers)
    // } catch (e) {
      // window.alert("Error!")
    // }
    axios.get(url)
      .then(res => setPersonaje(res.data))
      .catch(error => console.error(error))
      .finally(() => console.log("Llamada finalizada"))
  }
  return (
    <>
      <div>
        <h3>Búsqueda de Rick y Morty</h3>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Introduce el id a buscar"
        />
        <button onClick={buscaIdFetch}>Buscar</button>
        <button onClick={buscaIdAxios}>Axios</button>
      </div>
      {personaje && (
        <>
          <p>
            {personaje.id}. {personaje.name}
          </p>
          <img src={personaje.image} />
        </>
      )}
    </>
  )
}

export default App
