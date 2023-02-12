import AddNewProduct from './AddNewProduct/AddNewProduct'
import EditProduct from './EditProduct/EditProduct'
import ReviewsModal from './ReviewsModal/ReviewsModal'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import * as S from './styles'

function Modal({modal}) { 
    return (
        <S.Wrapper>
            {modal === 'add-new-product' && <AddNewProduct />}
            {modal === 'edit-product' && <EditProduct />}
            {modal === 'reviews' && <ReviewsModal />}
            {modal === 'sign-in' && <SignIn />}
            {modal === 'sign-up' && <SignUp/>}
        </S.Wrapper>
    )
}

export default Modal