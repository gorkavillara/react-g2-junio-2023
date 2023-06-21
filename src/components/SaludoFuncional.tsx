interface SaludoProps {
  nombre: string
  edad: number
  esDesarrollador: boolean
}

const SaludoFuncional = ({ nombre, edad, esDesarrollador }: SaludoProps) => {
  // const nombre = props.nombre
  // const edad = props.edad
  // const { nombre, edad } = props
  console.log(esDesarrollador) // undefined
  return (
    <div>
      Hola {nombre}, tienes {edad} años
    </div>
  )
}

const ComponenteAuxiliar = () => {
  const valor = false
  return <SaludoFuncional nombre="Gorka" edad={28} esDesarrollador={valor} />
}

export default SaludoFuncional
export { ComponenteAuxiliar }