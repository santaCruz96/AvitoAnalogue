import { useSelector } from 'react-redux'
import { useGetCommentsByIdQuery } from '../../../../api/skyVitoApi'
import createdOn from '../../../../helpers/createdOn'
import * as S from './styles'

function Reviews() {
    const SERVER = 'http://localhost:8090/'
    const productId = useSelector((state) => state.product.productId)

    const {data = []} = useGetCommentsByIdQuery(productId)

    return (
        <S.Reviews>
            <S.Review>
                {data?.map((comment) => (
                    <S.ReviewItem>
                        <S.ReviewLeft>
                            <S.ReviewImgBlock>
                                <S.ReviewImg isAvatar = {comment.author.avatar} src={`${SERVER}${comment.author.avatar}`} alt=""/>
                            </S.ReviewImgBlock>
                        </S.ReviewLeft>
                        <S.ReviewRight>
                            <S.ReviewName>{comment.author.name} <S.ReviewNameSpan>{createdOn(comment.created_on)}</S.ReviewNameSpan></S.ReviewName>
                            <S.ReviewTitle>Комментарий</S.ReviewTitle>
                            <S.ReviewText>{comment.text}</S.ReviewText>
                        </S.ReviewRight>
                    </S.ReviewItem>
                ))}
            </S.Review>
        </S.Reviews>
    )
}

export default Reviews