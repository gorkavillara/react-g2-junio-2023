import { useRef } from "react"

const EventosFuncionales = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const obtenInfoRef = () => {
    const elemento = inputRef.current
    console.log(elemento)
    // if (!elemento) return
    console.log(elemento?.value || "No hay elemento")
  }

  const oculta = () => {
    if (!inputRef || !inputRef.current) return
    // Mala práctica -> Programación imperativa
    inputRef.current.style.display = "none"
  }
  return (
    <div>
      <input ref={inputRef} id="miId" type="text" placeholder="Tu nombre" />
      <br />
      <button onClick={obtenInfoRef}>Enviar</button>
      <br />
      <button onClick={oculta}>Visibilidad</button>
    </div>
  )
}

export default EventosFuncionales
