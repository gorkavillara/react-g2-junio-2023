import React, { useEffect, useState } from "react"
import { tiemposInstance } from "../../../assets/axiosInstances"

interface Tiempo {
    nombre: string
    tiempo: number
}

const Tiempos = () => {
    const [tiempos, setTiempos] = useState<Tiempo[]>([])

    useEffect(() => {
        obtenTiempos()
    }, [])
    const obtenTiempos = () => {
        tiemposInstance
            .post("/tiempos", { action: "get" })
            .then((res) => setTiempos(res.data))
            .catch(console.error)
    }
    return (
        <div>
            {tiempos.map((tiempo) => (
                <div key={tiempo.tiempo}>
                    {tiempo.nombre}: {tiempo.tiempo}
                </div>
            ))}
        </div>
    )
}

export default Tiempos
