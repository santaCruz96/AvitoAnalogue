import logo from '../../img/logo.png'
import Button from '../Button/Button'
import * as S from './styles'

function ComeBack() {
    return (
        <S.ComeBackMenu class="main__menu menu">
            <S.MenuLink class="menu__logo-link" href="" target="_blank">
                <S.MenuImg class="menu__logo-img" src={logo} alt="logo"/>
            </S.MenuLink>
            <S.MenuForm class="menu__form" action="#">
                <Button width= '241px' id="btnGoBack">Вернуться на главную</Button>
            </S.MenuForm>
        </S.ComeBackMenu>
    )
}

export default ComeBack