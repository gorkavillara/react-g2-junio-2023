import { expect, it, vi } from "vitest"

const multiply = (numA: number, numB: number) => numA * numB

it("Multiplies correctly", () => {
    expect(multiply(2, 5)).toBe(10)
})

it("Multiply has been called", () => {
    const mockFn = vi.fn(multiply)

    expect(mockFn(2, 5)).toBe(10)

    expect(mockFn).toBeCalled()

    expect(mockFn).toBeCalledTimes(1)

    expect(mockFn).toBeCalledWith(2, 5)

    console.log(mockFn)
})