import * as S from './styles'
import logo from '../../img/logo-mob.png'

function MobLogo() {
    return (
        <S.HeaderLogoBlock>
            <S.HeaderLogoLink href="" target="_blank">
                <S.HeaderLogoImg src={logo} alt="logo"/>
            </S.HeaderLogoLink>
        </S.HeaderLogoBlock>
    )
}

export default MobLogo