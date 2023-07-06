import useContador from "../../hooks/useContador"

const Contador = () => {
  const { contador, incrementaCinco, incrementaContador } = useContador()
  return (
    <div>
      <h2>Valor del contador: {contador}</h2>
      <button onClick={incrementaContador}>Incrementa</button>
      <button onClick={incrementaCinco}>Incrementa 5</button>
    </div>
  )
}

export default Contador
