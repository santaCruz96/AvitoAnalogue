import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { selectModal, openCloseModal } from '../../../store/slices/modalSlice'
import { useAddNewProductMutation, useAddNewProductWithoutImgMutation } from '../../../api/skyVitoApi'
import * as S from './styles'

function AddNewProduct() {
    const dispatch = useDispatch()
    const filePicker = useRef()

    const [addNewProductWithoutImg] = useAddNewProductWithoutImgMutation()
    const [addNewProduct] = useAddNewProductMutation()

    const [productValues, setProductValues] = useState({
        title: '',
        description: '',
        files: [],
        price: 0
    })
    const [preview, setPreview] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        const query = `?title=${productValues.title}&description=${productValues.description}&price=${Number(productValues.price)}`
        productValues.files?.forEach((picture) => formData.append('files', picture))
        const data = {
            query,
            formData,
        }
        if (productValues.files.length > 0) {
            addNewProduct(data)
        } else {
            addNewProductWithoutImg(productValues)
        }
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

    useEffect(() => {
        if (productValues.files.length === 0) {
          setPreview([])
        }
        const objectUrl = []
        productValues.files.forEach((image) => objectUrl.push(URL.createObjectURL(image)))
        setPreview(objectUrl)
    }, [productValues.files])
    
    const handlePictureChange = (e) => {
        const newFiles = Object.values(e.target.files).map((file) => file)
        if (newFiles) {
            const updatedList = [...productValues.files, ...newFiles]
            setProductValues({
                ...productValues,
                files: updatedList
            })
        }
        console.log(productValues.files);
    }

    const handlePriceChange = (e) => {
        setProductValues({
            ...productValues,
            price: e.target.value,
        })
    }

    const handleDeletePreview = (id) => () => {
        const copy = [...productValues.files]
        copy.splice(id, 1)
        setProductValues({
            ...productValues,
            files: copy
        })
        setPreview(preview.slice(id, 1))
    }

    useEffect(() => {
        if (productValues.files.length > 5) {
            const copy = [...productValues.files]
            copy.splice(5, 1)
            setProductValues({
                ...productValues,
                files: copy
            })
        }
    }, [productValues.files])

    const closeModal = () => {
        dispatch(selectModal(''))
        dispatch(openCloseModal(false))
    }

    const handlePick = () => {
        filePicker.current.click()
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
                                    <S.ImgCover onClick={handlePick}></S.ImgCover>
                                    <S.ImgInput type='file' onChange={handlePictureChange} ref={filePicker}></S.ImgInput>
                                    <S.Img id={1} preview={preview.length} src={preview[0]} alt="" />
                                    <S.DeletePreview onClick={handleDeletePreview(0)} id={1} preview={preview.length}>x</S.DeletePreview>
                                </S.ImgBlock>
                                <S.ImgBlock>
                                    <S.ImgCover onClick={handlePick}></S.ImgCover>
                                    <S.ImgInput type='file' onChange={handlePictureChange} ref={filePicker}></S.ImgInput> 
                                    <S.Img id={2} preview={preview.length} src={preview[1]} alt="" />
                                    <S.DeletePreview onClick={handleDeletePreview(1)} id={2} preview={preview.length}>x</S.DeletePreview>
                                </S.ImgBlock>
                                <S.ImgBlock>
                                    <S.ImgCover onClick={handlePick}></S.ImgCover>
                                    <S.ImgInput type='file' onChange={handlePictureChange} ref={filePicker}></S.ImgInput> 
                                    <S.Img id={3} preview={preview.length} src={preview[2]} alt="" />
                                    <S.DeletePreview onClick={handleDeletePreview(2)} id={3} preview={preview.length}>x</S.DeletePreview>
                                </S.ImgBlock>
                                <S.ImgBlock>
                                    <S.ImgCover onClick={handlePick}></S.ImgCover>
                                    <S.ImgInput type='file' onChange={handlePictureChange} ref={filePicker}></S.ImgInput> 
                                    <S.Img id={4} preview={preview.length} src={preview[3]} alt="" />
                                    <S.DeletePreview onClick={handleDeletePreview(3)} id={4} preview={preview.length}>x</S.DeletePreview>
                                </S.ImgBlock>
                                <S.ImgBlock>
                                    <S.ImgCover onClick={handlePick}></S.ImgCover>
                                    <S.ImgInput type='file' onChange={handlePictureChange} ref={filePicker}></S.ImgInput> 
                                    <S.Img id={5} preview={preview.length} src={preview[4]} alt="" />
                                    <S.DeletePreview onClick={handleDeletePreview(4)} id={5} preview={preview.length}>x</S.DeletePreview>
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