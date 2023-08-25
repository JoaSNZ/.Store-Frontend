import '../slider/slider.css';
import copyMenu from '../../services/javascript-functions';
import toggle from '../../services/javascript-functions';
import menuButton from '../../services/javascript-functions';
import closeButton from '../../services/javascript-functions';
import addclassName from '../../services/javascript-functions';
import swiper from '../../services/javascript-functions';
import Swiper from '../../services/javascript-functions';
import submenu from '../../services/javascript-functions';
import slider0 from '../../multimedia/slider/slider0.jpg';
import slider1 from '../../multimedia/slider/slider1.jpg';
import slider2 from '../../multimedia/slider/slider2.jpg';
import slider3 from '../../multimedia/slider/slider3.jpg';
export default function Slider(){

    return (
        <div className="slider">
                <div className="container">
                    <div className="wrapper">
                        <div className="myslider swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="item">
                                        <div className="image object-cover">
                                            <img src={slider0} alt=""></img>
                                        </div>
                                        <div className="text-content flexcol">
                                            <h4>Shoes Fashion</h4>
                                            <h2><span>Come and Get it!</span><br /><span>Brand New Shoes</span></h2>
                                            <a href="#" className="primary-button">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="item">
                                        <div className="image object-cover">
                                            <img src={slider1} alt=""></img>
                                        </div>
                                        <div className="text-content flexcol">
                                            <h4>Quick Fashion</h4>
                                            <h2><span>Fit Your Wardobe</span><br /><span>With Luxury Items</span></h2>
                                            <a href="#" className="primary-button">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="item">
                                        <div className="image object-cover">
                                            <img src={slider2} alt=""></img>
                                        </div>
                                        <div className="text-content flexcol">
                                            <h4>Quick Offer</h4>
                                            <h2><span>Wooden Minimal Sofa</span><br /><span>Extra 50% Off</span></h2>
                                            <a href="#" className="primary-button">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="item">
                                        <div className="image object-cover">
                                            <img src={slider3} alt=""></img>
                                        </div>
                                        <div className="text-content flexcol">
                                            <h4>Best Deals</h4>
                                            <h2><span>Home Workout Accesories</span><br /><span>Push The Limits</span></h2>
                                            <a href="#" className="primary-button">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}