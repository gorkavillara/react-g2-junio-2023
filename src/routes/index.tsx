import { RouteObject } from "react-router-dom"
import { Dashboard } from "../layouts"
import { Clientes, Principal, Juego } from "../views"

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "",
                id: "Principal",
                element: <Principal />,
            },
            {
                path: "clientes",
                id: "Clientes",
                element: <Clientes />,
            },
            {
                path: "juego",
                id: "Juego",
                element: <Juego />,
            },
        ],
    },
]

export default routes
