import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MobLogo from '../../components/MobLogo/MobLogo'
import HeaderButton from '../../components/HeaderButton/HeaderButton'
import ComeBack from '../../components/ComeBack/ComeBack'
import SellerInformation from '../../components/SellerInformation/SellerInformation'
import ProductCardsBlock from '../../components/ProductCardsBlock/ProductCardsBlock'
import Modal from '../../components/Modal/Modal'
import Footer from '../../components/Footer/Footer'
import { selectModal, openCloseModal } from '../../store/slices/modalSlice'
import { useGetProductByIdQuery, useGetAllProductsQuery } from '../../api/skyVitoApi'
import * as S from './styles'

function SellerProfilePage() {
    const dispatch = useDispatch()

    const whichModal = useSelector((state) => state.modal.modal)
    const modalIsOpen = useSelector((state) => state.modal.modalIsShown)
    const productId = useSelector((state) => state.product.productId)

    const { data } = useGetProductByIdQuery(productId)
    const { data: allProducts } = useGetAllProductsQuery()

    const sellerProducts = allProducts.filter((obj) => {
        return Object.keys(obj).some((key) => {
          return obj[key] === data.user_id
        })
    })

    const openModalAddNewProduct = () => {
        dispatch(selectModal('add-new-product'))
        dispatch(openCloseModal(true))
    }

    return (
        <S.Wrapper>
            <S.Container>{modalIsOpen && <Modal modal={whichModal} />}
                <S.Header>
                    <S.HeaderNav>
                        <MobLogo/>
                        <S.ButtonsBlock>
                            <HeaderButton onClick={openModalAddNewProduct}>Разместить объявление</HeaderButton>
                            <Link to='/my_profile'>
                                <HeaderButton>Личный кабинет</HeaderButton>
                            </Link>
                        </S.ButtonsBlock>
                    </S.HeaderNav>
                </S.Header>
                <S.Main>
                    <S.MainContainer>
                        <S.MainCenterBlock>
                            <ComeBack />
                            <S.Greeting>Профиль продавца</S.Greeting>
                            <SellerInformation product={data} />
                            <S.ProductsTittle>Товары продавца</S.ProductsTittle>
                        </S.MainCenterBlock>
                        <S.MainContent>
                            <ProductCardsBlock data={sellerProducts}/>
                        </S.MainContent>
                    </S.MainContainer>
                </S.Main>
                <Footer/>
            </S.Container>
        </S.Wrapper>
    )
}

export default SellerProfilePage