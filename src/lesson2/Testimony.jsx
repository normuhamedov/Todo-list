import React, { useContext } from 'react';
import { MyContext } from './CounterExample';
import vektor from './img/vector.png'
import vektor1 from './img/vector1.png'
import card_img from './img/card_img.png'
import "./Figm.scss";
const Testimony = () => {
    const {counter} = useContext(MyContext);
    return (
        <>
        <section className={`test_sec ${counter ? 'black' : ''}`}>
        <div className='Testimony container'>
        <div className='Testimony2 pt-5'>
        <h5>Testimony</h5>
        <img src={vektor} alt="" />
        <h2>Happy customers</h2>
        </div>
        
        <div className="row gap-5 align-items-center justify-content-center mt-5 media_tes">
        <div className={`card col-3 card_test ${counter ? 'black' : ''}`}>
        <h3>Maria</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
        </div>
        <div className={`card col-3 width_50 card_test ${counter ? 'black' : ''}`}>
        <h3>Maria</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
        </div>
        <div className={`card col-3 width_50 card_test ${counter ? 'black' : ''}`}>
        <h3>Maria</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
        </div>
        </div>
        </div>
        </section>



        <section className={` pb-5 ${counter ? 'black' : ''}`}>
        <div className='container'>
        <div className='news container align-items-center justify-content-center'>
        <div className='Testimony2 pt-5 mb-5'>
        <h5>News</h5>
        <img src={vektor1} alt="" />
        <h2 className='text-danger'>Gerícht updates</h2>
        </div>
        </div>
        <div className="row align-content-center justify-content-center gap-5 media_tes">
        <div className={`card col-3 card_test ${counter ? 'black' : ''}`}>
        <img className='card-img-top' src={card_img} alt="" />
        <h3>tips for prepping and caring for your grill</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
        <h5 className='text-danger'>Read more</h5>
        </div>
        <div className={`card col-3 card_test ${counter ? 'black' : ''}`}>
        <img className='card-img-top' src={card_img} alt="" />
        <h3>tips for prepping and caring for your grill</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
        <h5 className='text-danger'>Read more</h5>
        </div>
        <div className={`card col-3 card_test ${counter ? 'black' : ''}`}>
        <img className='card-img-top' src={card_img} alt="" />
        <h3>tips for prepping and caring for your grill</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.</p>
        <h5 className='text-danger'>Read more</h5>
        </div>
        </div> 
        <div className='btn_wrapp'>
        <button className='btn btn-outline-danger'>Viev more</button>
        </div>
        </div>     
        </section>
        </>
        )
    }
    
    export default Testimony