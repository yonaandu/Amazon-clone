import React, { useEffect , useState } from 'react'
import  '../ProductDetail/ProductDetail.css'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../../API/EndPoints'
import Productcard from '../../Product/Productcard'
import { Loader } from '../../Loader/Loader'


function ProductDetail ()  {
  const { productId } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [product, setProduct] = useState([])
  useEffect(() =>{
    setIsLoading(true);
   axios.get(`${productUrl}/products/${productId}`)
   .then((res) => {
    setProduct(res.data);
    setIsLoading(false);
  }).catch((err) => {
    console.log(err)
    setIsLoading(false);
    


  })

   
  },[] )

  
    

  
 
  return (
    
      <Layout>
        {isLoading? (<Loader/>): (<Productcard product={product} />)}
   
  </Layout>
    
  )
}

export default ProductDetail