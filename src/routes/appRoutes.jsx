
import { Routes, Route } from 'react-router-dom'
import React from 'react'

import Home from '../pages/user/Home'
import ProductDetailed from '../pages/user/ProductDetailed'
import Cart from '../pages/user/Cart'
const Signin = React.lazy(()=> import('../pages/user/Signin'));
const Signup = React.lazy(()=> import('../pages/user/Signup'));
import Checkout from '../pages/user/Checkout'
import OrderSuccess from '../pages/user/OrderSuccess'
import Orders from '../pages/user/Orders'
import AIStylist from '../pages/user/AIStylist'


const AdminLogin = React.lazy(()=> import('../pages/admin/AdminLogin'));
const Dashboard = React.lazy(()=> import('../pages/admin/Dashboard'));

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