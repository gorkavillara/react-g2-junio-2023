import ReactDOM from "react-dom/client"
import { onCLS, onFID, onLCP } from "web-vitals"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
)

onCLS(info => console.log(info))
onFID(console.log)
onLCP(console.log)
