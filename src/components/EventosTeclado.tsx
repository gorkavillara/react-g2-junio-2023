import { useState, useEffect } from "react"

const frases = [
  "Supercalifragilisticoexpialidoso",
  "Ahaztezina izango dela",
  "Schwarz",
  "Schwarz ist ein sehr gutes Firm",
  "Eduardo Sánchez-Colorado Riera-Marsá",
]

const frase = frases[0]

const EventosTeclado = () => {
  const [valorInput, setValorInput] = useState("")
  const [initialTime, setInitialTime] = useState<Date | null>(null)
  // const [indice, setIndice] = useState(0)
  const escribirLetra = (evento: React.KeyboardEvent<HTMLInputElement>) => {
    if (evento.key !== frase.charAt(valorInput.length)) return
    // Si el evento.key coincide con la primera letra, la escribimos

    if (valorInput.length === 0) setInitialTime(new Date())
    
    // console.log(evento.key)
    // console.log("Letra correcta")
    setValorInput(valorAnterior => `${valorAnterior}${evento.key}`)
  }
  const cambiaInput = (evento: React.ChangeEvent<HTMLInputElement>) => {
    // setValorInput()
    console.log(evento.target.value)
    setValorInput(evento.target.value)
  }

  const resetState = () => {
    setValorInput("")
    setInitialTime(null)
  }

  useEffect(() => {
    if (valorInput !== frase) return
    // Chequeamos si el valor de input coincide con la frase

    const segundos = (new Date().getTime() - initialTime!.getTime()) / 1000

    alert(`Buen trabajo! Has tardado ${segundos} segundos`)
  }, [valorInput, initialTime])
  return (
    <div>
      <h2>{frase}</h2>
      {/* <input value={valorInput} onChange={cambiaInput} /> */}
      <input value={valorInput} onKeyDown={escribirLetra} readOnly />
      <button onClick={resetState}>Reset</button>
    </div>
  )
}

export default EventosTeclado
