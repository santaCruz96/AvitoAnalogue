import styled from 'styled-components'

export const SellerInformation = styled.div`
    width: 100%;
    padding: 0 0 70px;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 0 40px;
    }
`

export const SellerInformationContent = styled.div`
    width: 100%;
    @media screen and (max-width: 890px) {
        max-width: 834px;
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        max-width: 100%;
        width: 100%;
    }
`

export const Seller = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
        -ms-flex-align: top;
            align-items: top;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: start;
    @media screen and (max-width: 890px) {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
    @media screen and (max-width: 768px) {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    }
`

export const SellerLeft = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-right: 50px;
    @media screen and (max-width: 768px) {
        display: none;
        margin-right: 0px;
    }
`

export const SellerImgBlock = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #F0F0F0;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const SellerImgLink = styled.a``

export const SellerImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
`

export const SellerRight = styled.div`
    width: auto;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const SellerTittle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    line-height: 40px;
    color: #000000;
    margin-bottom: 0px;
    @media screen and (max-width: 768px) {
        font-size: 20px;
        line-height: 26px;
        margin-bottom: 6px;
    }
`

export const SellerCity = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 10px;
    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 21px;
        color: #5F5F5F;
        margin-bottom: 6px;
    }
`

export const SellerInf = styled(SellerCity)``

export const SellerImgMobContainer = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        padding: 20px 0;
    }
`

export const SellerImgMobBlock = styled.div`
    display: block;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background-color: #F0F0F0;
`

export const SellerImgMobLink = styled.a``

export const SellerImgMob = styled.img`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
        object-fit: cover;
`

export const SellerButton = styled.button`
    margin-top: 20px;
    background-color: #009EE4;
    border-radius: 6px;
    border: 1px solid #009EE4;
    width: 214px;
    height: 62px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    :hover {
        background-color: #0080C1;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 57px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
    }
`

export const Number = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 400;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`