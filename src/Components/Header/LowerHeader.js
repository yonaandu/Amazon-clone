import React from 'react'
import { MdOutlineMenu } from "react-icons/md";

const LowerHeader = () => {
  return (
    <div className='lowerHeaderContainer'>
    <div className='lowerHeaderInner'>
      <a href='/' className='navItem'>All</a>
      <a href='/deals' className='navItem'>Today's Deals</a>
      <a href='/customer-service' className='navItem'>Customer Service</a>
      <a href='/registry' className='navItem'>Registry</a>
      <a href='/gift-cards' className='navItem'>Gift Cards</a>
      <a href='/sell' className='navItem'>Sell</a>
    </div>
  </div>
  )
}

export default LowerHeader
