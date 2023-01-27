import logo1 from '../../img/icon_01.png'
import logo2 from '../../img/icon_02.png'
import logo3 from '../../img/icon_03.png'
import * as S from './styles'

function Footer() {
    return (
        <S.Footer>
            <S.FooterContainer>
            <S.FooterImgBlock class="footer__img">
                <S.FooterImgLink href="" target="_self">
                    <S.FooterImg src={logo1} alt="home"/>
                </S.FooterImgLink>                        
            </S.FooterImgBlock>
            <S.FooterImgBlock class="footer__img">
                <S.FooterImgLink href="" target="_self">
                    <S.FooterImg  src={logo2} alt="add-product"/>
                </S.FooterImgLink>
            </S.FooterImgBlock>
            <S.FooterImgBlock class="footer__img">
                <S.FooterImgLink href="" target="_self">
                    <S.FooterImg  src={logo3} alt="profile"/>
                </S.FooterImgLink>
            </S.FooterImgBlock>
            </S.FooterContainer>
        </S.Footer>
    )
}

export default Footer