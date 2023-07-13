import { render, screen, fireEvent } from "@testing-library/react"
import Controles from "./Controles"

describe("Controls functions", () => {
    it("Decrement button executes decrement function", () => {
        const mockDecrementa = vi.fn()
        render(<Controles decrementa={mockDecrementa} incrementa={() => null} />)
        const decrementButton = screen.getByText("Decrementa")

        fireEvent.click(decrementButton)

        expect(mockDecrementa).toBeCalledTimes(1)
    })
    it("Increment button executes increment function", () => {
        const mockIncrementa = vi.fn()
        render(<Controles decrementa={() => null} incrementa={mockIncrementa} />, { })
        const incrementButton = screen.getByText("Incrementa")

        fireEvent.click(incrementButton)

        expect(mockIncrementa).toBeCalledTimes(1)

        expect(incrementButton).toBeVisible
    })
})