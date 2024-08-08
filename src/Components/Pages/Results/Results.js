import React from 'react'
import '../Results/Results.css'
import Layout from '../../Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../../API/EndPoints'
import { Loader } from '../../Loader/Loader'

import { useEffect, useState } from 'react'
import Productcard from '../../Product/Productcard'

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { catagoryName } = useParams()

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/category/${catagoryName}`)
      .then((res) => { 
        setIsLoading(false);
        setResults(res.data)
      })
      .catch((err) => { 
        console.log(err);
        setIsLoading(false);
      })
  }, [catagoryName]) // Add dependency to re-run the effect when catagoryName changes

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Catagory/{catagoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className='product_container'>
            {results && results.map((product) => (
              <Productcard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Results