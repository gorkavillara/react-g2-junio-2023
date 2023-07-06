import { useContext } from "react"
import { ContadorContext } from "../../contexts/ContadorContextProvider"

const Contador = () => {
  const { contador, hazLlamadaEIncrementa, isLoading } = useContext(ContadorContext)
  return (
    <div>
      {isLoading && <p>Está cargando...</p>}
      <h2>Valor del contador: {contador}</h2>
      <button onClick={hazLlamadaEIncrementa} disabled={isLoading}>Incrementa</button>
    </div>
  )
}

export default Contador
