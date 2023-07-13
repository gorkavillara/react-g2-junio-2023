import { render, screen } from "@testing-library/react"
import axios from "axios"
import RickMorty from "./RickMorty"

describe("Testing mocked values", () => {
    beforeAll(() => {
        axios.get = vi.fn().mockResolvedValue({
            data: { name: "Gorka Villar" }
        })
    })

    afterAll(() => {
        vi.clearAllMocks()
    })

    it("Gets mocked value", async () => {
        render(<RickMorty />)
        const h3CharacterName = await screen.findByRole("character-name")

        expect(h3CharacterName.innerHTML).toBe("Gorka Villar")
    })
})