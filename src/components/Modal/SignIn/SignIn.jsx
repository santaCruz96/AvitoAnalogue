import logo from '../../../img/logo_modal.png'
import * as S from './styles'

function SignIn() {
    return (
        <S.Wrapper>
            <S.Container>
                <S.ModalBlock>
                    <S.ModalForm id="formLogIn" action="#">
                        <S.ModalLogoBlock>
                            <S.ModalLogo src={logo} alt="logo"/>
                        </S.ModalLogoBlock>
                        <S.InputEmail type="text" name="login" id="formlogin" placeholder="email"/>
                        <S.InputPassword type="password" name="password" id="formpassword" placeholder="Пароль"/>
                        <S.EnterButton id="btnEnter">
                            <S.EnterLink href="../index.html">Войти</S.EnterLink>
                        </S.EnterButton>
                        <S.RegButton id="btnSignUp">
                            <S.RegLink href="signup.html">Зарегистрироваться</S.RegLink>
                        </S.RegButton>
                    </S.ModalForm>
                </S.ModalBlock>
            </S.Container>
        </S.Wrapper>
    )
}

export default SignIn