import styled from "styled-components";

export const HeaderLogoBlock = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
`

export const HeaderLogoLink = styled.a`
    @media screen and (max-width: 768px) {
        display: block;
        width: 32px;
        height: 32px;
    }
`

export const HeaderLogoImg = styled.img`
    @media screen and (max-width: 768px) {
        width: 32px;
        height: auto;
        display: block;
        -o-object-fit: cover;
            object-fit: cover;
    }
`