interface SaludoProps {
  nombre: string
  edad: number
}

const SaludoFuncional = ({ nombre, edad }: SaludoProps) => {
  // const nombre = props.nombre
  // const edad = props.edad
  // const { nombre, edad } = props
  return (
    <div>
      Hola {nombre}, tienes {edad} años
    </div>
  )
}

export default SaludoFuncional
