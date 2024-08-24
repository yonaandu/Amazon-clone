import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Pages/Landing/Landing';
import Auth from './Components/Pages/Auth/auth';
import Payment from './Components/Payment/Payment';
import Order from './Components/Pages/Orders/Order';
import Cart from './Components/Pages/Cart/Cart';
import Results from './Components/Pages/Results/Results';
import ProductDetail from './Components/Pages/ProductDetail/ProductDetail';
// import NotFound from './Components/Pages/NotFound/NotFound'; // Add a 404 page

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
<Route path="/products/:productId" element={<ProductDetail />} />
<Route path="/catagory/:catagoryName" element={<Results />} />
<Route path="/payments" element={<Payment />} />
<Route path="/orders" element={<Order />} />
<Route path="/cart" element={<Cart />} />
<Route path="/auth" element={<Auth />} />

          {/* <Route path="*" element={<NotFound />} /> Catch-all route for 404 */}
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;