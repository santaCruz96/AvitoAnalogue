import { Routes as ReactRoutes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ProductPage from './pages/ProductPage/ProductPage'
import MyProductPage from './pages/MyProductPage/MyProductPage'
import SellerProfilePage from './pages/SellerProfilePage/SellerProfilePage'

function Routes() {
    return (
        <ReactRoutes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/my_profile' element={<ProfilePage/>}/>
            <Route path='/profile' element={<SellerProfilePage/>}/>
            <Route path='/product' element={<ProductPage/>}/>
            <Route path='/my_product' element={<MyProductPage/>}/>
        </ReactRoutes>
    )
}

export default Routes