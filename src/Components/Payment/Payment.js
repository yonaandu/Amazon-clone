import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '../Layout/Layout';
import { DataContext } from '../DataProvider/DataProvider';
import Productcard from '../Product/Productcard';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import './Payment.css';
import { Type } from '../Utility/action.type'; 

import { IoIosArrowDown } from "react-icons/io";




  export const Payment  = () => {
    const { state, dispatch } = useContext(DataContext);
    const { basket, user } = state;
    const subtotal = basket.reduce((amount, item) => {
      return item.amount * item.price + amount;
    }, 0);
    
  
   // Calculate total price of items in the basket
  const total = basket.reduce((amount, item) => {
    return basket.length;
  }, 0);
  const decrement = (item) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      item: item,
    });
  };

  return (
    <Layout>
      <div className='paymentheader'> 
        Checkout ({total}) items
      </div>
      <section className='payment'>
        {/* Delivery Address */}
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment-address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>JavaScript City, JS</p>
          </div>
        </div>

        {/* Review Items */}
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className='payment-items'>
          {basket.map((item, index) => (
              <div key={index} className='payment-product-detail'>
                <img src={item.image} alt={item.title} className='payment-product-image' />
                <div className='payment-product-info'>
                  <h3>{item.title}</h3>
                  <p className='product-detail-description'>{item.description}</p>
                  
                  <CurrencyFormat amount={item.price} />
                  <button className='button2' onClick={() => decrement(item.id)}><IoIosArrowDown size={20} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className='payment-section'>
          <div className='payment-title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment-details'>
          <CurrencyFormat amount={subtotal}/> 
            <button className='payment-button'>Continue to Payment</button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
