import { useState, useEffect } from "react"
import axios from "axios"

const RickMorty = () => {
  const [character, setCharacter] = useState<any>(null)
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/2")
      .then((res) => setCharacter(res.data))
      .catch(console.error)
      
  }, [])
  return (
    <div>
      <h2>Rick and Morty</h2>
      {character && (
        <>
          <h2>Name</h2>
          <h3 role="character-name">{character.name}</h3>
        </>
      )}
    </div>
  )
}

export default RickMorty
