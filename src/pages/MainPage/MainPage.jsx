import { useDispatch, useSelector } from 'react-redux'
import HeaderButton from '../../components/HeaderButton/HeaderButton';
import Search from '../../components/Search/Search';
import ProductCardsBlock from '../../components/ProductCardsBlock/ProductCardsBlock';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal'
import { useGetAllProductsQuery } from '../../api/skyVitoApi';
import { selectModal, openCloseModal } from '../../store/slices/modalSlice';
import * as S from './styles'
import { Link } from 'react-router-dom';

function MainPage() {
    const { data = [] } = useGetAllProductsQuery()

    const whichModal = useSelector((state) => state.modal.modal)
    const modalIsOpen = useSelector((state) => state.modal.modalIsShown)
    const isLogin = useSelector((state) => state.auth.isLogin)

    const dispatch = useDispatch()

    const openModalSignIn = () => {
        dispatch(selectModal('sign-in'))
        dispatch(openCloseModal(true))
    }

    const openModalAddNewProduct = () => {
        dispatch(selectModal('add-new-product'))
        dispatch(openCloseModal(true))
    }

    return (
        <S.Wrapper>
            <S.Container>{modalIsOpen && <Modal modal={whichModal} />}
                <S.Header>
                    <S.HeaderNav>
                        {isLogin
                            ?
                            <S.ButtonsBlock>
                                <HeaderButton onClick={openModalAddNewProduct}>Разместить объявление</HeaderButton>
                                <Link to='/my_profile'>
                                    <HeaderButton>Личный кабинет</HeaderButton>
                                </Link>
                            </S.ButtonsBlock>
                            :
                            <HeaderButton onClick={openModalSignIn}>Вход в личный кабинет</HeaderButton>
                        }
                    </S.HeaderNav>
                </S.Header>
                <S.Main>
                    <Search />
                    <S.MainContainer>
                        <S.Tittle>Объявления</S.Tittle>
                        <S.MainContent>
                            <ProductCardsBlock data={data}/>
                        </S.MainContent>
                    </S.MainContainer>
                </S.Main>
                <Footer/>
            </S.Container>
        </S.Wrapper>
  );
}

export default MainPage;
