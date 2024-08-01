import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Components/Pages/Landing/Landing'
import SignIn from './Components/Pages/Auth/Signup'
import Payment from './Components/Pages/Payment/Payment'
import Order from './Components/Pages/Orders/Order'
import Cart from './Components/Pages/Cart/Cart'
import Results from './Components/Pages/Results/Results'
import ProductDetail from './Components/Pages/ProductDetail/ProductDetail'

function Routing ()  {
  return (
    <div>
      <Router>
         <Routes> 
             
            <Route path="/"  element={<Landing />} />
            <Route path="/auth"  element={<SignIn />} />
            <Route path="/payments" exact element={<Payment/>} />
            <Route path="/orders" exact element={<Order />} />
            <Route path="/cart" exact element={<Cart/>} />
            
            <Route path="/catagory/:catagoryName"  element={<Results />} />
            <Route path="/products/:productId" exact element={<ProductDetail />} />
            {/* <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="*" element={<NotFound />} /> */}
         </Routes>
  

    

      </Router>
    </div>
  )
}

export default Routing;
