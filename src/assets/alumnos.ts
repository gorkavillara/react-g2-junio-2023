interface Alumno {
  id: number
  nombre: string
  email: string
  nota: number
}

const copiado = Math.random() > 0.5

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
    nota: 3.5,
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
    nota: copiado ? 3 : 6.2,
    email: "charly@koch.com",
  },
]

export default alumnos
