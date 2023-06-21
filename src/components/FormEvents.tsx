import React, { useRef, useState } from "react"

interface IForm {
  nombre: string
  apellidos: string
}

const FormEvents = () => {
  const [form, setForm] = useState<IForm>({ nombre: "", apellidos: "" })

  const enviaFormulario = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log("Enviando formulario...")
    // console.log(event.target.querySelector("input[name=apellidos]"))
    console.table(form)
  }
  return (
    <form onSubmit={enviaFormulario}>
      <input
        value={form.nombre}
        onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
        type="text"
        name="nombre"
        placeholder="Tu nombre"
      />
      <input
        value={form.apellidos}
        onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
        type="text"
        name="apellidos"
        placeholder="Tus apellidos"
      />
      <br />
      <button type="submit">Enviar</button>
      <p>Nombre: {form.nombre}</p>
      <p>Apellidos: {form.apellidos}</p>
    </form>
  )
}

export default FormEvents
