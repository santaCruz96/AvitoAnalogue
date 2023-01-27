import logo from '../../../img/logo_modal.png'
import * as S from './styles'

function SignUp() {
    return (
        <S.Wrapper>
            <S.Container>
                <S.ModalBlock>
                    <S.ModalForm id="formLogIn" action="#">
                        <S.ModalLogoBlock>
                            <S.ModalLogo src={logo} alt="logo"/>
                        </S.ModalLogoBlock>
                        <S.InputEmail type="text" name="login" id="formlogin" placeholder="email"/>
                        <S.InputPasswordFirst type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
                        <S.InputPasswordSecond type="password" name="password" id="passwordSecond" placeholder="Повторите пароль"/>
                        <S.InputFirstName type="text" name="first-name" id="first-name" placeholder="Имя (необязательно)"/>
                        <S.InputLastName type="text" name="last-name" id="last-name" placeholder="Фамилия (необязательно)"/>
                        <S.InputCity type="text" name="city" id="city" placeholder="Город (необязательно)"/>
                        <S.RegButton id="btnSignUp">
                            <S.RegLink href="signup.html">Зарегистрироваться</S.RegLink>
                        </S.RegButton>
                    </S.ModalForm>
                </S.ModalBlock>
            </S.Container>
        </S.Wrapper>
    )
}

export default SignUp