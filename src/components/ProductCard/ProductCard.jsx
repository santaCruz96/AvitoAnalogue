import * as S from './styles'

function ProductCard() {
    return (
        <S.ItemContainer class="cards__item">
            <S.Item class="cards__card card">
                <S.ItemImgBlock class="card__image">
                    <S.ItemImgLink href="#" target="_blank">
                        <S.ItemImg src="#" alt="picture"/>
                    </S.ItemImgLink>
                </S.ItemImgBlock>
                <S.ItemContent class="card__content">
                    <S.ItemLink href="" target="_blank">
                        <S.ItemTittle class="card__title">Ракетка для большого тенниса Triumph Pro ST</S.ItemTittle>
                    </S.ItemLink>
                    <S.ItemPrice class="card__price">2&nbsp;200&nbsp;₽</S.ItemPrice>
                    <S.ItemPlace class="card__place">Санкт Петербург</S.ItemPlace>
                    <S.ItemDate class="card__date">Сегодня в&nbsp;10:45</S.ItemDate>
                </S.ItemContent>
            </S.Item>
        </S.ItemContainer>
    )
}

export default ProductCard