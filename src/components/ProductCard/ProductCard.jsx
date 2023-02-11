import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProductId } from '../../store/slices/productSlice'
import createdOn from '../../helpers/createdOn'
import * as S from './styles'

function ProductCard({ id, title, price, city, date, img }) {
    const imgSrc = `http://localhost:8090/${img}`

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const choiceProduct = () => {
        dispatch(getProductId(id))
        navigate('/product')
    }

    return (
        <S.ItemContainer id={id}>
            <S.Item>
                <S.ItemImgBlock onClick={choiceProduct}>
                    <S.ItemImgLink target="_blank">
                        <S.ItemImg img={img} src={imgSrc} alt="picture"/>
                    </S.ItemImgLink>
                </S.ItemImgBlock>
                <S.ItemContent>
                    <S.ItemLink href="" target="_blank">
                        <S.ItemTittle>{title}</S.ItemTittle>
                    </S.ItemLink>
                    <S.ItemPrice>{price}₽</S.ItemPrice>
                    <S.ItemPlace>{city}</S.ItemPlace>
                    <S.ItemDate>{createdOn(date)}</S.ItemDate>
                </S.ItemContent>
            </S.Item>
        </S.ItemContainer>
    )
}

export default ProductCard