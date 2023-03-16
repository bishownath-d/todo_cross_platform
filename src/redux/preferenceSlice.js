import { createSlice } from '@reduxjs/toolkit'

const preferenceSlice = createSlice({
    name: 'Preference',
    initialState: {
        allowDelete: false
    },
    reducers: {
        toggleAllowDelete: (state) => {
            console.log("Toggle Allow Delete")
            state.allowDelete = !state.allowDelete
        }
    }
})

export const { toggleAllowDelete } = preferenceSlice.actions
export default preferenceSlice.reducer