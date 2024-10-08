import React from 'react'
import {catagoryInfo} from './Catagoryinfo'
import Catagorycard from './Catagorycard'
import  '../Catagory/Catagory.css'

const Catagory = () => {
  return (
    <div>
      <section className='catgorycontainer'>
        {
            catagoryInfo.map((infos, index) => (
              <Catagorycard key={index} data={infos} />
            ))
        }
      </section>
    </div>
  )
}

export default Catagory