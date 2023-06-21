import ComponenteAuxiliar from "./ComponenteAuxiliar"
import "./ComponenteComplejo.css"

const OtroComponenteQueNecesito = ({ nombre }: { nombre: string }) => {
  return <h1>{nombre}</h1>
}

const ComponenteComplejo = ({ nombre }: { nombre: string }) => {
  return (
    <div>
      <ComponenteAuxiliar />
      <OtroComponenteQueNecesito nombre={nombre} />
    </div>
  )
}

export default ComponenteComplejo
