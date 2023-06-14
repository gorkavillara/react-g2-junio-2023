// import ComponenteClase from "./components/ComponenteClase"
// import ComponenteFuncional from "./components/ComponenteFuncional"
import "./App.css"
import SaludoClase from "./components/SaludoClase"
import SaludoFuncional from "./components/SaludoFuncional"

// const saludo = <h1>Hola mundo desde el elemento</h1>

function App() {
  // const miElemento = <ComponenteClase />
  console.log("Hola mundo")
  return (
    <div className="claseDiv">
      {/* <h1>Hola mundo</h1>
      {saludo}
      <ComponenteClase />
      <ComponenteFuncional /> */}
      {/* <Saludo nombre="Elena" /> */}
      <SaludoClase nombre="Gorka" edad={12} />
      <SaludoFuncional nombre="Charly" edad={0} />
    </div>
  )
}

export default App
