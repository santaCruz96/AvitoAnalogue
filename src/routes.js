import { Routes as ReactRoutes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ProductPage from './pages/ProductPage/ProductPage'
import SellerProfilePage from './pages/SellerProfilePage/SellerProfilePage'
import RefreshToken from './utils/refreshToken'

function Routes() {
    RefreshToken()

    return (
        <ReactRoutes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/my_profile' element={<ProfilePage/>}/>
            <Route path='/profile' element={<SellerProfilePage/>}/>
            <Route path='/product' element={<ProductPage/>}/>
        </ReactRoutes>
    )
}

export default Routes