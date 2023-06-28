import { RouteObject, Navigate } from "react-router-dom"
import { default as Layout } from "../App"
import { FormularioFormik, Listas, DetallesUsuario } from "../views"
import Login from "../components/Login"

// const AuxComponent = () => {
//   const queryString = useSearchParams()
//   return <Login nombre={queryString.nombre} />
// }

const isAuthenticated = () => Math.random() > 0.5

const protectRoute = (element: JSX.Element): JSX.Element => {
  if (isAuthenticated()) return element

  // return <h2>No estás autorizado</h2>
  return <Navigate to="/" />
}

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <h1>Bienvenid@</h1>
      },
      {
        path: "hola",
        element: <h1>Hola mundo</h1>,
      },{
        path: "contacto",
        element: <h2>Contacto</h2>,
      },
      {
        path: "formulario",
        element: <FormularioFormik />,
      },
      {
        path: "alumnos",
        element: <Listas />,
      },
      {
        path: "alumnos/:id?",
        element: <DetallesUsuario />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "protected",
        element: protectRoute(<h2>Ruta protegida</h2>)
      }
    ]
  }
]

export default routes
