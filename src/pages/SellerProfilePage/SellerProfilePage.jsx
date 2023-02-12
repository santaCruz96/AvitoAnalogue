import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MobLogo from '../../components/MobLogo/MobLogo'
import HeaderButton from '../../components/HeaderButton/HeaderButton'
import ComeBack from '../../components/ComeBack/ComeBack'
import SellerInformation from '../../components/SellerInformation/SellerInformation'
import ProductCardsBlock from '../../components/ProductCardsBlock/ProductCardsBlock'
import Footer from '../../components/Footer/Footer'
import { useGetAllUsersQuery, useGetProductByIdQuery } from '../../api/skyVitoApi'
import * as S from './styles'

function SellerProfilePage() {
    const dispatch = useDispatch()

    const [currentUser, setCurrentUser] = useState(null)

    const productId = useSelector((state) => state.product.productId)

    const { data, isSuccess }  = useGetAllUsersQuery()
    const { data: product } = useGetProductByIdQuery(productId)
    const searchTerm = product.user_id  
    useEffect(() => {
        setCurrentUser(data?.find((user) => user.id === searchTerm))
        console.log(currentUser)
    },[])


    return (
        <S.Wrapper>
            <S.Container>
                <S.Header>
                    <S.HeaderNav>
                        <MobLogo/>
                        <S.ButtonsBlock>
                            <HeaderButton>Разместить объявление</HeaderButton>
                            <HeaderButton>Личный кабинет</HeaderButton>
                        </S.ButtonsBlock>
                    </S.HeaderNav>
                </S.Header>
                <S.Main>
                    <S.MainContainer>
                        <S.MainCenterBlock>
                            <ComeBack />
                            <S.Greeting>Профиль продавца</S.Greeting>
                            <SellerInformation data={data?.user} />
                            <S.ProductsTittle>Товары продавца</S.ProductsTittle>
                        </S.MainCenterBlock>
                        <S.MainContent>
                            <ProductCardsBlock/>
                        </S.MainContent>
                    </S.MainContainer>
                </S.Main>
                <Footer/>
            </S.Container>
        </S.Wrapper>
    )
}

export default SellerProfilePage