import { useState } from "react"
import styles from "./Formularios.module.scss"

const Formularios = () => {
  const [formData, setFormData] = useState({
    username: "usuario",
    email: "",
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [event.target.name]: event.target.value })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // javascript:void(0) //eslint-disable-line
    event.preventDefault()
    console.log(formData)
    // validaciones personalizadas
    if (formData.email.length < 4) return false
  }

  return (
    <div className={styles.Formularios}>
      <h2>Formularios clásicos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre de usuario"
          value={formData.username}
          name="username"
          onChange={handleChange}
        />
        <span>{formData.username}</span>
        <input
          type="email"
          placeholder="Tu email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          //   onChange={(event) =>
          //     setFormData({ ...formData, [event.target.name]: event.target.value })
          //   }
        />
        {/* <input type="submit" value="Enviar" /> */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Formularios
