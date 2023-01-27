import * as S from './styles'

function HeaderButton({children, onClick}) {
    return (
        <S.HeaderButton onClick={onClick}>
            {children}
        </S.HeaderButton>
    )
}

export default HeaderButton