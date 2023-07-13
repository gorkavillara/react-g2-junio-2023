import React from "react"

interface IProps {
    incrementa: () => void
    decrementa: () => void
}

const Controles = React.memo(({ incrementa, decrementa } : IProps) => {
  return (
    <>
        <button onClick={decrementa}>Decrementa</button>
        <button onClick={incrementa}>Incrementa</button>
    </>
  )
})

export default Controles