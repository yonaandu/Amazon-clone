// import React, { useEffect, useState } from 'react'
// import { getProducts } from '../services/fakeStoreService';
// import axios from 'axios'
// import Productcard from './Productcard'

// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import  {getProducts}  from '../../../src/services/fakeStoreService';
import ProductCard from './Productcard';
import css from './Product.css'
const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className='products_container'>
        {products.map(singleProduct => (
          <ProductCard product={singleProduct} key={singleProduct.id} />
        ))}
     </section>
  );
};

export default Product;

// function Product(){
//      const [products , setProducts] = useState()
//      const [loading , setLoading] = useState(true)

//     useEffect(() => {axios.get('https://fakestoreapi.com/products')
//     .then((res)=>{ 
//       setProducts(res.data)
//     }).catch((err)=>{
//         console.log(err)
//     })
//     }, [])

//   return (
//     <section>
  
//         {
//             products.map((singleProduct)=>{
//               return <Productcard product={singleProduct} key={singleProduct.id}/>
// })
//         }
//     </section>
//   )
// }

// export default Product
