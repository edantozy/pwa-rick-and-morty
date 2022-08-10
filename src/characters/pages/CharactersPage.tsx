import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { getCharacters, setPage } from '../../store/slices/character'
import { GeneralList, InfoCard, SkeletonList } from '../../ui/components'

export const CharactersPage = () => {
  const dispatch = useDispatch()

  const { isLoading, characters, page, totalPages } = useSelector((state: RootState) => state.character)

  useEffect(() => {
    dispatch(getCharacters() as any)
  }, [dispatch])

  return (
    <Box sx={{ paddingTop: '1rem' }}>
      <Typography variant="h2" align="center">Characters List</Typography>
      {
        (!isLoading) ? (

          <GeneralList
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            getList={getCharacters}
          >
            {
              characters.map(el => (
                <InfoCard
                  title={el.name}
                  imageUrl={el.image}
                  key={el.id}
                  url={`/character/${el.id}`}
                >
                  <Typography>Specie: {el.species}</Typography>
                  <Typography>Status: {el.status}</Typography>
                  <Typography>Gender: {el.gender}</Typography>
                </InfoCard>
              ))
            }
          </GeneralList>
        ) : (
          <SkeletonList list={characters} />
        )
      }
    </Box>
  )
}
