import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../Utility/Firebase'; // Import your Firebase auth
import { Type } from '../Utility/action.type'; // Import action types

const Header = () => {
  const { state, dispatch } = useContext(DataContext);
  const { basket, user } = state; // Access user from state

  const total = basket.reduce((amount, item) => {
    return amount + item.amount;
  }, 0);

  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Sign out from Firebase
      dispatch({ type: Type.REMOVE_USER }); // Dispatch action to remove user from context
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <section className='Fixed'>
      <div className='headeroutercontainer'>
        <div className='headerinnercontainer'>
          <div  href='/' className='headerleftcontainer'>
            <div className='headerleftimage'>
              <a href='/'><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='Amazon logo'/></a>
            </div>
            <Link className='locationlogo'><CiLocationOn /></Link>
            <Link className='headerleft'>
              <p>Delivered to</p>
              <span>Toronto</span>
            </Link>
          </div>

          <Link className='headermiddlecontainer'>
            <Link className='headerleftmiddle'>
              <select name='' id=''><option value="">All</option ></select>
            </Link>
            <input type='text' name='search' placeholder='Search Products'></input>
            <Link className='headerrightmiddle'><FaSearch /></Link>
          </Link>

          <Link className='headerrightcontainer'>
            <Link className='headerleftright'>
              <a href='/' className='leftrighta'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/2880px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt=''></img>
              </a>
              <select name='' id=''>
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="/" className='headermiddleright'>
              {user ? (
                <div>
                  <p>Hello<br/>{user}</p>
                  <button onClick={handleSignOut}>Sign Out</button> {/* Sign Out Button */}
                </div>
              ) : (
                <Link to='/auth'>
                  <p>Sign In</p>
                  <span>Account & Lists</span>
                </Link>
              )}
            </Link>
            <Link className='headerrightright'>
              <a href='/orders'>
                <p>Returns</p>
                <span>& Orders</span>
              </a>
              <Link to='/cart' className='rightrightcart'>
                <IoCartOutline size={35} />
                <span>{total}</span>
              </Link>
            </Link>
          </Link>
        </div>
        <LowerHeader />
      </div>
    </section>
  );
}

export default Header;
