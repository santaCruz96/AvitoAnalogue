import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MobLogo from '../../components/MobLogo/MobLogo'
import HeaderButton from '../../components/HeaderButton/HeaderButton'
import ComeBack from '../../components/ComeBack/ComeBack'
import ProfileSettings from '../../components/ProfileSettings/ProfileSettings'
import ProductCardsBlock from '../../components/ProductCardsBlock/ProductCardsBlock'
import Modal from '../../components/Modal/Modal'
import Footer from '../../components/Footer/Footer'
import { setLogin } from '../../store/slices/authSlice'
import { selectModal, openCloseModal } from '../../store/slices/modalSlice'
import { useGetUserQuery, useGetMyProductsQuery } from '../../api/skyVitoApi'
import * as S from './styles'

function ProfilePage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const whichModal = useSelector((state) => state.modal.modal)
    const modalIsOpen = useSelector((state) => state.modal.modalIsShown)

    const { data, isSuccess, isLoading } = useGetUserQuery()
    const { data: myProducts = [] } = useGetMyProductsQuery()
    
    const openModalAddNewProduct = () => {
        dispatch(selectModal('add-new-product'))
        dispatch(openCloseModal(true))
    }

    const logOut = () => {
        dispatch(setLogin(false))
        navigate('/')
    }


    return (
        <S.Wrapper>
            <S.Container>{modalIsOpen && <Modal modal={whichModal} />}
                <S.Header>
                    <S.HeaderNav>
                        <MobLogo/>
                        <S.ButtonsBlock>
                            <HeaderButton onClick={openModalAddNewProduct}>Разместить объявление</HeaderButton>
                            <HeaderButton onClick={logOut}>Выйти</HeaderButton>
                        </S.ButtonsBlock>
                    </S.HeaderNav>
                </S.Header>
                <S.Main>
                    <S.MainContainer>
                        <S.MainCenterBlock>
                            <ComeBack />
                            <S.Greeting>{`Здравствуйте, ${data?.name}!`}</S.Greeting>
                            <ProfileSettings data={data} isSuccess={isSuccess} isLoading={isLoading} />
                            <S.ProductsTittle>Мои товары</S.ProductsTittle>
                        </S.MainCenterBlock>
                        <S.MainContent>
                            <ProductCardsBlock data={myProducts}/>
                        </S.MainContent>
                    </S.MainContainer>
                </S.Main>
                <Footer />
            </S.Container>
        </S.Wrapper>
    )
}

export default ProfilePage