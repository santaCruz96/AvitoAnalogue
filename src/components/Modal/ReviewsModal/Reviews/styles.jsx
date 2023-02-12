import styled from "styled-components";

export const Reviews = styled.div`
    width: 100%;
    height: 495px;
`

export const Review = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
            align-items: flex-start;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin: 15px 0;
    flex-direction: column;
    row-gap: 30px;
`

export const ReviewItem = styled.div`
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
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
`

export const ReviewLeft = styled.div`
    margin-right: 12px;
`

export const ReviewImgBlock = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #F0F0F0;
`

export const ReviewImg = styled.img`
    display: ${(props) => (props.isAvatar ? 'block' : 'none')};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const ReviewRight = styled.div`
    display: block;
`

export const ReviewName = styled.p`
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    color: #000000;
    display: flex;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 28px;
        color: #000000;
    }
`

export const ReviewNameSpan = styled.p`
    margin-left: 10px;
    color: #5F5F5F;
`

export const ReviewTitle = styled.h5`
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    color: #000000;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 28px;
        color: #000000;
    }
`

export const ReviewText = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: #000000;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 28px;
        color: #000000;
    }
`