import "./App.scss"
import { Link, Outlet, NavLink } from "react-router-dom"

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
          <li>
            <NavLink to="/alumnos" >Alumnos</NavLink>
          </li>
          <li>
            <NavLink to="/formulario">Formulario</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <a href="https://google.com">Google</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default App
