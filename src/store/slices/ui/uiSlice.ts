import { createSlice } from '@reduxjs/toolkit'

export interface UIState {
    openSidebar: boolean
}

const initialState: UIState = {
    openSidebar: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openSidebar: (state: UIState) => {
            state.openSidebar = true;
        },
        closeSidebar: (state: UIState) => {
            state.openSidebar = false;
        }
    },
})

export const { openSidebar, closeSidebar } = uiSlice.actions
