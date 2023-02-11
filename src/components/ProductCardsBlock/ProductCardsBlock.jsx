import { useSelector } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import * as S from './styles'

function ProductCardsBlock({ data }) {
    const productName = useSelector((state) => state.product?.search)

    return (
        <S.ProductCardsBlock>
            {document.location.pathname === '/' ?
                data
                    ?.filter(content => 
                        content.title.toLowerCase().includes(productName)
                    )
                    .map(content => (
                    <ProductCard
                        key={content.id}
                        id={content.id}
                        title={content.title}
                        price={content.price}
                        city={content.user.city}
                        date={content.created_on}
                        img={content.images[0]?.url}
                    />
                ))
                :
                data?.map(content => (
                <ProductCard
                    key={content.id}
                    id={content.id}
                    title={content.title}
                    price={content.price}
                    city={content.user.city}
                    date={content.created_on}
                    img={content.images[0]?.url}
                />
                ))
            }
        </S.ProductCardsBlock>
    )
}

export default ProductCardsBlock