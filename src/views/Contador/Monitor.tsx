import { memo } from "react"

const calculoMuyGrande = () => {
  const suma = 0
  //   for (let i = 0; i < 123456789; i++) {
  //     suma++
  //   }
  return suma
}

const MonitorBase = ({ contador }: { contador: number }) => {
  calculoMuyGrande()
  return (
    <p>
      El valor del contador es <span role="counter-value">{contador}</span>
    </p>
  )
}

const Monitor = memo(MonitorBase)

export default Monitor
