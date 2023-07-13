import { render, screen, fireEvent } from "@testing-library/react"
import Contador from "./Contador";

it("Renders correctly", () => {
    render(<Contador />)
})

it("There's a text called Contador", () => {
    render(<Contador />)
    screen.getByText("Contador")
})

describe("Testing counter changing buttons", () => {
    it("Increment button increments counter", () => {
        // renderizar el componente
        render(<Contador />)
        // obtener el valor
        const spanCounterValue = screen.getByRole("counter-value") as HTMLSpanElement
        expect(spanCounterValue.innerHTML).toBe("0")
        // obtener el botón
        const incrementButton = screen.getByText("Incrementa")
        // simular un clic
        fireEvent.click(incrementButton)
        // ver que el texto ha cambiado
        expect(spanCounterValue.innerHTML).toBe("2")
    })
})

describe("Toggle button", () => {
    it("Changes text", () => {
        render(<Contador />)
        const toggleButton = screen.getByRole("toggle-button")

        expect(toggleButton.innerHTML).toBe("Off")
        fireEvent.click(toggleButton)
        expect(toggleButton.innerHTML).toBe("On")
    })
})