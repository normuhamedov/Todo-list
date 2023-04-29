
import React, { useContext } from 'react';
import { MyContext } from './CounterExample';
import './Figm.scss'
import hero_img from "./img/hero_img.png"
const Hero = () => {
  const {counter} = useContext(MyContext);
  


  return (
    <>
    <section className={`hero_sec ${counter ? 'black' : ''}`}>
        <div className="hero_wrap container">
          <div className="hero_left">
            <h5 className='hero_h5'>Chase the new Flavour</h5>
            <h1 className='hero_head'>The key to Fine dining</h1>
            <p className='hero_text'>Sit tellus lobortis  senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <button className='btn btn-outline-light'>Explore Menu</button>
          </div>
          <div className="hero_right ">
            <img src={hero_img} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero