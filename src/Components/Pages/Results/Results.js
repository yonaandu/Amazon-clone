import React from 'react'
import '../Results/Results.css'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../../API/EndPoints'

import { useEffect, useState } from'react'
import Productcard from '../../Product/Productcard'

function Results () {
  const [results, setResults] = useState([]);
  const { catagoryName } = useParams()
  useEffect(() => {
 axios.get(`${productUrl}/products/category/${catagoryName}`)
 .then((res) => { 
  setResults(res.data)
 
  }).catch((err) => {console.log(err);})
},)


  return (
     
    <Layout>
    <section>
      <h1 style={{padding: "30px"}}>Results</h1>
      <p style={{padding: "30px"}}>Catagory/{catagoryName}</p>
      <hr />
      <div className='product_container'>
        {results.map((product) => (
          <Productcard key={product.id}  product={product} />))}
          </div>
       
      
      
      
      </section>
  </Layout>
  )
}

export default Results
