import { useState } from "react"
import axios, { AxiosResponse } from "axios"
import { useQuery } from "@tanstack/react-query"

const baseUrl = "https://rickandmortyapi.com/api/character/"

interface Personaje {
  name: string
  id: number
  image: string
}

function RickMorty() {
  const [id, setId] = useState<string>("")
//   const [personaje, setPersonaje] = useState<Personaje | null>(null)

  const { data, isFetching, isError } = useQuery<AxiosResponse<Personaje>>({
    queryKey: [`rm-${id}`],
    queryFn: () => axios.get(`${baseUrl}${id}`),
    enabled: id !== ""
  })

  console.log(data)
  const personaje = data?.data

  return (
    <>
      <div>
        <h3>Búsqueda de Rick y Morty</h3>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Introduce el id a buscar"
        />
        {/* <button onClick={() => null}>Buscar</button> */}
      </div>
      {isFetching && <h2>Cargando...</h2>}
      {isError && <h2>Error</h2>}
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

export default RickMorty
