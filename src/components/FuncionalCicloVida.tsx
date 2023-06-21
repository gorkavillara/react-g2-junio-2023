import { useEffect, useState } from "react"

const FuncionalCicloVida = () => {
  const [contador, setContador] = useState(0)

  // Equiv componentDidMount
  useEffect(() => {
    console.log("Componente montado")
    setContador(cont => cont + 1)
  }, [])

  // Equiv componentDidUpdate (contador)
  useEffect(() => {
    console.log("Contador actualizado")
  }, [contador])

  // Equiv componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Componente se va a desmontar")
    }
  }, [])

  const handleClick = () => {
    setContador(valorAnterior => valorAnterior + 1)
  }

  return <button onClick={handleClick}>{contador}</button>
}

export default FuncionalCicloVida
