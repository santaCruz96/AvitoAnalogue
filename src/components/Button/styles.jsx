import styled from 'styled-components'

export const Button = styled.button`
    width: ${({ width }) => (width && width)};
    height: 50px;
    background-color: #009EE4;
    border: 1px solid #009EE4;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    cursor: pointer;
    :hover {
        background-color: #0080C1;
        border: 1px solid #0080C1;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`