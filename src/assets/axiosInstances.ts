import axios from "axios"

export const clientsInstance = axios.create({
    baseURL: "https://cursoreact.ngrok.dev"
})