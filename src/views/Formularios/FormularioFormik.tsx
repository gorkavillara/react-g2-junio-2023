import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import styles from "./Formularios.module.scss"

interface FormData {
  nombre: string
  email: string
  edad: number | ""
}

const initialData: FormData = {
  nombre: "Gorka",
  email: "",
  edad: "",
}

const validationSchema = yup.object({
    nombre: yup.string().required().min(3).max(15, "El nombre debe tener como mucho 15 caracteres"),
    email: yup.string().required("El email es obligatorio").email().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Debe ser un email válido"),
    edad: yup.number().min(18).max(65).oneOf([19, 20, 21])
})

const FormularioFormik = () => {
  return (
    <div className={styles.Formularios}>
      <h2>Formularios con Formik</h2>
      <Formik
        initialValues={initialData}
        onSubmit={(valores) => console.log(valores)}
        validationSchema={validationSchema}
        validate={(valores) => {
            const errores: { nombre?: string, edad?: number | string } = {}

            if (valores.nombre === "") {
                errores.nombre = "El nombre no debe estar vacío"
            }

            if (typeof valores.edad === "number" && valores.edad < 18) {
                errores.edad = "Debes ser mayor de edad"
            }
            
            return errores
        }}
      >
        <Form className={styles.formulario}>
            <Field type="text" name="nombre" placeholder="Tu nombre" />
            <ErrorMessage name="nombre" />
            <Field type="email" name="email" placeholder="Tu email" />
            <ErrorMessage name="email" />
            <Field type="number" name="edad" placeholder="Tu edad" max="25" />
            <ErrorMessage name="edad" />
            <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </div>
  )
}

export default FormularioFormik
