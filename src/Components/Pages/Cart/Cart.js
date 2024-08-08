import React, { useContext } from 'react';
import  Layout  from '../../Layout/Layout';
import { DataContext } from '../../DataProvider/DataProvider';
import Productcard from '../../Product/Productcard';
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import '../Cart/Cart.css'
import { IoIosArrowDown } from "react-icons/io";


import { Type } from '../../Utility/action.type'; 
import { IoIosArrowUp } from "react-icons/io";




export const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { basket, user } = state;

 // Calculate total price of items in the basket
const total = basket.reduce((amount, item) => {
  return item.amount * item.price + amount;
}, 0);




  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: item,
    });
 
  };
  const decrement = (item) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      item: item,
    });
  };
  return (
    <Layout>
       <section className='section1'>
        <div className='div1'>
          <h2>Hello, {user && user.name}</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No items in your cart.</p>
          ) : (
            basket?.map((item) => (
              <section className='section2'>
              
                <Productcard product={item} flex={true} productDesc={true} renderAdd={false} />
                <div className='div2'>
                  <button className='button1' onClick={() => increment(item)}><IoIosArrowUp size={20}/></button>
                  <span>{item.amount}</span>
                  <button className='button2' onClick={() => decrement(item.id)}><IoIosArrowDown size={20} /></button>
                 
                </div>
                
             
              </section>
            ))
          )}
        </div>
        {basket.length !== 0 && (
          <div className='subtotal'>
            <div>
              <p>Subtotal: {basket.length} items</p>
              <CurrencyFormat amount={total}/> 
            </div>
            <span>
              
           
            </span>
            <Link to="/Payment">Continue to checkout</Link>
          </div>
        )}
      </section>
  </Layout>
  )
}

export default Cart