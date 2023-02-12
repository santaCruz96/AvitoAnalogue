import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        search: '',
        productId: '',
        commentCreated: false,
        currentProduct: null
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        getProductId: (state, action) => {
            state.productId = action.payload
        },
        commentCreated: (state, action) => {
            state.commentCreated = action.payload
        },
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload
        }
    }
})

export const {
    setSearch,
    getProductId,
    commentCreated,
    setCurrentProduct
} = productSlice.actions

export default productSlice.reducer