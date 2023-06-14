import { Component } from "react"

interface TipoProps {
    nombre: string
    edad: number
}

export default class SaludoClase extends Component<TipoProps> {

  constructor(props: TipoProps) {
    super(props)
  }

  render() {
    // const nombre = this.props.nombre
    const { nombre, edad } = this.props

    return <h1>Hola {nombre}, tienes {edad} años</h1>
  }
}
