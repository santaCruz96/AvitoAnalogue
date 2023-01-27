import * as S from './styles'

function AddNewProduct() {
    return (
        <S.Wrapper>
            <S.Container>
                <S.ModalBlock>
                    <S.ModalContent>
                        <S.ModalTittle >Новое объявление</S.ModalTittle>
                        <S.ModalCloseBtn >
                            <S.ModalCloseBtnLine ></S.ModalCloseBtnLine>
                        </S.ModalCloseBtn>
                        <S.ModalForm id="formNewArt" action="#">
                            <S.ModalFormBlock>
                                <S.ModalFormLabel for="name">Название</S.ModalFormLabel>
                                <S.ModalFormInputName type="text" name="name" id="formName" placeholder="Введите название"/>
                            </S.ModalFormBlock>
                            <S.ModalFormBlock>
                                <S.ModalFormLabel for="text">Описание</S.ModalFormLabel>                            
                                <S.ModalFormTextArea name="text" id="formArea" cols="auto" rows="10" placeholder="Введите описание"></S.ModalFormTextArea>
                            </S.ModalFormBlock>
                            <S.ModalFormBlock>
                                <S.ModalFormParagraph>Фотографии товара<S.Span>не более 5 фотографий</S.Span></S.ModalFormParagraph>
                                <S.ModalFormBarImg>
                                    <S.ImgBlock>
                                        <S.Img src="" alt=""/>
                                        <S.ImgCover></S.ImgCover>                                    
                                    </S.ImgBlock>
                                    <S.ImgBlock>
                                        <S.Img src="" alt=""/>
                                        <S.ImgCover></S.ImgCover>
                                    </S.ImgBlock>
                                    <S.ImgBlock>
                                        <S.ImgCover></S.ImgCover>
                                        <S.Img src="" alt=""/>
                                    </S.ImgBlock>
                                    <S.ImgBlock>
                                        <S.ImgCover></S.ImgCover>
                                        <S.Img src="" alt=""/>
                                    </S.ImgBlock>
                                    <S.ImgBlock>
                                        <S.ImgCover></S.ImgCover>
                                        <S.Img src="" alt=""/>
                                    </S.ImgBlock>
                                </S.ModalFormBarImg>
                            </S.ModalFormBlock>
                            <S.ModalFormBlockPrice>
                                <S.ModalFormLabel for="price">Цена</S.ModalFormLabel>
                                <S.ModalFormInputPrice type="text" name="price" id="formName"/>
                                <S.ModalFormInputPriceCover></S.ModalFormInputPriceCover>
                            </S.ModalFormBlockPrice> 
                        
                            <S.SubmitButton id="btnPublish">Опубликовать</S.SubmitButton>
                            
                        </S.ModalForm>
                    </S.ModalContent>
                </S.ModalBlock>
            </S.Container>
        </S.Wrapper>
    )
}

export default AddNewProduct