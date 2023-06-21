import { useState } from "react"
import "./App.css"
import FuncionalCicloVida from "./components/FuncionalCicloVida"
import ComponenteComplejo from "./components/ComponenteComplejo"

function App() {
  const [visible, setVisible] = useState(true)
  // const cambiaVisibilidad = () => setVisible(!visible)
  // const cambiaVisibilidad = () => setVisible(valorAnterior => !valorAnterior)
  const cambiaVisibilidad = () => {
    // setVisible(!visible)
    // setVisible(!visible)
    setVisible(valorAnterior => !valorAnterior)
    setVisible(valorAnterior => !valorAnterior)
  }
  return visible ? (
    <div>
      <button onClick={cambiaVisibilidad}>Cambiar visibilidad</button>
      <button onClick={() => setVisible(v => !v)}>Cambiar visibilidad</button>
      <br />
      <br />
      {visible && <FuncionalCicloVida />}
      <ComponenteComplejo nombre="Victor" />
    </div>
  ) : null
}

export default App
