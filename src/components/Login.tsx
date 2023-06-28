import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        // Llamar a una API para ver si tiene credenciales
        // si tiene credenciales
        // redireccionar
        console.log("Autenticado correctamente!")
        setTimeout(() => navigate("/"), 3000)
    }

  return (
    <div>
      <button onClick={handleLogin}>Absolute Admin Login (Victor)</button>
      {/* <Navigate to="/" /> */}
    </div>
  )
}

export default Login
