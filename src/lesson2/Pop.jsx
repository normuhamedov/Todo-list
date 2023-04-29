import React, { useContext } from 'react';
import { MyContext } from './CounterExample';
import "./Figm.scss";
import shash from "./img/shashlik.png"
import star from "./img/star.png"
const Pop = () => {
  const {counter} = useContext(MyContext);
  return (
    <>
    <section className={`pop_sec pb-5 ${counter ? 'black' : ''}`}>
        <div className="pop_wrap container">
          <h3 className='text-danger mb-5'>Popular Dishes</h3>
          <ul className='d-flex pop_list'>
            <li className={`pop_item pb-5 ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className={`pop_item pb-5 ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className={`pop_item pb-5 ${counter ? 'black' : ''}`}>
              <img src={shash} alt="" />
              <h5 className='text-dark'>Barbecue Shish kebab Shashlik Skewer</h5>
              <img src={star} alt="" />
              <h4 className='text-danger'>$12.00</h4>
            </li>
            <li className={`pop_item pb-5 ${counter ? 'black' : ''}`}>
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

export default Pop