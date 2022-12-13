import { configureStore } from '@reduxjs/toolkit'
import popupReducer from '../features/popup/OpenSlice'

export const store = configureStore({
    reducer: {
        popup: popupReducer
    },
})