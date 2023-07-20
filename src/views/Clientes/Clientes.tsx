import { useState, useEffect } from "react"
import { clientsInstance } from "../../assets/axiosInstances"
import { Cliente } from "../../models"
import TablaClientes from "./components/TablaClientes"
import FormularioNuevoCliente from "./components/FormularioNuevoCliente"

const Clientes = () => {
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(() => {
        buscaClientes()
    }, [])

    const buscaClientes = () => {
        clientsInstance
            .post<Cliente[]>("/clients", {
                action: "get",
            })
            .then((res) => setClientes(res.data))
            .catch(console.error)
    }

    return (
        <div>
            <h1>Clientes</h1>
            <FormularioNuevoCliente />
            <button onClick={buscaClientes}>Busca clientes</button>
            {clientes && clientes.length > 0 && (
                <TablaClientes clientes={clientes} />
            )}
        </div>
    )
}

export default Clientes
