import * as S from './styles'

function Product({page}) {
    return (
        <S.Product>
            <S.ProductContent>
                <S.ProductLeft>
                    <S.ProductImgsBlock>
                        <S.ProductMainImgBlock>
                            <S.ProductMainImg src="" alt=""/>
                        </S.ProductMainImgBlock>
                        <S.ProductImgBar>
                            <S.ProductImgBarItem>
                                <S.ProductImgBarItemImg src="" alt=""/>
                            </S.ProductImgBarItem>
                            <S.ProductImgBarItem>
                                <S.ProductImgBarItemImg src="" alt=""/>
                            </S.ProductImgBarItem>
                            <S.ProductImgBarItem>
                                <S.ProductImgBarItemImg src="" alt=""/>
                            </S.ProductImgBarItem>
                            <S.ProductImgBarItem>
                                <S.ProductImgBarItemImg src="" alt=""/>
                            </S.ProductImgBarItem>
                            <S.ProductImgBarItem>
                                <S.ProductImgBarItemImg src="" alt=""/>
                            </S.ProductImgBarItem>
                        </S.ProductImgBar>
                        <S.ProductImgBarMob>
                            <S.ProductImgBarMobCirlce/>
                            <S.ProductImgBarMobCirlce/>
                            <S.ProductImgBarMobCirlce/>
                            <S.ProductImgBarMobCirlce/>
                            <S.ProductImgBarMobCirlce/>
                        </S.ProductImgBarMob>
                    </S.ProductImgsBlock>
                </S.ProductLeft>
                <S.ProductRight>
                    <S.ProductBlock>
                        <S.ProductBlockTittle>Ракетка для большого тенниса Triumph Pro STС Б/У</S.ProductBlockTittle>
                        <S.ProductBlockInfo>
                            <S.ProductBlockInfoDate>Сегодня в 10:45</S.ProductBlockInfoDate>
                            <S.ProductBlockInfoCity>Санкт-Петербург</S.ProductBlockInfoCity>
                            <S.ProductBlockInfoFeedback href="" target="_blank" rel="">23 отзыва</S.ProductBlockInfoFeedback>
                        </S.ProductBlockInfo>
                        <S.ProductPrice>2 200 ₽</S.ProductPrice>
                        {page === 'other' &&
                            <S.ProductButtonAuthorPhone>Показать телефон<S.Number>8 905 ХХХ ХХ ХХ</S.Number></S.ProductButtonAuthorPhone>
                        }
                        {page === 'my' &&
                            <S.ProductButtonBlock>
                                <S.ProductButtonEdit>Редактировать</S.ProductButtonEdit>
                                <S.ProductButtonRemove>Снять с публикации</S.ProductButtonRemove>
                            </S.ProductButtonBlock>
                        }
                        <S.ProductAuthor>
                            <S.ProductAuthorImgBlock>
                                <S.ProductAuthorImg src="" alt=""/>
                            </S.ProductAuthorImgBlock>
                            <S.ProductAuthorCont>
                                <S.ProductAuthorName>Кирилл</S.ProductAuthorName>
                                <S.ProductAuthorAbout>Продает товары с августа 2021</S.ProductAuthorAbout>
                            </S.ProductAuthorCont>
                        </S.ProductAuthor>
                    </S.ProductBlock>
                </S.ProductRight>
            </S.ProductContent>
        </S.Product>
    )
}

export default Product 