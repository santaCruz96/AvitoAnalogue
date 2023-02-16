import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetAllUsersQuery, useGetUserQuery } from '../../api/skyVitoApi'
import sellsFrom from '../../helpers/sellsFrom'
import * as S from './styles'

function SellerInformation({ product }) {
    const SERVER = 'http://localhost:8090/'
    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState(null)

    const { data, isSuccess } = useGetAllUsersQuery()
    const { data: user } = useGetUserQuery()
    
    useEffect(() => {
        if (isSuccess) {
            setCurrentUser(data?.find((user) => user.id === product?.user_id))
        }
        
    }, [isSuccess])

    useEffect(() => {
        if (user?.id === currentUser?.id && isSuccess) {
            console.log(user);
            navigate('/my_profile')
        }
    }, [isSuccess])
    
    return (
        <S.SellerInformation>
            <S.SellerInformationContent>
                <S.Seller>
                    <S.SellerLeft>
                        <S.SellerImgBlock>
                            <S.SellerImgLink href="" target="_self">
                                <S.SellerImg src={`${SERVER}${currentUser?.avatar}`} alt=""/>
                            </S.SellerImgLink>
                        </S.SellerImgBlock>
                    </S.SellerLeft>
                    <S.SellerRight>
                        <S.SellerTittle>{`${currentUser?.name} ${currentUser?.surname ? currentUser?.surname : ''}`}</S.SellerTittle>
                        <S.SellerCity>{currentUser?.city}</S.SellerCity>
                        <S.SellerInf>{`Продает товары с ${sellsFrom(currentUser?.sells_from)}`}</S.SellerInf>
                        <S.SellerImgMobContainer>
                            <S.SellerImgMobBlock>
                                <S.SellerImgMobLink href="" target="_self">
                                    <S.SellerImgMob src="#" alt=""/>
                                </S.SellerImgMobLink>
                            </S.SellerImgMobBlock>
                        </S.SellerImgMobContainer>
                        <S.SellerButton>Показать телефон<S.Number>{currentUser?.phone}</S.Number></S.SellerButton>
                    </S.SellerRight>
                </S.Seller>
            </S.SellerInformationContent>
        </S.SellerInformation>
    )
}

export default SellerInformation