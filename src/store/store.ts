import { Dispatch } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './slices/ui'
import { characterSlice } from './slices/character'
import { episodeSlice } from './slices/episode'
import { searchSlice } from './slices/search'

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        character: characterSlice.reducer,
        episode: episodeSlice.reducer,
        search: searchSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch | Dispatch<any>