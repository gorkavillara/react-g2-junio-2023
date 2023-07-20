import { useState } from "react"
import { tiemposInstance } from "../../../assets/axiosInstances"

const AltaTiempo = ({ tiempo }: { tiempo: number }) => {
    const [nombre, setNombre] = useState("")

    const enviarTiempo = () => {
        tiemposInstance
            .post("/tiempos", {
                action: "create",
                nombre,
                tiempo,
            })
            .then(console.log)
            .catch(console.error)
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Introduce tu nombre"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
            />
            <button onClick={enviarTiempo}>Enviar</button>
        </div>
    )
}

export default AltaTiempo
