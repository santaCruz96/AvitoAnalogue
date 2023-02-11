import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { accessToken: null, refreshToken: null, isLogin: false },
    reducers: {
        setLogin: (state, action) => {
            state.isLogin = action.payload
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload
        }
    }
})

export const { setLogin, setAccessToken, setRefreshToken } = authSlice.actions

export default authSlice.reducer