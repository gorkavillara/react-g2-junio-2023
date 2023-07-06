import { createSlice } from "@reduxjs/toolkit"

const contadorSlice = createSlice({
    name: "contador",
    initialState: {
        nombre: "contador",
        valor: 12
    },
    reducers: {
        incrementa: (state) => {
            return { ...state, valor: state.valor + 1 }
        },
        // incrementa: (state, action) => {
        //     state.valor++
        // }
        incrementaX: (state, action) => {
            console.log(action.payload)
            return { ...state, valor: state.valor + action.payload.sumatorio }
        }
    }
})

export const actions = contadorSlice.actions

export default contadorSlice.reducer