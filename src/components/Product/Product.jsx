import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetCommentsByIdQuery, useDeleteProductMutation } from '../../api/skyVitoApi'
import { selectModal, openCloseModal } from '../../store/slices/modalSlice'
import createdOn from '../../helpers/createdOn'
import sellsFrom from '../../helpers/sellsFrom'
import * as S from './styles'

function Product({ page, content }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [mainImg, setMainImg] = useState()
    const [shownPhone, setShownPhone] = useState(false)
    const productId = useSelector((state) => state.product.productId)
    const isLogin = useSelector((state) => state.auth.isLogin)

    const { data = [] } = useGetCommentsByIdQuery(productId)
    const [deleteProduct, {isSuccess}] = useDeleteProductMutation()

    const SERVER = 'http://localhost:8090/'

    useEffect(() => { setMainImg(content?.images[0]?.url) }, [content?.images])

    const openReviewsModal = () => {
        dispatch(selectModal('reviews'))
        dispatch(openCloseModal(true))
    }

    const openEditModal = () => {
        dispatch(selectModal('edit-product'))
        dispatch(openCloseModal(true))
    }

    const openSellerPage = () => {
        if (isLogin) {
            navigate('/profile')
        } else {
            alert('Для перехода на страницу продавца необходимо авторизоваться')
        }
    }
    
    useEffect(() => {
        if (isSuccess) {
            navigate('/')
        }
    }, [isSuccess])

    const showPhone = () => {
        if (!isLogin) {
            alert('Авторизуйтесь, чтобы увидеть номер телефона')
        } else {
            setShownPhone(!shownPhone)
        }
    }

    return (
        <S.Product>
            {!content && <h1>Загрузка</h1>}
            {content && 
                <S.ProductContent>
                    <S.ProductLeft>
                        <S.ProductImgsBlock>
                            <S.ProductMainImgBlock>
                                <S.ProductMainImg src={`${SERVER}${mainImg}`} alt=""/>
                            </S.ProductMainImgBlock>
                            <S.ProductImgBar>
                                {content.images.map((image) => (
                                    <S.ProductImgBarItem onClick={() => setMainImg(image.url)}>
                                        <S.ProductImgBarItemImg src={`${SERVER}${image.url}`} alt=""/>
                                    </S.ProductImgBarItem>
                                ))}
                            </S.ProductImgBar>
                            <S.ProductImgBarMob>
                                {content.images.map((image) => (
                                    <S.ProductImgBarMobCirlce/>
                                ))
                                }
                            </S.ProductImgBarMob>
                        </S.ProductImgsBlock>
                    </S.ProductLeft>
                    <S.ProductRight>
                        <S.ProductBlock>
                            <S.ProductBlockTittle>{content.title}</S.ProductBlockTittle>
                            <S.ProductBlockInfo>
                                <S.ProductBlockInfoDate>{createdOn(content.created_on)}</S.ProductBlockInfoDate>
                                <S.ProductBlockInfoCity>{content.user.city}</S.ProductBlockInfoCity>
                                <S.ProductBlockInfoFeedback onClick={openReviewsModal}>{data.length} отзыва</S.ProductBlockInfoFeedback>
                            </S.ProductBlockInfo>
                            <S.ProductPrice>{content.price} ₽</S.ProductPrice>
                            {page === 'other' &&
                                <S.ProductButtonAuthorPhone onClick={showPhone}><S.Number>{shownPhone ? content?.user.phone : 'Показать телефон'}</S.Number></S.ProductButtonAuthorPhone>
                            }
                            {page === 'my' &&
                                <S.ProductButtonBlock>
                                    <S.ProductButtonEdit onClick={openEditModal}>Редактировать</S.ProductButtonEdit>
                                    <S.ProductButtonRemove onClick={() => deleteProduct(productId)}>Снять с публикации</S.ProductButtonRemove>
                                </S.ProductButtonBlock>
                            }
                            <S.ProductAuthor>
                                    <S.ProductAuthorImgBlock onClick={openSellerPage}>
                                        <S.ProductAuthorImg isAvatar = {content?.user.avatar} src={`${SERVER}${content?.user.avatar}`} alt=""/>
                                    </S.ProductAuthorImgBlock>
                                <S.ProductAuthorCont>
                                    <S.ProductAuthorName>{content.user.name}</S.ProductAuthorName>
                                    <S.ProductAuthorAbout>Продает товары c {sellsFrom(content.user.sells_from)}</S.ProductAuthorAbout>
                                </S.ProductAuthorCont>
                            </S.ProductAuthor>
                        </S.ProductBlock>
                    </S.ProductRight>
                </S.ProductContent>
            }
        </S.Product>
    )
}

export default Product 