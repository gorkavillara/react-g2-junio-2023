import React, { Component } from "react"

export default class EventosClase extends Component {
  constructor(props: any) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log("Has hecho click")
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Haz click</button>
      </div>
    )
  }
}
