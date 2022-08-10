import { rickAndMortyAPI } from '../../../apis'
import { EpisodesList } from '../../../interfaces'
import { AppDispatch, RootState } from '../../store'
import { setResults, startLoadingResults, setTotalPageResults } from './searchSlice'

export const getResults = (page = 1, searchQuery = '') => {
    return async (dispatch: AppDispatch, getState: RootState) => {



        dispatch(startLoadingResults())
        try {
            const { data } = await rickAndMortyAPI.get<EpisodesList>(`${searchQuery}`)

            dispatch(setTotalPageResults(data.info.pages))
            dispatch(setResults({ results: data.results, page: page }))
        } catch (e) {
            dispatch(setTotalPageResults(1))
            dispatch(setResults({ results: [], page: 1 }))
        }
    }
}
