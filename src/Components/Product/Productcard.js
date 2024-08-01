
import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import Product from './Product';
import { Link } from'react-router-dom';

function Productcard ({product}) {
  const{ image, title, id , rating, price}= Product;
  return (
    <div className='Card_container'>

      <Link to={`/products/${product.id}`}><img src={product.image} alt=''></img></Link>
      
      <div>
        <h3>{product.title}</h3>
      <div className='Rating'> 
      <Rating value={product.rating } precision={0.1}/>
      
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
