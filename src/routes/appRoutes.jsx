
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/user/Home'
import ProductDetailed from '../pages/user/ProductDetailed'
import Cart from '../pages/user/Cart'
import Signin from '../pages/user/Signin'
import Signup from '../pages/user/Signup'
import AdminLogin from '../pages/admin/AdminLogin'
import Dashboard from '../pages/admin/Dashboard'
import Checkout from '../pages/user/Checkout'
import OrderSuccess from '../pages/user/OrderSuccess'
import Orders from '../pages/user/Orders'
import AIStylist from '../pages/user/AIStylist'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetailed />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/order-success/:orderId' element={<OrderSuccess />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/ai-stylist' element={<AIStylist />} />


      {/* Admin routes */}
      <Route path='/admin/login' element={<AdminLogin />} />
      <Route path='/admin/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default AppRoutes