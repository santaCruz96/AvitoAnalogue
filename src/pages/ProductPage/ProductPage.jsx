import MobLogo from '../../components/MobLogo/MobLogo'
import HeaderButton from '../../components/HeaderButton/HeaderButton'
import ComeBack from '../../components/ComeBack/ComeBack'
import Product from '../../components/Product/Product'
import Footer from '../../components/Footer/Footer'
import * as S from './styles'

function ProductPage() {
    const page = 'other'

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
                        <ComeBack/>
                    </S.MainContainer>
                    <Product page={page} />
                    <S.MainContainer>
                        <S.MainTittle>Описание товара</S.MainTittle>
                        <S.ProductDescriptionBlock>
                            <S.ProductDescriptionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</S.ProductDescriptionText>
                        </S.ProductDescriptionBlock>
                    </S.MainContainer>
                </S.Main>
                <Footer/>
            </S.Container>
        </S.Wrapper>
    )
}

export default ProductPage