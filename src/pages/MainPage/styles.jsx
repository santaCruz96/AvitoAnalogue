import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
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
    height: 100%;
    background-color: #FFFFFF;
    @media screen and (max-width: 590px) {
        width: 100%;
        min-width: 320px;
        min-height: 100vh;
        background-color: #FFFFFF;
    }
`

export const Header = styled.header`
    background-color: #009EE4;
    @media screen and (max-width: 590px) {
        display: none;
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
`

export const ButtonsBlock = styled.div`
    display: flex;
    gap: 10px;
    @media screen and (max-width: 768px) {
        display:none;
    }
`

export const ButtonEnter = styled.button`
    padding: 8px 24px;
    height: 40px;
    border: 1px solid #FFFFFF;
    border-radius: 6px;
    background-color: transparent;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    :hover {
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid #FFFFFF;
    }
`

export const Main = styled.main``

export const MainContainer = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 52px 10px 37px;
    @media screen and (max-width: 590px) {
        padding: 85px 10px 84px;
    }
`

export const Tittle = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
    margin-bottom: 30px;
    @media screen and (max-width: 590px) {
        font-size: 24px;
        line-height: 29px;
        color: #000000;
        margin-bottom: 20px;
        text-align: center;
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
            left: 13px;
            cursor: pointer;
    }
`

export const MainContent = styled.div`
    width: 100%;
    margin: 0 auto;
    @media screen and (max-width: 590px) {
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        position: fixed;
        right: 0;
        left: 0;
        top: 134px;
        bottom: 84px;
    }
`

export const CardsBlock = styled.div`
    max-width: 1158px;
    width: 100%;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (270px)[4];
        grid-template-columns: repeat(4, 270px);
    grid-auto-rows: 441px;
    grid-gap: 40px 26px;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow-y: auto;
    scrollbar-color: #FFFFFF #2E2E2E;
    scrollbar-width: thin;
    scrollbar-width: 0px;
    height: 922px;
    ::-webkit-scrollbar {
        width: 0px;
        background-color: #009EE4;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #0080C1;
        border-radius: 3px;
    }
`