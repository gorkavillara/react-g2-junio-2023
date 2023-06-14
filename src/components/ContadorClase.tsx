import { Component } from "react"

export default class ContadorClase extends Component<Object, { contador: number }> {
  state = {
    contador: 0,
  }
  constructor(props: Object) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    // Setear el nuevo estado
    this.setState({
        contador: this.state.contador + 1
    })
  }
  render() {
    return (
      <div>
        <span>El valor del contador es: {this.state.contador}</span>
        <button onClick={this.handleClick}>Incrementa</button>
      </div>
    )
  }
}
