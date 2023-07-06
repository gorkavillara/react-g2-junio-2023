import axios from "axios"

const token = "1234123123"
const baseURL = "https://rickandmortyapi.com/api/character"

export const rmInstance = axios.create({
    baseURL,
    method: "GET",
    transformResponse: (res) => {
        console.log(res)
        return { ...JSON.parse(res), success: true, lastCalled: new Date() }
    },
    transformRequest: (req) => {
        return req
    }
})

export const authInstance = axios.create({
    baseURL: "https://reactg2.ngrok.dev/auth",
    method: "POST"
})

export const getRmInstance = (newToken: string) => {
    return axios.create({
        baseURL,
        method: "GET",
        headers: {
            Authorization: `Bearer ${newToken}`
        },
        transformResponse: (res) => {
            console.log(res)
            return { ...JSON.parse(res), success: true, lastCalled: new Date() }
        },
        transformRequest: (req) => {
            return req
        }
    })
}

export const clientsInstance = axios.create({
    baseURL: "https://miservicio.com/api",
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    }
})