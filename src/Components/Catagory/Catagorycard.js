import React from 'react'
import css from '../Catagory/Catagory.css'

const Catagorycard = ({data}) => {
  return (
    <div className='catagory'>
      <a href=''>
        <span>
            <h2>{data.title}</h2>
            </span>
            <img src={data.imgLink} alt=''></img>
            <p>shop now</p>
      </a>
    </div>
  )
}

export default Catagorycard