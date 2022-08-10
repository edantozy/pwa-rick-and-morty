import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Character, Episode } from '../../../interfaces'

export interface searchState {
    search: string,
    kindSearch: string,
    status: string,
    gender: string,
    results: any
    page: number,
    totalPages: number,
    isLoading: boolean
}

const initialState: searchState = {
    search: '',
    kindSearch: 'character',
    status: 'alive',
    gender: 'male',
    results: [],
    page: 1,
    totalPages: 1,
    isLoading: false
}

interface setResultsPayload {
    page: number,
    results: Character[] | Episode[]
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        startLoadingResults: (state: searchState) => {
            state.isLoading = true
        },
        setPage: (state: searchState, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        resetResults: (state: searchState) => {
            state.results = []
        },
        setResults: (state: searchState, action: PayloadAction<setResultsPayload>) => {
            state.isLoading = false
            state.page = action.payload.page
            state.results = action.payload.results
        },
        setTotalPageResults: (state: searchState, action: PayloadAction<number>) => {
            state.totalPages = action.payload
        },
        setSearch: (state: searchState, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setKindSearch: (state: searchState, action: PayloadAction<string>) => {
            state.kindSearch = action.payload
        },
        setStatus: (state: searchState, action: PayloadAction<string>) => {
            state.status = action.payload
        },
        setGender: (state: searchState, action: PayloadAction<string>) => {
            state.gender = action.payload
        },

    },
})

export const { setPage, startLoadingResults, setResults, setTotalPageResults, setSearch, setKindSearch, setStatus, setGender, resetResults } = searchSlice.actions