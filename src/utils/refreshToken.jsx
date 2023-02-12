import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useGetRefreshTokenMutation } from "../api/skyVitoApi"
import { setLogin ,setAccessToken, setRefreshToken } from "../store/slices/authSlice"

export default function RefreshToken() {
    const dispatch = useDispatch()
    
    const isLogin = useSelector((state) => state.auth?.isLogin)
    const accessToken = useSelector((state) => state.auth?.accessToken)
    const refreshToken = useSelector((state) => state.auth?.refreshToken)

    const [getToken, { data, isSuccess, isError }] = useGetRefreshTokenMutation()

    useEffect(() => {
        let timeOut = null
        const runGetToken = () => {
            getToken({ access_token: accessToken, refresh_token: refreshToken })
        }
        if (isLogin) {
            timeOut = setInterval(runGetToken, 60000)
        }
        return (() => {
            clearInterval(timeOut)
        })
    }, [accessToken, getToken, isLogin, refreshToken])

    useEffect(() => {
        let timeOut = null
        const logOut = () => {
            dispatch(setLogin(false))
        }
        if (isError) {
            timeOut = setTimeout(logOut, 2000)
        }
        return (() => {
            clearInterval(timeOut)
        })
    }, [accessToken, dispatch, getToken, isError, isLogin, refreshToken])

    useEffect(() => {
        if (isSuccess) {
            dispatch(setAccessToken(data?.access_token))
            dispatch(setRefreshToken(data?.refresh_token))
        }
    }, [data, dispatch, isSuccess])
}