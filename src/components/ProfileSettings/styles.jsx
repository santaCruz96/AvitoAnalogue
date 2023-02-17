import styled from "styled-components"

export const ProfileSettingsBlock = styled.div`
    width: 100%;
    padding: 0 0 70px;
    @media screen and (max-width: 590px) {
        width: 100%;
        padding: 0 0 40px;  
    }
`

export const ProfileSettingsContent = styled.div`
    max-width: 834px;  
    @media screen and (max-width: 890px) {
        max-width: 834px;
        width: 100%;
    }
`

export const ProfileSettingsTittle = styled.h3`
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 70px;
    font-weight: 500;
    color: #000000;
    @media screen and (max-width: 590px) {
        font-size: 18px;
        line-height: 1;
    }
`

export const ProfileSettings = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
        -ms-flex-align: top;
            align-items: top;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    @media screen and (max-width: 890px) {
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
    }
`

export const SettingsLeft = styled.div`
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
    margin-right: 43px;
    @media screen and (max-width: 590px) {
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
    }
`

export const SettingsImgBlock = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    background-color: #F0F0F0;
    @media screen and (max-width: 590px) {
        width: 132px;
        height: 132px;
    }
`

export const SettingsImg = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    display: ${(props) => (props.isAvatar ? 'block' : 'none')};
    -o-object-fit: cover;
        object-fit: cover;
    @media screen and (max-width: 590px) {
        width: 132px;
        height: 132px;
    }
`

export const AvatarInput = styled.input`
    opacity: 0;
    height: 0;
    width: 0;
    line-height: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
`

export const SettingsChangePhoto = styled.a`
    margin-top: 10px;
    margin-bottom: 30px;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    color: #009EE4;
`

export const SettingsRight = styled.div`
    width: 630px;
    @media screen and (max-width: 590px) {
        width: 100%;
    }
`

export const SettingsForm = styled.form`
    width: 630px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    @media screen and (max-width: 590px) {
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
`

export const SettingsOption = styled.div`
    display: inline-block;
    margin: 0 7px 20px;
    @media screen and (max-width: 590px) {
        display: inline-block;
        margin: 0 0px 18px;
    }
`

export const SettingsLabel = styled.label`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #C4C4C4;
    margin-bottom: 4px;
    display: block;
    @media screen and (max-width: 590px) {
        font-size: 14px;
        line-height: 21px;
        color: #C4C4C4;
        margin-bottom: 6px;
    }
`

export const Inputs = styled.input`
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 13px 19px;
    ::-webkit-input-placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    :-ms-input-placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    ::-ms-input-placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    ::placeholder {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.3);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
    @media screen and (max-width: 590px) {
        border-radius: 30px;
        padding: 9px 17px;
        ::-webkit-input-placeholder {
            font-size: 14px;
            line-height: 21px;
        }
        :-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
        }
        ::-ms-input-placeholder {
            font-size: 14px;
            line-height: 21px;
        }
        ::placeholder {
            font-size: 14px;
            line-height: 21px;
        }
    }
`

export const SettingsFirstName = styled(Inputs)`
    width: 300px;
    @media screen and (max-width: 590px) {
        width: 100%;
    }
`

export const SettingsLastName = styled(Inputs)`
    width: 300px;
    @media screen and (max-width: 590px) {
        width: 100%;
    }
`

export const SettingsCity = styled(Inputs)`
    width: 300px;
    @media screen and (max-width: 590px) {
        width: 100%;
    }
`

export const SettingsPhone = styled(Inputs)`
    width: 614px;
    @media screen and (max-width: 590px) {
        width: 100%;
    }
`

export const SettingsButton = styled.button`
    font-size: 16px;
    line-height: 1;
    color: #FFFFFF;
    width: 154px;
    height: 50px;
    margin: 10px 7px 0;
    background-color: #009EE4;
    border-radius: 6px;
    border: 1px solid #009EE4;
    @media screen and (max-width: 590px) {
        font-size: 16px;
        line-height: 1;
        width: 100%;
        height: 46px;
        margin: 8px 0px 0;
    }
`