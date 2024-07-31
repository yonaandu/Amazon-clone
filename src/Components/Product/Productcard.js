
import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import Product from './Product';

const Productcard = ({product}) => {
  const{ image, title, id , rating, price}= Product;
  return (
    <div className='Card_container'>
      <a href=''><img src={product.image} alt=''></img></a>
      <div>
        <h3>{product.title}</h3>
      <div className='Rating'> {/*rating*/}
      <Rating value={rating } precision={0.1}/>
      
      {/*count*/}
      <small>{rating}</small>
      </div>
      <div>
      <CurrencyFormat amount={product.price}/>    
         </div>
      <button className='button' >add to cart</button>
      </div>
    </div>
  )
}

export default Productcard
