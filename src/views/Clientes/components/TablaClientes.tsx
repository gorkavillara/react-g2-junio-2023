import { Cliente } from "../../../models"
import styles from "./TablaClientes.module.scss"

const TablaClientes = ({ clientes }: { clientes: Cliente[] }) => {
    return (
        <div className={styles.TablaClientes}>
            {clientes
                .filter((cliente) => cliente.nombre)
                .map((cliente, index) => (
                    <div
                        key={cliente.id}
                        className={`${styles.Cliente} ${
                            index % 2 === 0 ? styles.Par : ""
                        }`}
                    >
                        <span>{cliente.id}</span>
                        <span>{cliente.nombre}</span>
                        <span>{cliente.age}</span>
                        <span>{cliente.email}</span>
                    </div>
                ))}
        </div>
    )
}

export default TablaClientes
