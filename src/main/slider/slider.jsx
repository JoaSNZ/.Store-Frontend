import '../slider/slider.css';
import slider0 from '../../multimedia/slider/slider0.jpg';
import slider1 from '../../multimedia/slider/slider1.jpg';
import slider2 from '../../multimedia/slider/slider2.jpg';
import slider3 from '../../multimedia/slider/slider3.jpg';
import { Link } from 'react-router-dom';
export default function Slider() {
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
                                            <Link to='/' className="primary-button">Shop Now</Link>
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
                                            <Link to='/' className="primary-button">Shop Now</Link>
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
                                            <Link to='/' className="primary-button">Shop Now</Link>
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
                                            <Link to='/' className="primary-button">Shop Now</Link>
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