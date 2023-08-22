import '../slider/slider.css';
import copyMenu from '../../services/javascript-functions';
import toggle from '../../services/javascript-functions';
import menuButton from '../../services/javascript-functions';
import closeButton from '../../services/javascript-functions';
import addclass from '../../services/javascript-functions';
import swiper from '../../services/javascript-functions';
import Swiper from '../../services/javascript-functions';
import submenu from '../../services/javascript-functions';
import slider0 from '../../multimedia/slider/slider0.jpg';
import slider1 from '../../multimedia/slider/slider1.jpg';
import slider2 from '../../multimedia/slider/slider2.jpg';
import slider3 from '../../multimedia/slider/slider3.jpg';
export default function Slider(){





    return (
        <div class="slider">
                <div class="container">
                    <div class="wrapper">
                        <div class="myslider swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="item">
                                        <div class="image object-cover">
                                            <img src={slider0} alt=""></img>
                                        </div>
                                        <div class="text-content flexcol">
                                            <h4>Shoes Fashion</h4>
                                            <h2><span>Come and Get it!</span><br><span>Brand New Shoes</span></br></h2>
                                            <a href="#" class="primary-button">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="item">
                                        <div class="image object-cover">
                                            <img src={slider1} alt=""></img>
                                        </div>
                                        <div class="text-content flexcol">
                                            <h4>Quick Fashion</h4>
                                            <h2><span>Fit Your Wardobe</span><br><span>With Luxury Items</span></br></h2>
                                            <a href="#" class="primary-button">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="item">
                                        <div class="image object-cover">
                                            <img src={slider2} alt=""></img>
                                        </div>
                                        <div class="text-content flexcol">
                                            <h4>Quick Offer</h4>
                                            <h2><span>Wooden Minimal Sofa</span><br><span>Extra 50% Off</span></br></h2>
                                            <a href="#" class="primary-button">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="item">
                                        <div class="image object-cover">
                                            <img src={slider3} alt=""></img>
                                        </div>
                                        <div class="text-content flexcol">
                                            <h4>Best Deals</h4>
                                            <h2><span>Home Workout Accesories</span><br><span>Push The Limits</span></br>
                                            </h2>
                                            <a href="#" class="primary-button">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}