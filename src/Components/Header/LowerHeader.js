import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { Link } from'react-router-dom';

const LowerHeader = () => {
  return (
    <Link className='lowerHeaderContainer'>
    <Link className='lowerHeaderInner'>
      <a href='/' className='navItem'>All</a>
      <a href='/deals' className='navItem'>Today's Deals</a>
      <a href='/customer-service' className='navItem'>Customer Service</a>
      <a href='/registry' className='navItem'>Registry</a>
      <a href='/gift-cards' className='navItem'>Gift Cards</a>
      <a href='/sell' className='navItem'>Sell</a>
    </Link>
  </Link>
  )
}

export default LowerHeader
