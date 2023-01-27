import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;    
    min-height: 100%;
    overflow: hidden;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    width: 100%;        
    margin: 0 auto;    
    background-color: #FFFFFF; 
    @media screen and (max-width: 768px) {
        width: 100%;
        min-width: 320px;
        padding: 0 0px;
    }
`

export const Header = styled.header`
    background-color: #009EE4;
    @media screen and (max-width: 768px) {
        padding: 0 20px;
        width: 100%;
        height: 55px;
        -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
                box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 3;
        padding: 0 20px;
    }
`

export const HeaderNav = styled.nav`
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
        padding: 0;
    }
`

export const ButtonsBlock = styled.div`
    display: flex;
    gap: 10px;
    @media screen and (max-width: 768px) {
        display:none;
    }
`

export const Main = styled.main`
    margin: 0 auto;
`
export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 5px;
    @media screen and (max-width: 768px) {
        padding: 0 20px 0;
    }
`

export const MainTittle = styled.h3`
    margin-bottom: 32px;
    padding: 0 5px;
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;
    @media screen and (max-width: 768px) {
        margin-bottom: 14px;
        padding: 0;
        font-size: 18px;
        line-height: 1;
    }
`

export const ProductDescriptionBlock = styled.div`
    max-width: 792px;
    width: 100%;
    padding: 0 5px 117px;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0 auto;
        padding: 0 0 84px;
    }
`

export const ProductDescriptionText = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #000000;
`