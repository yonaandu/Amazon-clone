import React from 'react'
import  '../Catagory/Catagory.css'
import { Link } from'react-router-dom'


const Catagorycard = ({data}) => {
  return (
    <div className='catagory'>
    <Link to={`/catagory/${data.name}`}>
        <span>
            <h2>{data.title}</h2>
            </span>
            <img src={data.imgLink} alt=''></img>
            <p>shop now</p>
      
      </Link>
    </div>
  )
}

export default Catagorycard