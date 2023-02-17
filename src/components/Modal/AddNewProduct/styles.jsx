import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 50%);
`

export const ModalBlock = styled.div`
    position: absolute;
    z-index: 5;
    display: flex;
    top: 60px;
    opacity: 1;
    @media screen and (max-width: 768px) {
        position: absolute;
        width: 100%;
        z-index: 5;
        top: 55px;
        opacity: 1;
    }
`

export const ModalContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    width: 600px;
    height: auto;
    padding: 32px 50px 42px;
    background-color: #FFFFFF;
    border-radius: 12px;
    position: relative;
    @media screen and (max-width: 768px) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: start;
            -ms-flex-align: start;
                align-items: flex-start;
        width: 100%;
        min-width: 320px;
        border-radius: 0px;
        height: auto;
        padding: 30px 20px 30px;
    }
`

export const ModalTittle = styled.h3`
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    @media screen and (max-width: 768px) {
        font-size: 24px;
        line-height: 29px;
        padding: 0 0 0 26px;
        position: relative;
        ::before {
            content: "";
            display: block;
            width: 12px;
            height: 12px;
            background-color: transparent;
            border-top: 2px solid #000000;
            border-left: 2px solid #000000;
            -webkit-transform: rotate(-45deg);
                    transform: rotate(-45deg);
            position: absolute;
            top: 9px;
            left: 0;
            cursor: pointer;
        }
    }
`

export const ModalCloseBtn = styled.div`
    width: 23px;
    height: 23px;
    position: absolute;
    top: 47px;
    right: 50px;
    z-index: 3;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ModalCloseBtnLine = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    ::after {
        content: "";
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #D9D9D9;
        top: 47%;
        right: -4px;
        -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    }
    ::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #D9D9D9;
        top: 47%;
        right: -4px;
        -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    }
`

export const ModalForm = styled.form`
    margin-top: 22px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    width: 100%;
    @media screen and (max-width: 768px) {
        margin-top: 22px;
    }
`

export const ModalFormBlock = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        margin-bottom: 18px;
    }
`

export const ModalFormLabel = styled.label`
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    @media screen and (max-width: 768px) {
        margin-bottom: 5px;
        font-size: 14px;
        line-height: 21px;
        color: #000000;
    }
`

export const ModalFormInputName = styled.input`
    padding: 13px 19px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    ::-webkit-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004D;
    }
    :-ms-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004D;
    }
    ::-ms-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004D;
    }
    ::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004D;
    }
    @media screen and (max-width: 768px) {
        padding: 9px 17px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 30px;
        font-size: 16px;
        line-height: 1;
        width: 100%;
        ::-webkit-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #C4C4C4;
        }
        :-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #C4C4C4;
        }
        ::-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #C4C4C4;
        }
        ::placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #C4C4C4;
        }
    }
`

export const ModalFormTextArea = styled.textarea`
    padding: 13px 19px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    font-size: 16px;
    line-height: 1;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    max-height: 200px;
    font-size: 16px;
    line-height: 24px;
    ::-webkit-input-placeholder {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004D;
    }
    :-ms-input-placeholder {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004D;
    }
    ::-ms-input-placeholder {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004D;
    }
    ::placeholder {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #0000004D;
    }
    @media screen and (max-width: 768px) {
        padding: 9px 17px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 30px;
        font-size: 16px;
        line-height: 1;
        font-family: 'Roboto', sans-serif;
        width: 100%;
        max-height: 107px;
        ::-webkit-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #C4C4C4;
        }
        :-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #C4C4C4;
        }
        ::-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #C4C4C4;
        }
        ::placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #C4C4C4;
        }
    }
`

export const ModalFormParagraph = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 10px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 10px;
    }
`

export const Span = styled.span`
    margin-left: 10px;
    color: rgba(0, 0, 0, 0.3);
    @media screen and (max-width: 768px) {
        display: block;
        margin-left: 0px;
        color: rgba(0, 0, 0, 0.3);
    }
`

export const ModalFormBarImg = styled.div`
    width: 500px;
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
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    margin-bottom: 10px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        width: 278px;
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
        -webkit-box-pack: start;
            -ms-flex-pack: start;
                justify-content: start;
        margin: 0px -5px 10px;
        overflow: hidden;
    }
`

export const ImgBlock = styled.div`
    width: 90px;
    height: 90px;
    margin-right: 10px;
    position: relative;
    z-index: 0;
    @media screen and (max-width: 768px) {
        display: block;
        width: 90px;
        min-width: 90px;
        height: 90px;
        background-color: #F0F0F0;
        margin: 0 5px;
    }
`

export const ImgInput = styled.input`
    opacity: 0;
    height: 0;
    width: 0;
    line-height: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
`

export const Img = styled.img`
    display: ${(props) => (props.id <= props.preview ? 'inline' : 'none')};
    width: 90px;
    height: 90px;
    -o-object-fit: cover;
        object-fit: cover;
    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
        height: auto;
        -o-object-fit: cover;
           object-fit: cover;
    }
`

export const ImgCover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #F0F0F0;
    z-index: -1;
    cursor: pointer;
    ::after {
        content: "";
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #D9D9D9;
        top: 50%;
        right: calc(50% - (30px/2));
    }
    ::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 2px;
        border-radius: 2px;
        background-color: #D9D9D9;
        top: 50%;
        right: calc(50% - (30px/2));
        -webkit-transform: rotate(90deg);
                transform: rotate(90deg);
    }
`

export const DeletePreview = styled.div`
    display: ${(props) => (props.id <= props.preview ? 'block' : 'none')};
    position: absolute;
    color: black;
    top: 0;
    right: 0;
    padding-right: 5px;
    padding-left: 5px;
    cursor: pointer;
    background-color: white;
`

export const ModalFormBlockPrice = styled(ModalFormBlock)`
    position: relative;
`


export const ModalFormInputPrice = styled.input`
    width: 200px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    ::-webkit-input-placeholder {
        text-align: end;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }
    :-ms-input-placeholder {
        text-align: end;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }
    ::-ms-input-placeholder {
        text-align: end;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }
    ::placeholder {
        text-align: end;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        ::-webkit-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #000000;
        }
        :-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #000000;
        }
        ::-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #000000;
        }
        ::placeholder {
            font-size: 14px;
            line-height: 21px;
            color: #000000;
        }
    }
`

export const ModalFormInputPriceCover = styled.div`
    width: 24px;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    position: absolute;
    bottom: 13px;
    left: 170px;
    z-index: 0;
    background-color: #FFFFFF;
    ::after {
        content: "\A0 \20BD";
        width: 24px;
        height: 24px;
        position: absolute;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
        z-index: 2;
    }
    @media screen and (max-width: 768px) {
        width: 21px;
        height: 21px;
        font-size: 14px;
        line-height: 21px;
        bottom: 9px;
        left: auto;
        right: 18px;
        ::after {
            font-size: 14px;
            line-height: 21px;
        }
    }
`

export const SubmitButton = styled.button`
    margin-top: 10px;
    width: 181px;
    height: 50px;
    background: #D9D9D9;
    border: 1px solid #D9D9D9;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    @media screen and (max-width: 768px) {
        margin-top: 10px;
        width: 100%;
        height: 46px;
    }
`