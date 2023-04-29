import React, { useContext } from 'react';
import { MyContext } from './CounterExample';
import shash from "./img/shashlik.png"
import star from "./img/star.png"
import "./Figm.scss";
const Lsson2 = () => {
  const {counter} = useContext(MyContext);
  return (
    <>
    
      <section className={`pack pt-5 ${counter ? 'black' : ''}`}>
      <div className="pop_wrap container">
          <h3 className='text-danger pb-5'>Our Regular Menu Pack</h3>
          <div className='buttonss mb-5'>
            <button className='btn btn-outline-danger'>All</button>
            <button className='btn btn-outline-danger'>Shawarma</button>
            <button className='btn btn-outline-danger'>Turk Kebab</button>
            <button className='btn btn-outline-danger'>Hamburger Kebab</button>
            <button className='btn btn-outline-danger'>Doner kebab</button>
            <button className='btn btn-outline-danger'>Shish kebab</button>
            <button className='btn btn-outline-danger'>French fries Pizza</button>
            <button className='btn btn-outline-danger'>Desserts</button>
          </div>
          <ul className='d-flex media_pack'>
            <li className={`pop_item ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className={`pop_item ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className={`pop_item ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className={`pop_item ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            
          </ul>
          <ul className='item1'>
            <li className={`pop_item ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className={`pop_item ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className={`pop_item ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className={`pop_item ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            
          </ul>
          <ul className='item1'>
            <li className={`pop_item ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className={`pop_item ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className={`pop_item ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className={`pop_item ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            
          </ul>
          
        </div>
      </section>
      
    </>
  )
}

export default Lsson2