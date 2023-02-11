import { configureStore } from "@reduxjs/toolkit"
import { skyVitoApi } from "../api/skyVitoApi"
import authSlice from "./slices/authSlice"
import productSlice from "./slices/productSlice"
import modalSlice from "./slices/modalSlice"


export const store = configureStore({
    reducer: {
        [skyVitoApi.reducerPath]: skyVitoApi.reducer,
        auth: authSlice,
        product: productSlice,
        modal: modalSlice
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(skyVitoApi.middleware)
})