import React, { useEffect , useState } from 'react'
import  '../ProductDetail/ProductDetail.css'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../../API/EndPoints'
import Productcard from '../../Product/Productcard'


function ProductDetail ()  {
  const { productId } = useParams()
  const [product, setProduct] = useState([])
  useEffect(() =>{
   axios.get(`${productUrl}/products/${productId}`)
   .then((res) => {setProduct(res.data);}).catch((err) => {console.log(err);})

   
  }, [] )

  
    

  
 
  return (
    
      <Layout>
   <Productcard  product={product} />
  </Layout>
    
  )
}

export default ProductDetail
