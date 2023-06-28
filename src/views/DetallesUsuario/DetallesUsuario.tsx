import { useParams } from "react-router-dom"
import alumnos from "../../assets/alumnos"

const DetallesUsuario = () => {
  const { id } = useParams()
  console.log(id)
  if (!id) return <h1>Error: no existe id</h1>

  const alumno = alumnos.find((al) => al.id.toString() === id)
  if (!alumno) return <h1>Error: Alumno no encontrado</h1>

  return (
    <div>
      <h3>Detalles del Usuario {id}</h3>
      <p>Nombre: {alumno.nombre}</p>
      <p>Nota: {alumno.nota}</p>
      <p>Email: {alumno.email}</p>
    </div>
  )
}

export default DetallesUsuario
