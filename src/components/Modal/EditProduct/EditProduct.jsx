import { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectModal, openCloseModal } from '../../../store/slices/modalSlice'
import {
    useGetProductByIdQuery,
    useEditProductMutation,
    useAddProductImageMutation,
    useDeleteProductImageMutation
} from '../../../api/skyVitoApi'
import * as S from './styles'

function EditProduct() {
    const SERVER = 'http://localhost:8090/'
    const LIMIT = 5

    const dispatch = useDispatch()
    const title = useRef()
    const description = useRef()
    const price = useRef()
    const filePicker = useRef()

    const [limit, setLimit] = useState(LIMIT)
    const [productValues, setProductValues] = useState({
        title: '',
        description: '',
        price: 0
    })
    const [preview, setPreview] = useState([])
    const [fileList, setFileList] = useState([])

    const productId = useSelector((state) => state.product.productId)

    const { data, isSuccess } = useGetProductByIdQuery(productId)
    const [editProduct, { isSuccess: successEdit }] = useEditProductMutation()
    const [addImage, {isSuccess: successAdd}] = useAddProductImageMutation()
    const [deleteImage] = useDeleteProductImageMutation()

    const closeModal = () => {
        dispatch(selectModal(''))
        dispatch(openCloseModal(false))
    }

    useEffect(() => {
        setLimit(LIMIT - data.images.length - fileList.length)
    }, [data.images.length, fileList.length])

    useEffect(() => {
        if (fileList.length === 0) {
          setPreview([])
        }
        const objectUrl = []
        fileList.forEach((image) => objectUrl.push(URL.createObjectURL(image)))
        setPreview(objectUrl)
    }, [fileList])

    const submitChange = (e) => {
        e.preventDefault()
        const data = {
            title: productValues.title,
            description: productValues.description,
            price: Number(productValues.price),
        }
        editProduct({ id: productId, body: data })
        if (fileList) {
            fileList.forEach((el) => {
              const formData = new FormData()
              formData.append('file', el)
                addImage({ id:productId, body: formData })
            })
        }
        closeModal()
    }

    const handleDeleteImage = (id, url) => () => {
        const query = `?file_url=${url}`
        deleteImage({ id, query })
    }

    const handleDeletePreview = (id) => () => {
        const copy = [...fileList]
        copy.splice(id, 1)
        setFileList(copy)
        setPreview(preview.slice(id, 1))
    }

    useEffect(() => {
        if (fileList.length > 5) {
            const copy = [...fileList]
            copy.splice(5, 1)
            setFileList(copy)
        }
    }, [fileList])

    const handlePictureChange = (e) => {
        const newFiles = Object.values(e.target.files).map((file) => file)
        if (newFiles) {
            const updatedList = [...fileList, ...newFiles]
            setFileList(updatedList)
        }
        console.log(e.target.files);
        console.log(productValues.files);
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
                price: data.price
            })
            title.current.value = data.title
            description.current.value = data.description
            price.current.value = data.price
        }
    }, [isSuccess])

    const handlePick = () => {
        filePicker.current.click()
    }

    useEffect(() => {
        if (successEdit && successAdd) {
            setFileList([])
            alert('Изменено')
            closeModal()
        }
    }, [successAdd, successEdit])

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
                                <S.ImgInput
                                    id='files'
                                    type='file'
                                    name='files'
                                    onChange={handlePictureChange}
                                    ref={filePicker}>
                                </S.ImgInput>
                                {data.images.map((item) => (
                                    <S.ImgBlock key={item.id} id={item.id}>
                                        <S.Img src={`${SERVER}${item.url}`} alt='' />
                                        <S.DeletePreview onClick={handleDeleteImage(item.ad_id, item.url)}>
                                            x
                                        </S.DeletePreview>    
                                    </S.ImgBlock>
                                ))}
                                {preview.length > 0
                                    ? preview.map((item, index) => (
                                        <S.ImgBlock key={item} id={index}>
                                            <S.Img src={item} alt='' />
                                            <S.DeletePreview type='button' onClick={handleDeletePreview(index)}>
                                                x
                                            </S.DeletePreview>
                                        </S.ImgBlock>
                                    ))
                                    : null
                                }
                                {Array(limit)
                                    .fill()
                                    .map((index) => {
                                        return (
                                            <S.ImgBlock key={index} id={index}>
                                                <S.ImgCover onClick={handlePick}></S.ImgCover>
                                            </S.ImgBlock>
                                        )
                                    })
                                }
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