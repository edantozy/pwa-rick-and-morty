import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Episode } from '../../../interfaces';

export interface episodeState {
    page: number,
    totalPages: number,
    episodes: Episode[],
    isLoading: boolean
}

const initialState: episodeState = {
    page: 1,
    totalPages: 1,
    episodes: [],
    isLoading: false
}

interface setEpisodesPayload {
    page: number,
    episodes: Episode[]
}

export const episodeSlice = createSlice({
    name: 'episode',
    initialState,
    reducers: {
        startLoadingEpisodes: (state: episodeState) => {
            state.isLoading = true
        },
        setEpisodes: (state: episodeState, action: PayloadAction<setEpisodesPayload>) => {
            state.isLoading = false
            state.page = action.payload.page
            state.episodes = action.payload.episodes
        },
        setEpisodesPage: (state: episodeState, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setTotalEpisodesPages: (state: episodeState, action: PayloadAction<number>) => {
            state.totalPages = action.payload
        },
    },
})

export const { startLoadingEpisodes, setEpisodes, setEpisodesPage, setTotalEpisodesPages } = episodeSlice.actions