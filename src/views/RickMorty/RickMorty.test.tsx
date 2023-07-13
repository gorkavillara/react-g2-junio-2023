import { render, screen } from "@testing-library/react"
import RickMorty from "./RickMorty"

it("Renders correctly, and shows name", async () => {
    render(<RickMorty />)

    const characterName = await screen.findByRole("character-name")

    expect(characterName.innerHTML).toBe("Morty Smith")
})