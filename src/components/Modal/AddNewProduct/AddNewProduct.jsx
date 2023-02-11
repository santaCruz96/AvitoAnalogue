import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { selectModal, openCloseModal } from '../../../store/slices/modalSlice'
import { useAddNewProductWithoutImgMutation } from '../../../api/skyVitoApi'
import * as S from './styles'

function AddNewProduct() {
    const dispatch = useDispatch()

    const [AddNewProductWithoutImg] = useAddNewProductWithoutImgMutation()

    const [productValues, setProductValues] = useState({
        title: '',
        description: '',
        price: 0
    })

    const onSubmit = (e) => {
        e.preventDefault()
        AddNewProductWithoutImg(productValues)
    } 

    const handleTitleChange = (e) => {
        setProductValues({
            ...productValues,
            title: e.target.value,
        })
    }

    const handleDescriptionChange = (e) => {
        setProductValues({
            ...productValues,
            description: e.target.value,
        })
    }

    const handlePriceChange = (e) => {
        setProductValues({
            ...productValues,
            price: Number(e.target.value),
        })
    }

    const closeModal = () => {
        dispatch(selectModal(''))
        dispatch(openCloseModal(false))
    }

    return (
        <S.Container>
            <S.ModalBlock>
                <S.ModalContent>
                    <S.ModalTittle>Новое объявление</S.ModalTittle>
                    <S.ModalCloseBtn >
                        <S.ModalCloseBtnLine onClick={closeModal}></S.ModalCloseBtnLine>
                    </S.ModalCloseBtn>
                    <S.ModalForm id="formNewArt" action="#">
                        <S.ModalFormBlock>
                            <S.ModalFormLabel for="name">Название</S.ModalFormLabel>
                            <S.ModalFormInputName onChange={handleTitleChange} type="text" name="name" id="formName" placeholder="Введите название"/>
                        </S.ModalFormBlock>
                        <S.ModalFormBlock>
                            <S.ModalFormLabel for="text">Описание</S.ModalFormLabel>                            
                            <S.ModalFormTextArea onChange={handleDescriptionChange} name="text" id="formArea" cols="auto" rows="10" placeholder="Введите описание"></S.ModalFormTextArea>
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
                            <S.ModalFormInputPrice onChange={handlePriceChange} type="text" name="price" id="formName"/>
                            <S.ModalFormInputPriceCover></S.ModalFormInputPriceCover>
                        </S.ModalFormBlockPrice> 
                    
                        <S.SubmitButton onClick={onSubmit} id="btnPublish">Опубликовать</S.SubmitButton>
                        
                    </S.ModalForm>
                </S.ModalContent>
            </S.ModalBlock>
        </S.Container>
    )
}

export default AddNewProduct