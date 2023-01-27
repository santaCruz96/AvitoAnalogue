import Reviews from './Reviews/Reviews'
import * as S from './styles'

function ReviewsModal() {
    return (
        <S.Wrapper>
            <S.Container>
                <S.ModalBlock>
                    <S.ModalContent>
                        <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
                        <S.ModalBtnClose>
                            <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
                        </S.ModalBtnClose>
                        <S.ModalScroll>
                            <S.ModalForm id="formNewArt" action="#">
                                <S.ModalFormBlock>
                                    <S.Label for="text">Добавить отзыв</S.Label>
                                    <S.TextArea name="text" id="formArea" cols="auto" rows="5" placeholder="Введите описание"></S.TextArea>
                                </S.ModalFormBlock>
                                <S.Button id="btnPublish">Опубликовать</S.Button>
                            </S.ModalForm>

                            <Reviews/>
                        
                        </S.ModalScroll>
                    </S.ModalContent>
                </S.ModalBlock>
            </S.Container>
        </S.Wrapper>
    )
}

export default ReviewsModal