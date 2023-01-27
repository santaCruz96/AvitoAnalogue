import styled from 'styled-components'

export const ProductCardsBlock = styled.div`
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
    height: 441px;
    ::-webkit-scrollbar {
        width: 0px;
        background-color: #009EE4;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #0080C1;
        border-radius: 3px;
    }
    @media screen and (max-width: 1158px) {
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: (270px)[3];
            grid-template-columns: repeat(3, 270px);
    }
    @media screen and (max-width: 890px) {
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: (270px)[2];
            grid-template-columns: repeat(2, 270px);
    }
    @media screen and (max-width: 590px) {
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: (137px)[2];
            grid-template-columns: repeat(2, 137px);
        grid-auto-rows: 293px;
        grid-gap: 10px 10px;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        height: 596px;
    }
`