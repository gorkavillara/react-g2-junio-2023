import { useState } from "react"

// function suma(a, b) {
//     return a + b
// }

// type Props = {
//     nombre: string
// }

// const suma = (a: number, b: number) => a + b

const ContadorFuncional = () => {
//   const estado = useState(10)
//   const valorEstado = estado[0]
//   const funcionCambiarValor = estado[1]
    const [contador, setContador] = useState(0)

//   let contador = 0

  const handleClick = () => {
    // console.log("He hecho click")
    // contador++
    // console.log(contador)

    // setContador(contador + 1)
    // setContador(contador + 1)

    setContador(valorAnterior => valorAnterior + 1)
    // setContador(valorAnterior => valorAnterior + 1)
  }
  return (
    <>
      <div>El valor del contador es: {contador}</div>
      <button onClick={handleClick}>Incrementa</button>
    </>
  )
}

export default ContadorFuncional
