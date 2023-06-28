// import "./Principal.css"
// import styles from "./Principal.module.css"
// import "./Principal.scss"
import styles from "./Principal.module.scss"
import Secundario from "./Secundario"

const Principal = () => {
  return (
    <>
      {/* <div className="principal"> */}
      <div className={styles.principal}>
        <h2>Principal</h2>
        <p
          style={{
            color: "red",
            textShadow: "0 0 30px rgba(200, 200, 200, 0.4)",
          }}
        >
          Hola soy la vista principal
        </p>
      </div>
      <Secundario />
    </>
  )
}

export default Principal
