import MobLogo from '../../components/MobLogo/MobLogo'
import HeaderButton from '../../components/HeaderButton/HeaderButton'
import ComeBack from '../../components/ComeBack/ComeBack'
import ProfileSettings from '../../components/ProfileSettings/ProfileSettings'
import ProductCardsBlock from '../../components/ProductCardsBlock/ProductCardsBlock'
import Footer from '../../components/Footer/Footer'
import * as S from './styles'

function ProfilePage() {
    return (
        <S.Wrapper>
            <S.Container>
                <S.Header>
                    <S.HeaderNav>
                        <MobLogo/>
                        <S.ButtonsBlock>
                            <HeaderButton>Разместить объявление</HeaderButton>
                            <HeaderButton>Личный кабинет</HeaderButton>
                        </S.ButtonsBlock>
                    </S.HeaderNav>
                </S.Header>
                <S.Main>
                    <S.MainContainer>
                        <S.MainCenterBlock>
                            <ComeBack />
                            <S.Greeting>Здравствуйте, Антон!</S.Greeting>
                            <ProfileSettings />
                            <S.ProductsTittle>Мои товары</S.ProductsTittle>
                        </S.MainCenterBlock>
                        <S.MainContent>
                            <ProductCardsBlock/>
                        </S.MainContent>
                    </S.MainContainer>
                </S.Main>
                <Footer />
            </S.Container>
        </S.Wrapper>
    )
}

export default ProfilePage