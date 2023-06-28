interface Alumno {
  id: number
  nombre: string
  email: string
  nota: number
}

const alumnos: Alumno[] = [
  {
    id: 1,
    nombre: "Alex Ramos",
    nota: 5.0,
    email: "alejandro@ramos.com",
  },
  {
    id: 2,
    nombre: "Juan Carlos Iglesias",
    nota: 3,
    email: "juancarlos@iglesias.com",
  },
  {
    id: 3,
    nombre: "Álvaro Girona",
    nota: -5.0,
    email: "alvaro@girona.com",
  },
  {
    id: 4,
    nombre: "Charly",
    nota: 6,
    email: "charly@koch.com",
  },
]

const Listas = () => {
  return (
    <div>
      <h2>Lista de alumnos</h2>
      <ul>
        {alumnos.map((alumno, index) => {
          // hacemos nuestros cálculos
          return (
            <li key={alumno.id}>
              <span>Nombre: {alumno.nombre}</span>
              <span> - </span>
              <span>Email: {alumno.email}</span>
              <span> - </span>
              <span>Nota: {alumno.nota}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Listas
