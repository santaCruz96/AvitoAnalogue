import { useState } from 'react'
import { useDispatch } from 'react-redux'
import logo from '../../../img/logo_modal.png'
import { selectModal } from '../../../store/slices/modalSlice'
import { useUserSignUpMutation } from '../../../api/skyVitoApi'
import * as S from './styles'

function SignUp() {
    const dispatch = useDispatch()

    const [signUp, { isLoading, isError }] = useUserSignUpMutation()

    const [userValues, setUserValues] = useState({
        password: '',
        role: 'user',
        email: '',
        name: '',
        surname: '',
        phone: '',
        city: ''
    })

    const [wrongPassword, setWrongPassword] = useState(null)

    const [validatePassword, setValidatePassword] = useState('')

    const onSignup = (e) => {
        e.preventDefault()

        if (userValues.password === validatePassword) {
            console.log(userValues)
            signUp(userValues)
            setWrongPassword(null)
            dispatch(selectModal('sign-in'))
        } else {
            setWrongPassword('Пароли не совпадают')
        }
    }

    const handleEmailChange = (e) => {
        setUserValues({
            ...userValues,
            email: e.target.value,
        })
    }

    const handlePasswordChange = (e) => {
        setUserValues({
            ...userValues,
            password: e.target.value,
        })
    }

    const handleValidatePasswordChange = (e) => {
        setValidatePassword(e.target.value)
    }

    const handleFirstNameChange = (e) => {
        setUserValues({
            ...userValues,
            name: e.target.value,
        })
    }

    const handleLastNameChange = (e) => {
        setUserValues({
            ...userValues,
            surname: e.target.value,
        })
    }

    const handleCityChange = (e) => {
        setUserValues({
            ...userValues,
            city: e.target.value,
        })
    }


    return (
        <S.Container>
            <S.ModalBlock>
                <S.ModalForm id="formLogIn" action="">
                    <S.ModalLogoBlock>
                        <S.ModalLogo src={logo} alt="logo"/>
                    </S.ModalLogoBlock>
                    <S.InputEmail onChange={handleEmailChange} type="text" name="login" id="formlogin" placeholder="email"/>
                    <S.InputPasswordFirst onChange={handlePasswordChange} type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
                    <S.InputPasswordSecond onChange={handleValidatePasswordChange} type="password" name="password" id="passwordSecond" placeholder="Повторите пароль" />
                    {wrongPassword != null && <p>{wrongPassword}</p>}
                    <S.InputFirstName onChange={handleFirstNameChange} type="text" name="first-name" id="first-name" placeholder="Имя (необязательно)"/>
                    <S.InputLastName onChange={handleLastNameChange} type="text" name="last-name" id="last-name" placeholder="Фамилия (необязательно)"/>
                    <S.InputCity onChange={handleCityChange} type="text" name="city" id="city" placeholder="Город (необязательно)" />
                    {isError && <p>Ошибка</p>}
                    {isLoading && <p>Загрузка</p>}
                    <S.RegButton id="btnSignUp">
                        <S.RegLink onClick={onSignup}>Зарегистрироваться</S.RegLink>
                    </S.RegButton>
                </S.ModalForm>
            </S.ModalBlock>
        </S.Container>
    )
}

export default SignUp