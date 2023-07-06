import { useState } from "react"

const useContador = () => {
  const [contador, setContador] = useState(0)

  const incrementaContador = () => setContador(prev => prev + 1)

  const incrementaCinco = () => setContador(prev => prev + 5)
  
  return { contador, nombre: "contador", incrementaCinco, incrementaContador }
}

export default useContador
