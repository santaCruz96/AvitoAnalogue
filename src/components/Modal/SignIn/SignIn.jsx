import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import logo from '../../../img/logo_modal.png'
import { selectModal, openCloseModal } from '../../../store/slices/modalSlice'
import { setLogin, setAccessToken, setRefreshToken } from '../../../store/slices/authSlice'
import { useUserLoginMutation } from '../../../api/skyVitoApi'
import * as S from './styles'


function SignIn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [login, {data, isSuccess, isLoading, isError}] = useUserLoginMutation()

    const handleEmailChange = ({ target }) => {
        setEmail(target.value)
    }

    const handlePasswordChange = ({ target }) => {
        setPassword(target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        login({ email, password })
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(setLogin(true))
            dispatch(setAccessToken(data?.access_token))
            dispatch(setRefreshToken(data?.refresh_token))
            dispatch(openCloseModal(false))
            navigate('my_profile')
        }
    }, [data?.access_token, data?.refresh_token, dispatch, isSuccess, navigate])

    return (
        <S.Container>
            <S.ModalBlock>
                <S.ModalForm id="formLogIn" action=" ">
                    <S.ModalLogoBlock>
                        <S.ModalLogo src={logo} alt="logo"/>
                    </S.ModalLogoBlock>
                    <S.InputEmail onChange={handleEmailChange} type="text" name="login" id="formlogin" placeholder="email"/>
                    <S.InputPassword onChange={handlePasswordChange} type="password" name="password" id="formpassword" placeholder="Пароль" />
                    {isLoading && <p>Загрузка</p>}
                    {isError && <p>Неверный email или пароль</p>}
                    <S.EnterButton id="btnEnter">
                        <S.EnterLink onClick={onSubmitForm}>Войти</S.EnterLink>
                    </S.EnterButton>
                    <S.RegButton id="btnSignUp">
                        <S.RegLink onClick={() => dispatch(selectModal('sign-up'))}>Зарегистрироваться</S.RegLink>
                    </S.RegButton>
                </S.ModalForm>
            </S.ModalBlock>
        </S.Container>
    )
}

export default SignIn