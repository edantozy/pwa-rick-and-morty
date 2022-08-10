import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { getEpisodes, setEpisodesPage } from '../../store/slices/episode'
import { GeneralList, InfoCard, SkeletonList } from '../../ui/components'

export const EpisodesPage = () => {
  const dispatch = useDispatch()

  const { isLoading, episodes, page, totalPages } = useSelector((state: RootState) => state.episode)

  useEffect(() => {
    dispatch(getEpisodes() as any)
  }, [dispatch])

  return (
    <Box sx={{ paddingTop: '1rem' }}>
      <Typography variant="h2" align="center">Episodes List</Typography>
      {
        (!isLoading) ? (

          <GeneralList
            page={page}
            totalPages={totalPages}
            setPage={setEpisodesPage}
            getList={getEpisodes}
          >
            {
              episodes.map(el => (
                <InfoCard
                  title={el.name}
                  key={el.id}
                  url={`/episode/${el.id}`}
                >
                  <Typography>Episode: {el.episode}</Typography>
                  <Typography>Air date: {el.air_date}</Typography>
                </InfoCard>
              ))
            }
          </GeneralList>
        ) : (
          <SkeletonList list={episodes} />
        )
      }
    </Box>
  )
}
