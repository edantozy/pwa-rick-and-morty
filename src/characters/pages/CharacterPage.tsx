import { Box, Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Character } from "../../interfaces"
import { getCharacterById } from "../helpers/getCharacterById"

export const CharacterPage = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState<Character>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCharacterById(id as string)
      setCharacter(res)
      setIsLoading(false)
    }
    fetchData()
  }, [id])

  return (
    <>
      {!isLoading ? (
        <>
          <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '1rem', backgroundColor: '#FEF9F3', padding: '2rem', borderRadius: '1rem' }}>
            <img
              src={character?.image}
              alt={character?.name}
              loading="lazy"
              style={{ borderRadius: '1rem' }}
            />
            <Box sx={{ padding: '0 3rem' }}>
              <Typography variant="h2" align="center" marginTop={3}>{character?.name}</Typography>
              <Typography variant="h4" align="center" marginTop={3}>Status: {character?.status}</Typography>
              <Typography variant="h4" align="center" marginTop={3}>Specie: {character?.species}</Typography>
              <Typography variant="h4" align="center" marginTop={3}>Gender: {character?.gender}</Typography>
              <Typography variant="h4" align="center" marginTop={3}>Type: {character?.type}</Typography>
              <Typography variant="h4" align="center" marginTop={3}>Origin: {character?.origin.name}</Typography>
            </Box>
          </Container>
        </>
      ) : (
        <Typography variant="h2" align="center" marginTop={3}>Loading...</Typography>
      )}
    </>

  )
}
