import { Link } from "react-router-dom"
import alumnos from "../../assets/alumnos"

const Listas = () => {
  return (
    <div>
      <h2>Lista de alumnos</h2>
      <ul>
        {alumnos.map((alumno) => {
          // hacemos nuestros cálculos
          return (
            <li key={alumno.id}>
              <Link to={`/alumnos/${alumno.id}`}>
                <span>Nombre: {alumno.nombre}</span>
                <span> - </span>
                <span>Email: {alumno.email}</span>
                <span> - </span>
                <span>Nota: {alumno.nota}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Listas
