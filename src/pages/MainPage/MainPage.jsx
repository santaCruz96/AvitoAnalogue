import HeaderButton from '../../components/HeaderButton/HeaderButton';
import Search from '../../components/Search/Search';
import ProductCardsBlock from '../../components/ProductCardsBlock/ProductCardsBlock';
import Footer from '../../components/Footer/Footer';
import * as S from './styles'

function MainPage() {
    return (
        <S.Wrapper>
            <S.Container>
                <S.Header>
                    <S.HeaderNav>
                        <HeaderButton>Вход в личный кабинет</HeaderButton>
                    </S.HeaderNav>
                </S.Header>
                <S.Main>
                    <Search />
                    <S.MainContainer>
                        <S.Tittle>Объявления</S.Tittle>
                        <S.MainContent>
                            <ProductCardsBlock/>
                        </S.MainContent>
                    </S.MainContainer>
                </S.Main>
                <Footer/>
            </S.Container>
        </S.Wrapper>
  );
}

export default MainPage;
