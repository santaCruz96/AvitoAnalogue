import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProductByIdQuery, useGetUserQuery } from '../../api/skyVitoApi'
import MobLogo from '../../components/MobLogo/MobLogo'
import HeaderButton from '../../components/HeaderButton/HeaderButton'
import ComeBack from '../../components/ComeBack/ComeBack'
import Product from '../../components/Product/Product'
import Footer from '../../components/Footer/Footer'
import Modal from '../../components/Modal/Modal'
import { selectModal, openCloseModal } from '../../store/slices/modalSlice'
import * as S from './styles'


function ProductPage() {
    const dispatch = useDispatch()

    const [page, setPage] = useState('')
    const productId = useSelector((state) => state.product.productId)

    const whichModal = useSelector((state) => state.modal.modal)
    const modalIsOpen = useSelector((state) => state.modal.modalIsShown)
    const isLogin = useSelector((state) => state.auth.isLogin)

    const { data } = useGetProductByIdQuery(productId)
    const { data: user } = useGetUserQuery()

    const openModalSignIn = () => {
        dispatch(selectModal('sign-in'))
        dispatch(openCloseModal(true))
    }

    const openModalAddNewProduct = () => {
        dispatch(selectModal('add-new-product'))
        dispatch(openCloseModal(true))
    }

    useEffect(() => {
        if (data?.user_id === user?.id) {
            setPage('my')
        } else {
            setPage('other')
        }
    }, [data, user])

    return (
        <S.Wrapper>
            <S.Container> {modalIsOpen && <Modal modal={whichModal} />}
                <S.Header>
                    <S.HeaderNav>
                        <MobLogo/>
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
                    <S.MainContainer>
                        <ComeBack/>
                    </S.MainContainer>
                    <Product page={page} content={data} />
                    <S.MainContainer>
                        <S.MainTittle>Описание товара</S.MainTittle>
                        <S.ProductDescriptionBlock>
                            <S.ProductDescriptionText>{data?.description}</S.ProductDescriptionText>
                        </S.ProductDescriptionBlock>
                    </S.MainContainer>
                </S.Main>
                <Footer/>
            </S.Container>
        </S.Wrapper>
    )
}

export default ProductPage