
import React , {useContext} from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';

import { Link } from'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../Utility/action.type';


function Productcard ({product}) {
  const { image, title, id, rating, price, description } = product;
  
  const { state, dispatch } = useContext(DataContext);

console.log(state);

  const addtoCart=()=>{
    dispatch({type:Type.ADD_TO_BASKET, item:{image, title, id, rating, price, description}})
   
 
  }

  return (
    <div className='Card_container'>

      <Link to={`/products/${id}`}><img src={image} alt=''></img></Link>
      
      <div>
        <h3>{title}</h3>
        rend
      <div className='Rating'> 
      <Rating value={rating } precision={0.1}/>
      
      {/*count*/}
      <small>{rating?.count}</small>
      </div>
      <div>
      <CurrencyFormat amount={price}/>    
         </div>
      <button className='button'  onClick={addtoCart}>add to cart</button>
      </div>
    </div>
  )
}

export default Productcard;