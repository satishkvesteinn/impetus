import { configureStore } from '@reduxjs/toolkit'
import changeReducer from '../features/home/ChangeSlice'
import popupReducer from '../features/popup/OpenSlice'

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        changes: changeReducer
    },
})