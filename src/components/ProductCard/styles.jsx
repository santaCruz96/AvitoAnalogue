import styled from 'styled-components'

export const ItemContainer = styled.div`
    margin: 0;
    @media screen and (max-width: 590px) {
        margin: 0;
    }
`

export const Item = styled.div`
    width: 270px;
    height: 441px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    @media screen and (max-width: 590px) {
        width: 137px;
        height: 293px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
`

export const ItemImgBlock = styled.div`
    width: 270px;
    height: 270px;
    background-color: #F0F0F0;
    @media screen and (max-width: 590px) {
        width: 137px;
        height: 132px;
        background-color: #D9D9D9;
    }
`

export const ItemImgLink = styled.a``

export const ItemImg = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
        object-fit: cover;
    @media screen and (max-width: 590px) {
        width: 100%;
        height: 100%;
        display: block;
        -o-object-fit: cover;
            object-fit: cover;
    }
`

export const ItemContent = styled.div``

export const ItemLink = styled.a``

export const ItemTittle = styled.h3`
    height: 52px;
    font-size: 22px;
    font-weight: 500;
    line-height: 26px;
    color: #009EE4;
    margin-bottom: 10px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: 590px) {
        height: 51px;
        font-size: 14px;
        line-height: 17px;
        color: #009EE4;
        margin-bottom: 10px;
        margin-top: 10px;        
    }
`

export const ItemPrice = styled.p`
    color: #000000;
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
    margin-bottom: 10px;
    @media screen and (max-width: 590px) {
        font-size: 16px;
        line-height: 24px;
    }
`

export const ItemPlace = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 4px;
    @media screen and (max-width: 590px) {
        font-size: 12px;
        line-height: 16px;
        color: #5F5F5F;
    }
`

export const ItemDate = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    @media screen and (max-width: 590px) {
        font-size: 12px;
        line-height: 16px;
        color: #5F5F5F;
    }
`