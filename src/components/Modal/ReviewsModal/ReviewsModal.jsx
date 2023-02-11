import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Reviews from './Reviews/Reviews'
import { commentCreated } from '../../../store/slices/productSlice'
import { selectModal, openCloseModal } from '../../../store/slices/modalSlice'
import { useAddCommentMutation } from '../../../api/skyVitoApi'
import * as S from './styles'

function ReviewsModal() {
    const dispatch = useDispatch()

    const productId = useSelector((state) => state.product?.productId)

    const [getReview] = useAddCommentMutation()

    const [review, setReview] = useState('')

    const closeModal = () => {
        dispatch(selectModal(''))
        dispatch(openCloseModal(false))
    }
    
    const handleReviewChange = ({ target }) => {
        setReview(target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        getReview({ id: productId, text: review })
        dispatch(commentCreated(true))
    }

    return (
        <S.Container>
            <S.ModalBlock>
                <S.ModalContent>
                    <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
                    <S.ModalBtnClose>
                        <S.ModalBtnCloseLine onClick={closeModal}></S.ModalBtnCloseLine>
                    </S.ModalBtnClose>
                    <S.ModalScroll>
                        <S.ModalForm id="formNewArt" action="#">
                            <S.ModalFormBlock>
                                <S.Label for="text">Добавить отзыв</S.Label>
                                <S.TextArea onChange={handleReviewChange} name="text" id="formArea" cols="auto" rows="5" placeholder="Введите описание"></S.TextArea>
                            </S.ModalFormBlock>
                            <S.Button onClick={onSubmitForm}  id="btnPublish">Опубликовать</S.Button>
                        </S.ModalForm>

                        <Reviews/>
                    
                    </S.ModalScroll>
                </S.ModalContent>
            </S.ModalBlock>
        </S.Container>
    )
}

export default ReviewsModal