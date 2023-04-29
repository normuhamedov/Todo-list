import React, { useContext, useState } from 'react';
import { MyContext } from './CounterExample';
import { CiDark } from 'react-icons/ci'
import { MdOutlineLightMode } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FiDelete } from 'react-icons/fi'
import './Figm.scss'
import './../App.css';
import logo from "./img/logo.png"
const Header = () => {
  
  const {counter, setCounter} = useContext(MyContext);
  
  const [counterr, setCounterr] = useState(false);
  const handleButtonClickr= () => {
    setCounterr(!counterr);
  };
  const handleButtonClick = () => {
    setCounter(!counter);

  };
  return (
    <>
    <header >
    <button className='btn bg-danger dark-lighte-mode' onClick={handleButtonClick}>{counter ?  <MdOutlineLightMode /> : <CiDark />}</button>
        <div className="header_wrap container">
          <div className="header_left">
            <img src={logo} alt="" />
          </div>
          <ul className="header_right nav">
           <li className='nav_li'>Menu</li>
           <li className='nav_li'>News</li>
           <li className='nav_li'>About Us</li>
           <li className='nav_li'>Contact Us</li>
           <li className='nav_li'>
           <button className='btn btn-outline-light'>Login</button>
           </li>
          </ul>
          <div className='dNone'>
            <button className='btn-onclick' onClick={handleButtonClickr}>{counterr ?  <FiDelete /> : <RxHamburgerMenu/>}</button>
            <div className={`burger_open  ${counterr ? 'burger_close' : ''}`}>
            <ul className="header_open pt-5">
           <li className='nav_li_open btn btn-outline-light'>Menu</li>
           <li className='nav_li_open btn btn-outline-light'>News</li>
           <li className='nav_li_open btn btn-outline-light'>About Us</li>
           <li className='nav_li_open btn btn-outline-light'>Contact Us</li>
           <li className='nav_li_open mt-5'>
           <button className='btn btn-outline-light'>Login</button>
           </li>
          </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header