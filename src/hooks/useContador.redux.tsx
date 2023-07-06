import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../app/store"
import { actions } from "../features/contador/contadorSlice"

const useContador = () => {
  const { valor: contador, nombre } = useSelector(
    (state: RootState) => state.contador
  )

  const dispatch = useDispatch()

  const incrementaContador = () => {
    dispatch(actions.incrementa())
  }

  const incrementaCinco = () => {
    dispatch(actions.incrementaX({ sumatorio: 5 }))
  }
  return { contador, nombre, incrementaCinco, incrementaContador }
}

export default useContador
