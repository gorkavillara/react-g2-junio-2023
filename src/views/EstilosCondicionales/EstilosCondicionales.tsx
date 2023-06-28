import { useState } from "react"
import styles from "./EstilosCondicionales.module.scss"

const EstilosCondicionales = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={styles.EstilosCondicionales}>
      <button
        className={`${styles.toggleButton} ${toggle ? styles.on : styles.off}`}
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? "On" : "Off"}
      </button>
    </div>
  )
}

export default EstilosCondicionales
