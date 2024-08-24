import React from 'react'
import Layout from '../../Layout/Layout'
import Caraousel from '../../Caraousel/Caraousel'
import Catagory from '../../Catagory/Catagory'
import Product from '../../Product/Product'


function Landing ()  {
  return (
    <div>
        <Layout>
      <Caraousel/>
     <Catagory/>
     <Product/>
     </Layout>
    </div>
  )
}

export default Landing;