import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false
}

export const changeSlice = createSlice({
    name: 'change',
    initialState,
    reducers: {

        change: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { change } = changeSlice.actions

export default changeSlice.reducer