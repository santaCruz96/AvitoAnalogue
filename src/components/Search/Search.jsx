import logo from '../../img/logo.png'
import logoMob from '../../img/logo-mob.png'
import * as S from './styles';


function Search() {
    return (
        <S.Search>
            <S.LogoLink href="#" target="_blank">
                <S.LogoImg src={logo} alt="logo"/>
            </S.LogoLink>
            <S.MobLogoLink href="#" target="_blank">
                <S.MobLogoImg src={logoMob} alt="logo"/>
            </S.MobLogoLink>
            <S.SearchForm action="#">
                <S.InputSearch type="search" placeholder="Поиск по объявлениям" name="search"/>
                <S.MobInputSearch type="search" placeholder="Поиск" name="search-mob"/>
                <S.SearchButton>Найти</S.SearchButton>
            </S.SearchForm>
        </S.Search>
    )
}

export default Search