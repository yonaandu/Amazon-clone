import React, { useEffect, useState,useContext } from 'react';
import '../ProductDetail/ProductDetail.css';
import Layout from '../../Layout/Layout';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../DataProvider/DataProvider';
import axios from 'axios';
import { productUrl } from '../../../API/EndPoints';
import { Type } from '../../Utility/action.type';
import Productcard from '../../Product/Productcard';
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat';
import Rating from '@mui/material/Rating';
import { Loader } from '../../Loader/Loader';

function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  const { image, title, id, rating, price } = product;

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      }).catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);
  const { dispatch } = useContext(DataContext);
  const addtoCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price }
    });
  };

  return (
    <Layout>
      {isLoading ?(<Loader/>):(<div className='Card_container'>
      <Link to={`/products/${id}`} state={{ product }}>
        <img src={image} alt={title} />
      </Link>
      
      <div>
        <h3>{title}</h3>
        <div className='product-detail-container'> 
        <p className="product-detail-description">{product.description}</p>
          <Rating value={product.rating?.rate} precision={0.1}  />
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
    </div>)}
        
      {/* {isLoading ? (
        <Loader />
      ) : (
        <div className="product-detail-container">
          <img src={product.image} alt={product.title} className="product-detail-image" />
          <div className="product-detail-content">
            <h1 className="product-detail-title">{product.title}</h1>
            <div className="product-detail-rating">
              <Rating value={product.rating?.rate} precision={0.1} readOnly />
              <small>{product.rating?.count} reviews</small>
            </div>
            <p className="product-detail-description">{product.description}</p>
            <div className="product-detail-price">
              <CurrencyFormat amount={product.price} />
            </div>
            <button className='button' onClick={(e) => { 
          e.preventDefault();
          addtoCart();
        }}>
          Add to cart
        </button>
          </div>
        </div>
      )} */}
    </Layout>
  );
}

export default ProductDetail;
