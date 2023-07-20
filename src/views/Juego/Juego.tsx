import { useState, useEffect } from "react"
import AltaTiempo from "./components/AltaTiempo"
import Tiempos from "./components/Tiempos"

const frases = ["Supercalifragilisticoexpialidoso", "Charly tiene 0 años"]

const Juego = () => {
    const [fraseObjetivo] = useState(frases[1])
    const [fraseEscrita, setFraseEscrita] = useState("")
    const [startTime, setStartTime] = useState(new Date())
    const [tiempo, setTiempo] = useState(0)

    useEffect(() => {
        if (fraseEscrita !== fraseObjetivo) return

        const endTime = new Date()
        setTiempo((endTime.getTime() - startTime.getTime()) / 1000)
        alert("Has ganado!")
    }, [fraseEscrita, fraseObjetivo, startTime])

    const escribeFrase = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // console.log(event.key)
        const siguienteLetra = fraseObjetivo[fraseEscrita.length]
        if (event.key !== siguienteLetra) return

        if (fraseEscrita === "") setStartTime(new Date())

        // Aquí seguimos con la lógica
        setFraseEscrita((frase) => `${frase}${siguienteLetra}`)
    }

    return (
        <div>
            <h1>Juego</h1>
            <h2>{fraseObjetivo}</h2>
            <input
                type="text"
                value={fraseEscrita}
                onKeyDown={escribeFrase}
                readOnly
            />
            {tiempo > 0 && <p>Tiempo transcurrido: {tiempo} segundos</p>}
            {tiempo > 0 && <AltaTiempo tiempo={tiempo} />}
            <Tiempos />
        </div>
    )
}

export default Juego
