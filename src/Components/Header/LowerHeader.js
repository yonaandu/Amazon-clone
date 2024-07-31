import React from 'react'
import { MdOutlineMenu } from "react-icons/md";

const LowerHeader = () => {
  return (
    <div className='LowerHeadercontainer '>
      <ul>
        <li><MdOutlineMenu /><p>ALL</p></li>
        <li>Today's deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell </li>
      </ul>
    </div>
  )
}

export default LowerHeader
