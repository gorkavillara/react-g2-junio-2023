import { test, expect, it, describe, beforeEach } from "vitest"

const sum = (a: number, b: number) => a + b

describe("Testing sum function", () => {
  test("Mi primer test", () => {
    console.log("Estoy ejecutando mi primer test")
    const resultado = sum(1, 2)

    expect(resultado).toBe(3)
  })

  it("Adds negative numbers", () => {
    const myRes = sum(-4, -1)

    expect(myRes).toBeLessThan(0)
  })
})

describe("Testing objects", () => {
  it("Two equal objects", () => {
    const myObj = { name: "Gorka" }
    const mySecondObj = { name: "Gorka" }

    // expect(myObj).toBe(mySecondObj)
    expect(myObj).toStrictEqual(mySecondObj)
    expect(myObj).not.toBe(mySecondObj)
  })
})

const errorIfNegative = (num: number) => {
  if (num < 0) throw new Error("Error!")
  return true
}

describe("Testing errors", () => {
  it("Throws error if negative", () => {
    expect(() => errorIfNegative(-10))
        .toThrowError(new Error("Error!"))
  })
})

describe("Testing with initialization", () => {
    const student = {
        name: "Charly",
        score: 10
    }

    beforeEach(() => {
        // Se ejecuta antes de la ejecución de cada uno de los tests
        // de este describe
        student.score = 10
    })

    it("Student did not fail", () => {
        expect(student.score).toBeGreaterThanOrEqual(5)
    })

    it("Student failed when he failed", () => {
        student.score = 4
        expect(student.score).toBeLessThan(5)
    })

    it("Student did not fail", () => {
        expect(student.score).toBeGreaterThanOrEqual(5)
    })
})