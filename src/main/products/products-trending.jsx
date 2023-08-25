import '../products/products.css';
import apparel1 from '../../multimedia/products/apparel1.jpg';
import apparel2 from '../../multimedia/products/apparel2.jpg';
import apparel3 from '../../multimedia/products/apparel3.jpg';
import apparel4 from '../../multimedia/products/apparel4.jpg';
import home1 from '../../multimedia/products/home1.jpg';
import home2 from '../../multimedia/products/home4.jpg';
import home3 from '../../multimedia/products/home3.jpg';
import electronic3 from '../../multimedia/products/electronic3.jpg';
import shoe1 from '../../multimedia/products/shoe1.jpg';
export default function Products_trending() {
    


    return(            
    <div className="trending">
    <div className="container">
        <div className="wrapper">
            <div className="sectop flexitem">
                <h2><span className="circle"></span><span>Trending Products</span></h2>
            </div>
            <div className="column">
                <div className="flexwrap">
                    <div className="row products big">
                        <div className="item">
                            <div className="offer">
                                <p>Offer ends at</p>
                                <ul className="flexcenter">
                                    <li>1</li>
                                    <li>15</li>
                                    <li>27</li>
                                    <li>60</li>
                                </ul>
                            </div>
                            <div className="media">
                                <div className="image">
                                    <a href="#">
                                        <img src={apparel4} alt=""/>
                                    </a>
                                </div>
                                <div className="hoverable">
                                    <ul>
                                        <li className="active"><a href="#"><i className="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i className="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i className="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div className="discount circle flexcenter"><span>31%</span></div>
                            </div>
                            <div className="content">
                                <div className="rating">
                                    <div className="stars"></div>
                                    <span className="mini-text">(2,548)</span>
                                </div>
                                <h3 className="main-links"><a href="#">Happy Sailed Womens Summer Boho
                                        Floral</a></h3>
                                <div className="price">
                                    <span className="current">$129.99</span>
                                    <span className="normal mini-text">$189.99</span>
                                </div>
                                <div className="stock mini-text">
                                    <div className="qty">
                                        <span>Stock: <span className="strong qty-available">107</span></span>
                                        <span>Sold: <span className="strong qty-sold">3,459</span></span>
                                    </div>
                                    <div className="bar">
                                        <div className="available"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row products mini">
                        <div className="item">
                            <div className="media">
                                <div className="thumbnail object-cover">
                                    <a href="#">
                                        <img src={apparel3} alt=""/>
                                    </a>
                                </div>
                                <div className="hoverable">
                                    <ul>
                                        <li className="active"><a href="#"><i className="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i className="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i className="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div className="discount circle flexcenter"><span>32%</span></div>
                            </div>
                            <div className="content">
                                <h3 className="main-links"><a href="#">Black Women's Coat Dress</a></h3>
                                <div className="rating">
                                    <div className="stars"></div>
                                    <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                    <span className="current">$129.99</span>
                                    <span className="normal mini-text">$189.99</span>
                                </div>
                                <div className="mini-text">
                                    <p>2975 Sold</p>
                                    <p>Free Shipping</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="media">
                                <div className="thumbnail object-cover">
                                    <a href="#">
                                        <img src={apparel1} alt=""/>
                                    </a>
                                </div>
                                <div className="hoverable">
                                    <ul>
                                        <li className="active"><a href="#"><i className="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i className="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i className="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div className="discount circle flexcenter"><span>25%</span></div>
                            </div>
                            <div className="content">
                                <h3 className="main-links"><a href="#">Under Armour Men's Tech</a></h3>
                                <div className="rating">
                                    <div className="stars"></div>
                                    <span className="mini-text">(1,955)</span>
                                </div>
                                <div className="price">
                                    <span className="current">$56.50</span>
                                    <span className="normal mini-text">$75.50</span>
                                </div>
                                <div className="mini-text">
                                    <p>2584 Sold</p>
                                    <p>Free Shipping</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="media">
                                <div className="thumbnail object-cover">
                                    <a href="#">
                                        <img src={home1} alt=""/>
                                    </a>
                                </div>
                                <div className="hoverable">
                                    <ul>
                                        <li className="active"><a href="#"><i className="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i className="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i className="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div className="discount circle flexcenter"><span>37%</span></div>
                            </div>
                            <div className="content">
                                <h3 className="main-links"><a href="#">Vonada Velvet Sofa Couch</a></h3>
                                <div className="rating">
                                    <div className="stars"></div>
                                    <span className="mini-text">(1,559)</span>
                                </div>
                                <div className="price">
                                    <span className="current">$469.99</span>
                                    <span className="normal mini-text">$755.99</span>
                                </div>
                                <div className="mini-text">
                                    <p>2151 Sold</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="media">
                                <div className="thumbnail object-cover">
                                    <a href="#">
                                        <img src={electronic3} alt=""/>
                                    </a>
                                </div>
                                <div className="hoverable">
                                    <ul>
                                        <li className="active"><a href="#"><i className="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i className="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i className="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div className="discount circle flexcenter"><span>20%</span></div>
                            </div>
                            <div className="content">
                                <h3 className="main-links"><a href="#">Wireless Headphones</a></h3>
                                <div className="rating">
                                    <div className="stars"></div>
                                    <span className="mini-text">(1,411)</span>
                                </div>
                                <div className="price">
                                    <span className="current">$99.98</span>
                                    <span className="normal mini-text">$125.98</span>
                                </div>
                                <div className="mini-text">
                                    <p>1843 Sold</p>
                                    <p>Free Shipping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row products mini">
                        <div className="item">
                            <div className="media">
                                <div className="thumbnail object-cover">
                                    <a href="#">
                                        <img src={shoe1} alt=""/>
                                    </a>
                                </div>
                                <div className="hoverable">
                                    <ul>
                                        <li className="active"><a href="#"><i className="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i className="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i className="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div className="discount circle flexcenter"><span>32%</span></div>
                            </div>
                            <div className="content">
                                <h3 className="main-links"><a href="#">Men Slip On Shoes Casual with Arch
                                        Support Insoles</a></h3>
                                <div className="rating">
                                    <div className="stars"></div>
                                    <span className="mini-text">(2,548)</span>
                                </div>
                                <div className="price">
                                    <span className="current">$129.99</span>
                                    <span className="normal mini-text">$189.99</span>
                                </div>
                                <div className="mini-text">
                                    <p>2975 Sold</p>
                                    <p>Free Shipping</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="media">
                                <div className="thumbnail object-cover">
                                    <a href="#">
                                        <img src={apparel2} alt=""/>
                                    </a>
                                </div>
                                <div className="hoverable">
                                    <ul>
                                        <li className="active"><a href="#"><i className="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i className="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i className="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div className="discount circle flexcenter"><span>17%</span></div>
                            </div>
                            <div className="content">
                                <h3 className="main-links"><a href="#">Women's Lightweight Knit Hoodie Sweater
                                        Pullover</a></h3>
                                <div className="rating">
                                    <div className="stars"></div>
                                    <span className="mini-text">(994)</span>
                                </div>
                                <div className="price">
                                    <span className="current">$37.50</span>
                                    <span className="normal mini-text">$45.50</span>
                                </div>
                                <div className="mini-text">
                                    <p>1257 Sold</p>
                                    <p>Free Shipping</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="media">
                                <div className="thumbnail object-cover">
                                    <a href="#">
                                        <img src={home2} alt=""/>
                                    </a>
                                </div>
                                <div className="hoverable">
                                    <ul>
                                        <li className="active"><a href="#"><i className="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i className="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i className="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div className="discount circle flexcenter"><span>44%</span></div>
                            </div>
                            <div className="content">
                                <h3 className="main-links"><a href="#">Dimmable Ceiling Light Modern</a></h3>
                                <div className="rating">
                                    <div className="stars"></div>
                                    <span className="mini-text">(543)</span>
                                </div>
                                <div className="price">
                                    <span className="current">$279.99</span>
                                    <span className="normal mini-text">$499.99</span>
                                </div>
                                <div className="mini-text">
                                    <p>995 Sold</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="media">
                                <div className="thumbnail object-cover">
                                    <a href="#">
                                        <img src={home3} alt=""/>
                                    </a>
                                </div>
                                <div className="hoverable">
                                    <ul>
                                        <li className="active"><a href="#"><i className="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i className="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i className="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div className="discount circle flexcenter"><span>18%</span></div>
                            </div>
                            <div className="content">
                                <h3 className="main-links"><a href="#">Modern Storage Cabinet</a></h3>
                                <div className="rating">
                                    <div className="stars"></div>
                                    <span className="mini-text">(335)</span>
                                </div>
                                <div className="price">
                                    <span className="current">$129.99</span>
                                    <span className="normal mini-text">$189.99</span>
                                </div>
                                <div className="mini-text">
                                    <p>758 Sold</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)}
    