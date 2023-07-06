import { useReducer, createContext, PropsWithChildren } from "react"

interface ProviderValues {
  contador: number
  isLoading: boolean
  incrementa: () => void
  incrementaCinco: () => void
  hazLlamadaEIncrementa: () => void
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const ContadorContext = createContext<ProviderValues>(null!)

type ContadorActionType =
  | "incrementa"
  | "incrementaCinco"
  | "ponLoading"
  | "quitaLoading"

const sleep = (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000))

const contadorReducer = (
  state: { valor: number; isLoading: boolean },
  action: { payload?: unknown; type: ContadorActionType }
) => {
  if (action.type === "ponLoading") return { ...state, isLoading: true }

  if (action.type === "quitaLoading") return { ...state, isLoading: false }

  if (action.type === "incrementa") return { ...state, valor: state.valor + 1 }

  if (action.type === "incrementaCinco")
    return { ...state, valor: state.valor + 5 }

  return { valor: state.valor, isLoading: false }
}

const ContadorContextProvider = ({ children }: PropsWithChildren) => {
  const [contador, dispatchContador] = useReducer(contadorReducer, {
    valor: 0,
    isLoading: false,
  })

  const incrementa = () => dispatchContador({ type: "incrementa" })
  const incrementaCinco = () => dispatchContador({ type: "incrementaCinco" })

  const hazLlamadaEIncrementa = async () => {
    if (contador.isLoading) return
    dispatchContador({ type: "ponLoading" })
    await sleep(2)
    dispatchContador({ type: "incrementa" })
    dispatchContador({ type: "quitaLoading" })
  }

  return (
    <ContadorContext.Provider
      value={{
        contador: contador.valor,
        incrementa,
        incrementaCinco,
        hazLlamadaEIncrementa,
        isLoading: contador.isLoading,
      }}
    >
      {children}
    </ContadorContext.Provider>
  )
}

export default ContadorContextProvider
