import React from 'react'
import css from '../Header/Header.css'
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className='headeroutercontainer'>

      <div className='headerinnercontainer'>

      <div className='headerleftconatainer'>

        <div className='headerleftimage'><a href='#'><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='Amazon logo'/></a>  </div>
        
        <div className='locationlogo'><CiLocationOn /></div>
        
       
        <div className='headerleft'>
            <p>Delivered to</p>
            <span>Toronto</span>
           

        </div>
        
        </div> 

        <div className='headermiddlecontainer'>

        <div className='headerleftmiddle'><select name='' id=''><option value="">All</option ></select></div>
        <input  type='' name=''  id='' placeholder='Search Products'></input>
        <div className='headerrightmiddle'><FaSearch /> </div>

        </div>

        <div className='headerrightcontainer'>

        <div className='headerleftright'>
            <a href='' className='leftrighta'>  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/2880px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt=''></img></a>
            <select name='' id=''> 
                <option value="">EN</option>
            </select>
        </div>
        <div className='headermiddleright'>
            <a href=''>
                <p>Sign In</p>
            <span>Account & Lists</span>
            </a>
        </div>
        <div className='headerrightright'>
            <a href=''>
                <p>Returns</p>
            <span>& Orders</span></a>
            <a href='' className='rightrightcart'>
            <IoCartOutline size={35} />
                <span>0</span>
            </a>
        </div>

        </div>
      </div>

    </div>
  )
}

export default Header
