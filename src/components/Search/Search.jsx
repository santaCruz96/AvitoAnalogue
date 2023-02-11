import { useState } from 'react'
import { useDispatch } from 'react-redux'
import logo from '../../img/logo.png'
import logoMob from '../../img/logo-mob.png'
import { setSearch } from '../../store/slices/productSlice';
import * as S from './styles';


function Search() {
    const dispatch = useDispatch()
    const [searchItem, setSearchItem] = useState('')
    const [clear, setClear] = useState(false)

    const handleSearch = (event) => {
        if (event.target.value === '' && clear) {
            setSearchItem('')
            dispatch(setSearch(''))
            setClear(false)
        } else {
            dispatch(setSearch(event.target.value))
            setSearchItem(event.target.value)
            setClear(true)
        }
    }
    
    const handleMobSearch = (event) => {
        dispatch(setSearch(event.target.value))
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(setSearch(searchItem))
        setClear(true)
    }

    return (
        <S.Search>
            <S.LogoLink href="#" target="_blank">
                <S.LogoImg src={logo} alt="logo"/>
            </S.LogoLink>
            <S.MobLogoLink href="#" target="_blank">
                <S.MobLogoImg src={logoMob} alt="logo"/>
            </S.MobLogoLink>
            <S.SearchForm action="#">
                <S.InputSearch onChange={handleSearch} type="search" placeholder="Поиск по объявлениям" name="search"/>
                <S.MobInputSearch onChange={handleMobSearch} type="search" placeholder="Поиск" name="search-mob"/>
                <S.SearchButton onClick={handleClick}>Найти</S.SearchButton>
            </S.SearchForm>
        </S.Search>
    )
}

export default Search