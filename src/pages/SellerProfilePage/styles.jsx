import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #FFFFFF;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;
    @media screen and (max-width: 768px) {
        width: 100%;
        min-width: 320px;
    }
`

export const Header = styled.header`
    background-color: #009EE4;  
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 55px;
        -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
                box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 3;
    }
`

export const HeaderNav = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0 10px;
    height: 79px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: end;
    @media screen and (max-width: 768px) {
        height: 55px;
        -webkit-box-pack: start;
            -ms-flex-pack: start;
                justify-content: start;
        padding: 0 20px;
    }
`

export const ButtonsBlock = styled.div`
    display: flex;
    gap: 10px;
    @media screen and (max-width: 768px) {
        display:none;
    }
`

export const Main = styled.main``

export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 10px 79px;
    @media screen and (max-width: 890px) {
        padding: 85px 0px 84px;
    }
    @media screen and (max-width: 768px) {
        padding: 85px 0px 84px;
    }
`

export const MainCenterBlock = styled.div`
    @media screen and (max-width: 890px) {
        margin: 0 auto;
        padding: 0 20px;
    }
    @media screen and (max-width: 768px) {
        margin: 0 auto;
        padding: 0 20px;
    }
`

export const Greeting = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
        font-size: 24px;
        line-height: 29px;
        color: #000000;
        margin-bottom: 20px;
    }
`

export const ProductsTittle = styled.h3`
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 70px;
    font-weight: 500;
    color: #000000;
    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
        font-size: 18px;
        line-height: 1;
    }
`

export const MainContent = styled.div`
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0 auto;
    }
`

