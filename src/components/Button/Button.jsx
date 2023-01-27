import * as S from './styles'

function Button({children, width, onClick}) {
    return (
        <S.Button width={width} onClick={onClick}>
            {children}
        </S.Button>
    )
}

export default Button