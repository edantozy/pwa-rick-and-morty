import { rickAndMortyAPI } from '../../../apis'
import { EpisodesList } from '../../../interfaces'
import { AppDispatch, RootState } from '../../store'
import { setEpisodes, setTotalEpisodesPages, startLoadingEpisodes } from './episodeSlice'

export const getEpisodes = (page = 1) => {
    return async (dispatch: AppDispatch, getState: RootState) => {
        dispatch(startLoadingEpisodes())
        const { data } = await rickAndMortyAPI.get<EpisodesList>(`/episode?page=${page}`)

        dispatch(setTotalEpisodesPages(data.info.pages))
        dispatch(setEpisodes({ episodes: data.results, page: page }))
    }
}
