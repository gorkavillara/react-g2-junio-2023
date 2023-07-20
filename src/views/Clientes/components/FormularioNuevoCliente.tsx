import React, { useState } from "react"
import { clientsInstance } from "../../../assets/axiosInstances"
import { Cliente } from "../../../models"

const FormularioNuevoCliente = () => {
    const [cliente, setCliente] = useState<Cliente>({
        id: 0,
        age: 0,
        email: "",
        nombre: ""
    })
    const altaCliente = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        clientsInstance
            .post("/clients", {
                action: "create",
                client: cliente,
            })
            .then(console.log)
            .catch(console.error)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setCliente((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    return (
        <form onSubmit={altaCliente}>
            <input
                type="text"
                placeholder="nombre"
                value={cliente.nombre}
                name="nombre"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="edad"
                value={cliente.age}
                name="age"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="email"
                value={cliente.email}
                name="email"
                onChange={handleChange}
            />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default FormularioNuevoCliente
