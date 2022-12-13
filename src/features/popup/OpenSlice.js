import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    data: {}
}

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        open: (state, action) => {
            console.log(action);
            state.open = action.payload.open
            state.data = action.payload.data
        },
        close: (state, action) => {
            state.open = action.payload.open
        },
    },
})

// Action creators are generated for each case reducer function
export const { open, close } = popupSlice.actions

export default popupSlice.reducer