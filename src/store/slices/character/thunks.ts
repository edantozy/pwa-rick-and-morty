import { rickAndMortyAPI } from '../../../apis'
import { CharactersList } from '../../../interfaces'
import { AppDispatch, RootState } from '../../store'
import { setCharacters, setTotalPages, startLoadingCharacters } from './characterSlice'

export const getCharacters = (page = 1) => {
    return async (dispatch: AppDispatch, getState: RootState) => {
        dispatch(startLoadingCharacters())
        const { data } = await rickAndMortyAPI.get<CharactersList>(`/character?page=${page}`)

        dispatch(setTotalPages(data.info.pages))
        dispatch(setCharacters({ characters: data.results, page: page }))
    }
}
