import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectModal, openCloseModal } from '../../../store/slices/modalSlice'
import { useGetProductByIdQuery, useEditProductMutation } from '../../../api/skyVitoApi'
import * as S from './styles'

function EditProduct() {
    const dispatch = useDispatch()
    const title = useRef()
    const description = useRef()
    const price = useRef()

    const [productValues, setProductValues] = useState({
        title: '',
        description: '',
        files: [],
        price: 0
    })

    const productId = useSelector((state) => state.product.productId)

    const { data, isSuccess } = useGetProductByIdQuery(productId)
    const [editProduct, {isSuccess: successEdit}] = useEditProductMutation()

    const closeModal = () => {
        dispatch(selectModal(''))
        dispatch(openCloseModal(false))
    }

    const submitChange = (e) => {
        e.preventDefault()
        const data = {
            title: productValues.title,
            description: productValues.description,
            price: Number(productValues.price),
        }
        editProduct({ id: productId, body: data })
        console.log(productValues);
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
            price: e.target.value,
        })
    }

    useEffect(() => {
        if (isSuccess) {
            setProductValues({
                ...productValues,
                title: data.title,
                description: data.description,
                files: data.images,
                price: data.price
            })
            title.current.value = data.title
            description.current.value = data.description
            price.current.value = data.price
        }
    }, [isSuccess])

    useEffect(() => {
        if (successEdit) {
            alert('Изменено')
        }
    }, [successEdit])

    return (
        <S.Container>
            <S.ModalBlock>
                <S.ModalContent>
                    <S.ModalTittle>Редактировать объявление</S.ModalTittle>
                    <S.ModalCloseBtn >
                        <S.ModalCloseBtnLine onClick={closeModal}></S.ModalCloseBtnLine>
                    </S.ModalCloseBtn>
                    <S.ModalForm id="formNewArt" action="#">
                        <S.ModalFormBlock>
                            <S.ModalFormLabel for="name">Название</S.ModalFormLabel>
                            <S.ModalFormInputName onChange={handleTitleChange} ref={title} type="text" name="name" id="formName"/>
                        </S.ModalFormBlock>
                        <S.ModalFormBlock>
                            <S.ModalFormLabel for="text">Описание</S.ModalFormLabel>                            
                            <S.ModalFormTextArea onChange={handleDescriptionChange} ref={description} name="text" id="formArea" cols="auto" rows="10"></S.ModalFormTextArea>
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
                            <S.ModalFormInputPrice onChange={handlePriceChange} ref={price} type="text" name="price" id="formName"/>
                            <S.ModalFormInputPriceCover></S.ModalFormInputPriceCover>
                        </S.ModalFormBlockPrice> 
                    
                        <S.SubmitButton onClick={submitChange} id="btnPublish">Сохранить</S.SubmitButton>
                        
                    </S.ModalForm>
                </S.ModalContent>
            </S.ModalBlock>
        </S.Container>
    )
}

export default EditProduct