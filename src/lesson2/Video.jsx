import React, { useContext } from 'react';
import { MyContext } from './CounterExample';
import "./Figm.scss";
import vektor1 from  './img/vector1.png'
const Video = () => {
  const {counter} = useContext(MyContext);
  return (
    <>
    <section className={`video_bg ${counter ? 'black' : ''}`}>
        <div>className={`bgg_insta ${counter ? 'black' : ''}`}</div>
    </section>
    <section className={`bgg_insta ${counter ? 'black' : ''}`}>
        <div className='insta container'>
            <div className='insta_left'>
            <h5>Instagram</h5>
            <img src={vektor1} alt="" />
            <h2>Photo Gallery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <button className='btn btn-outline-danger'>View more</button>
            </div>
            <div className='insta_bg'></div>
        </div>
    </section>
    </>
  )
}

export default Video