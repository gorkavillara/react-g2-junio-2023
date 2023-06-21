import { Component } from "react"

export default class ClaseCicloVida extends Component {
  state = {
    clientes: []
  }
  componentDidMount() {
    // Se va a ejecutar el código necesario cuando el componente se acabe de montar
    console.log("El componente se ha montado")

    // Hacer llamadas a apis
    // -> setear el estado en función de la respuesta
    // -> seteamos clientes con la respuesta
  }

  componentDidUpdate() {
    console.log("El componente se ha actualizado")
  }

  componentWillUnmount() {
    console.log("El componente se va a desmontar")
  }

  render() {
    return <div>ClaseCicloVida</div>
  }
}
