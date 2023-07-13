import { useState, useMemo, useCallback } from "react"
import Monitor from "./Monitor"
import Controles from "./Controles"

const obtenDoble = (numero: number) => {
  let suma = 0
  for (let i = 0; i < 123456789; i++) {
    suma++
  }
  return numero * 2
}

const Contador = () => {
  const [contador, setContador] = useState(0)
  const [toggle, setToggle] = useState(false)

  const dobleContador = useMemo(() => obtenDoble(contador), [contador])

  //   useEffect(() => {
  // almacenamos el doble del contador
  // dispatch()
  //   }, [contador])

  const decrementa = useCallback(() => setContador((prev) => prev - 1), [])
  const incrementa = useCallback(() => setContador((prev) => prev + 1), [])

//   const decrementa = useCallback(() => setContador(contador - 1), [contador])
//   const incrementa = useCallback(() => setContador(contador + 1), [contador])

  return (
    <div>
      <h2>Contador</h2>
      <button onClick={() => setToggle((prev) => !prev)}>
        {toggle ? "On" : "Off"}
      </button>
      <Monitor contador={dobleContador} />
      <Controles decrementa={decrementa} incrementa={incrementa} />
    </div>
  )
}

export default Contador
