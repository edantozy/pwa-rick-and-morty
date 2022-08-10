import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Character } from '../../../interfaces';

export interface characterState {
    page: number,
    totalPages: number,
    characters: Character[],
    isLoading: boolean
}

const initialState: characterState = {
    page: 1,
    totalPages: 1,
    characters: [],
    isLoading: false
}

interface setCaractersPayload {
    page: number,
    characters: Character[]
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        startLoadingCharacters: (state: characterState) => {
            state.isLoading = true
        },
        setCharacters: (state: characterState, action: PayloadAction<setCaractersPayload>) => {
            state.isLoading = false
            state.page = action.payload.page
            state.characters = action.payload.characters
        },
        setPage: (state: characterState, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setTotalPages: (state: characterState, action: PayloadAction<number>) => {
            state.totalPages = action.payload
        },
    },
})

export const { startLoadingCharacters, setCharacters, setPage, setTotalPages } = characterSlice.actions