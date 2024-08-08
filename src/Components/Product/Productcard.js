
import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import Product from './Product';
import { Link } from'react-router-dom';



function Productcard ({product}) {
  const { image, title, id, rating, price, description } = Product;
  console.log(product);
  return (
    <div className='Card_container'>

      <Link to={`/products/${product.id}`}><img src={product.image} alt=''></img></Link>
      
      <div>
        <h3>{product.title}</h3>
        rend
      <div className='Rating'> 
      <Rating value={product.rating } precision={0.1}/>
      
      {/*count*/}
      <small>{product.rating.count}</small>
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