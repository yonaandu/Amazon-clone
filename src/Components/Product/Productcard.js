import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../Utility/action.type';

function Productcard({ product }) {
  const { image, title, id, rating, price } = product;
  
  const { dispatch } = useContext(DataContext);

  const addtoCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price }
    });
  };

  return (
    <div className='Card_container'>
      <Link to={`/products/${id}`} state={{ product }}>
        <img src={image} alt={title} />
      </Link>
      
      <div>
        <h3>{title}</h3>
        <div className='Rating'> 
          <Rating value={product.rating?.rate} precision={0.1} readOnly />
          <small>{product.rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className='button' onClick={(e) => { 
          e.preventDefault();
          addtoCart();
        }}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Productcard;
