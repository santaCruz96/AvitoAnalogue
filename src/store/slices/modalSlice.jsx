import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modal: '',
        modalIsShown: false
    },
    reducers: {
        selectModal: (state, action) => {
            state.modal = action.payload
        },
        openCloseModal: (state, action) => {
            state.modalIsShown = action.payload
        }
    }
})

export const {
    selectModal,
    openCloseModal
} = modalSlice.actions

export default modalSlice.reducer