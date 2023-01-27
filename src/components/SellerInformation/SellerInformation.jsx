import * as S from './styles'

function SellerInformation() {
    return (
        <S.SellerInformation>
            <S.SellerInformationContent>
                <S.Seller>
                    <S.SellerLeft>
                        <S.SellerImgBlock>
                            <S.SellerImgLink href="" target="_self">
                                <S.SellerImg src="#" alt=""/>
                            </S.SellerImgLink>
                        </S.SellerImgBlock>
                    </S.SellerLeft>
                    <S.SellerRight>
                        <S.SellerTittle>Кирилл Матвеев</S.SellerTittle>
                        <S.SellerCity>Санкт-Петербург</S.SellerCity>
                        <S.SellerInf>Продает товары с августа 2021</S.SellerInf>
                        <S.SellerImgMobContainer>
                            <S.SellerImgMobBlock>
                                <S.SellerImgMobLink href="" target="_self">
                                    <S.SellerImgMob src="#" alt=""/>
                                </S.SellerImgMobLink>
                            </S.SellerImgMobBlock>
                        </S.SellerImgMobContainer>
                        <S.SellerButton>Показать телефон<S.Number>8 905 ХХХ ХХ ХХ</S.Number></S.SellerButton>
                    </S.SellerRight>
                </S.Seller>
            </S.SellerInformationContent>
        </S.SellerInformation>
    )
}

export default SellerInformation