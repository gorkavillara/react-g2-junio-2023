import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import "./index.css"
import routes from "./routes"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.min.js"
import "@cake-hub/lidl-web-bootstrap_theme/dist/css/cake.min.css"
import "@cake-hub/lidl-web-bootstrap_theme/dist/js/cake.min.js"

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
)
