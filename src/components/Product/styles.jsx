import styled from "styled-components";

export const Product = styled.div`
    max-width: 1178px;
    padding: 0 0 70px;
    margin: 0 auto;
    padding: 0 5px 70px;
    @media screen and (max-width: 768px) {
        max-width: 1178px;
        width: 100%;
        padding: 55px 0 0px;
        margin: 0 auto;
    }
`

export const ProductContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
        -ms-flex-align: top;
            align-items: top;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    @media screen and (max-width: 768px) {
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
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    }
`

export const ProductLeft = styled.div`
    max-width: 480px;
    margin-right: 54px;
    @media screen and (max-width: 890px) {
        margin-right: 20px;
    }
    @media screen and (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        min-width: 320px;
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
        margin-right: 0;
        margin-bottom: 20px;
    }
`

export const ProductImgsBlock = styled.div`
    width: 100%;
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
    @media screen and (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        overflow: hidden;
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
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        position: relative;
        ::before {
            content: "";
            display: block;
            width: 23px;
            height: 23px;
            background-color: transparent;
            border-top: 2px solid #000000;
            border-left: 2px solid #000000;
            -webkit-transform: rotate(-45deg);
                    transform: rotate(-45deg);
            position: absolute;
            top: 24px;
            left: 32px;
            cursor: pointer;
        }
    }
`

export const ProductMainImgBlock = styled.div`
    min-width: 280px;
    min-height: 280px;
    background-color: #F0F0F0;
    margin: 0 5px;
    @media screen and (max-width: 768px) {
        width: 100%;
        min-width: 320px;
        height: auto;
        min-height: 320px;
        margin: 0 0px;
    }
`

export const ProductMainImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
`

export const ProductImgBar = styled.div`
    margin-top: 30px;
    width: 490px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: left;
        -ms-flex-pack: left;
            justify-content: left;
    overflow: hidden;
    margin-left: -5px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ProductImgBarItem = styled.div`
    width: 88px;
    min-width: 88px;
    min-height: 48px;
    background-color: #F0F0F0;
    border: 2px solid #F0F0F0;
    margin: 0 5px;
    cursor: pointer;
`

export const ProductImgBarItemImg = styled.img`
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
`

export const ProductImgBarMob = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        width: 68px;
        height: 8px;
        position: absolute;
        bottom: 20px;
        left: calc(50% - (68px/2));
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
    }
`

export const ProductImgBarMobCirlce = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #FFFFFF;
    cursor: pointer;
    :active {
        background-color: #FFFFFF;
    }
    :first-child {
        background-color: #FFFFFF;
    }
`

export const ProductRight = styled.div`
    max-width: 621px;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        padding: 0 20px;
    }
`

export const ProductBlock = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`

export const ProductBlockTittle = styled.h3`
    margin-bottom: 10px;
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    @media screen and (max-width: 768px) {
        margin-bottom: 10px;
    }
`

export const ProductBlockInfo = styled.div`
    margin-bottom: 34px;
    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
    }
`

export const ProductBlockInfoDate = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 4px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 17px;
        color: #5F5F5F;
        margin-bottom: 4px;
    }
`

export const ProductBlockInfoCity = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 4px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 17px;
        color: #5F5F5F;
        margin-bottom: 4px;
    }
`

export const ProductBlockInfoFeedback = styled.a`
    font-size: 16px;
    line-height: 21px;
    color: #009EE4;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 19px;
        color: #009EE4;
    }
`

export const ProductPrice = styled.p`
    font-size: 28px;
    line-height: 39px;
    font-weight: 700;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
        font-weight: 700;
        margin-bottom: 20px;
    }
`

export const ProductButtonAuthorPhone = styled.button`
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
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
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

export const ProductAuthor = styled.div`
    margin-top: 34px;
    margin-bottom: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    @media screen and (max-width: 768px) {
        margin-top: 30px;
        margin-bottom: 30px;
    }
`

export const ProductAuthorImgBlock = styled.div`
    width: 40px;
    height: 40px;
    background-color: #F0F0F0;
    border-radius: 50%;
`

export const ProductAuthorImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: ${(props) => (props.isAvatar ? 'block' : 'none')};
    -o-object-fit: cover;
    object-fit: cover;
    cursor: pointer;
`

export const ProductAuthorCont = styled.div`
    margin-left: 12px;  
`

export const ProductAuthorName = styled.p`
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    color: #009EE4;
    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 23px;
        font-weight: 600;
    }
`

export const ProductAuthorAbout = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: #5F5F5F;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 28px;
    }
`

export const ProductButtonBlock = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
`

export const ProductButtonEdit = styled.button`
    background-color: #009EE4;
    border-radius: 6px;
    border: 1px solid #009EE4;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #FFFFFF;
    margin-bottom: 10px;
    width: 189px;
    margin-right: 10px;
    :hover {
        background-color: #0080C1;
    }
    @media screen and (max-width: 966px) {
        width: 225px;
        margin-right: 0;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 57px;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
    }
`

export const ProductButtonRemove = styled.button`
    background-color: #009EE4;
    border-radius: 6px;
    border: 1px solid #009EE4;
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #FFFFFF;
    margin-bottom: 10px;
    width: 225px;
    :hover {
        background-color: #0080C1;
    }
    @media screen and (max-width: 966px) {
        width: 225px;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 57px;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
    }
`