import '../products/products.css';
import apparel1 from '../../multimedia/products/apparel1.jpg';
import apparel2 from '../../multimedia/products/apparel2.jpg';
import apparel3 from '../../multimedia/products/apparel3.jpg';
import apparel4 from '../../multimedia/products/apparel4.jpg';
import shoe1 from '../../multimedia/products/shoe1.jpg';
import shoe2 from '../../multimedia/products/shoe2.jpg';
import shoe3 from '../../multimedia/products/shoe3.jpg';
import shoe4 from '../../multimedia/products/shoe4.jpg';
import { Link } from 'react-router-dom';
import { data } from '../../data.js';


export default function Products_featured() {



    return (
        <div className="features">
                <div className="container">
                    <div className="wrapper">
                        <div className="column">
                            <div className="sectop flexitem">
                                <h2><span className="circle"></span><span>Featured Products</span></h2>
                                <div className="second-links">
                                    <Link to='/' className="view-all">View all<i className="ri-arrow-right-line"></i></Link>
                                </div>
                            </div>
                            <div className="products main flexwrap">
                                <div className="item" >
                                    <div className="media">
                                        <div className="thumbnail object-cover">
                                            <Link to='/'>
                                                <img src={apparel1} alt=""></img>
                                            </Link>
                                        </div>
                                        <div className="hoverable">
                                            <ul>
                                                <li className="active"><Link to='/'><i className="ri-heart-line"></i></Link>
                                                </li>
                                                <li><Link to='/'><i className="ri-eye-line"></i></Link></li>
                                                <li><Link to='/'><i className="ri-shuffle-line"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="discount circle flexcenter"><span>17%</span></div>
                                    </div>
                                    <div className="content">
                                        <div className="rating">
                                            <div className="stars"></div>
                                            <span className="mini-text">(1,955)</span>
                                        </div>
                                        <h3 className="main-links"><Link to='/'>Under Armour Men's Tech</Link></h3>
                                        <div className="price">
                                            <span className="current">$56.50</span>
                                            <span className="normal mini-text">$75.50</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item" >
                                    <div className="media">
                                        <div className="thumbnail object-cover">
                                            <Link to='/'>
                                                <img src={apparel2} alt=""></img>
                                            </Link>
                                        </div>
                                        <div className="hoverable">
                                            <ul>
                                                <li className="active"><Link to='/'><i className="ri-heart-line"></i></Link>
                                                </li>
                                                <li><Link to='/'><i className="ri-eye-line"></i></Link></li>
                                                <li><Link to='/'><i className="ri-shuffle-line"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="discount circle flexcenter"><span>17%</span></div>
                                    </div>
                                    <div className="content">
                                        <div className="rating">
                                            <div className="stars"></div>
                                            <span className="mini-text">(994)</span>
                                        </div>
                                        <h3 className="main-links"><Link to='/'>Women's Lightweight Knit Hoodie Sweater
                                        Pullover</Link></h3>
                                        <div className="price">
                                            <span className="current">$37.50</span>
                                            <span className="normal mini-text">$45.50</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item" >
                                    <div className="media">
                                        <div className="thumbnail object-cover">
                                            <Link to='/'>
                                                <img src={apparel3} alt=""></img>
                                            </Link>
                                        </div>
                                        <div className="hoverable">
                                            <ul>
                                                <li className="active"><Link to='/'><i className="ri-heart-line"></i></Link>
                                                </li>
                                                <li><Link to='/'><i className="ri-eye-line"></i></Link></li>
                                                <li><Link to='/'><i className="ri-shuffle-line"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="discount circle flexcenter"><span>32%</span></div>
                                    </div>
                                    <div className="content">
                                        <div className="rating">
                                            <div className="stars"></div>
                                            <span className="mini-text">(2,548)</span>
                                        </div>
                                        <h3 className="main-links"><Link to='/'>Black Women's Coat Dress</Link></h3>
                                        <div className="price">
                                            <span className="current">$129.99</span>
                                            <span className="normal mini-text">$189.99</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item"  >
                                    <div className="media">
                                        <div className="thumbnail object-cover">
                                            <Link to='/'>
                                                <img src={apparel4} alt=""></img>
                                            </Link>
                                        </div>
                                        <div className="hoverable">
                                            <ul>
                                                <li className="active"><Link to='/'><i className="ri-heart-line"></i></Link>
                                                </li>
                                                <li><Link to='/'><i className="ri-eye-line"></i></Link></li>
                                                <li><Link to='/'><i className="ri-shuffle-line"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="discount circle flexcenter"><span>31%</span></div>
                                    </div>
                                    <div className="content">
                                        <div className="rating">
                                            <div className="stars"></div>
                                            <span className="mini-text">(10)</span>
                                        </div>
                                        <h3 className="main-links"><Link to='/'>Happy Sailed Womens Summer Boho Floral</Link>
                                        </h3>
                                        <div className="price">
                                            <span className="current">$129.99</span>
                                            <span className="normal mini-text">$189.99</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item" >
                                    <div className="media">
                                        <div className="thumbnail object-cover">
                                            <Link to='/'>
                                                <img src={shoe1} alt=""></img>
                                            </Link>
                                        </div>
                                        <div className="hoverable">
                                            <ul>
                                                <li className="active"><Link to='/'><i className="ri-heart-line"></i></Link>
                                                </li>
                                                <li><Link to='/'><i className="ri-eye-line"></i></Link></li>
                                                <li><Link to='/'><i className="ri-shuffle-line"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="discount circle flexcenter"><span>32%</span></div>
                                    </div>
                                    <div className="content">
                                        <div className="rating">
                                            <div className="stars"></div>
                                            <span className="mini-text">(2,548)</span>
                                        </div>
                                        <h3 className="main-links"><Link to='/'>Men Slip On Shoes Casual with Arch Support
                                        Insoles</Link></h3>
                                        <div className="price">
                                            <span className="current">$129.99</span>
                                            <span className="normal mini-text">$189.99</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item" >
                                    <div className="media">
                                        <div className="thumbnail object-cover">
                                            <Link to='/'>
                                                <img src={shoe2} alt=""></img>
                                            </Link>
                                        </div>
                                        <div className="hoverable">
                                            <ul>
                                                <li className="active"><Link to='/'><i className="ri-heart-line"></i></Link>
                                                </li>
                                                <li><Link to='/'><i className="ri-eye-line"></i></Link></li>
                                                <li><Link to='/'><i className="ri-shuffle-line"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="discount circle flexcenter"><span>30%</span></div>
                                    </div>
                                    <div className="content">
                                        <div className="rating">
                                            <div className="stars"></div>
                                            <span className="mini-text">(1,237)</span>
                                        </div>
                                        <h3 className="main-links"><Link to='/'>Skechers Women's Go Joy Walking Shoe
                                        Sneaker</Link></h3>
                                        <div className="price">
                                            <span className="current">$45.95</span>
                                            <span className="normal mini-text">$64.95</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="media">
                                        <div className="thumbnail object-cover">
                                            <Link to='/'>
                                                <img src={shoe3} alt=""></img>
                                            </Link>
                                        </div>
                                        <div className="hoverable">
                                            <ul>
                                                <li className="active"><Link to='/'><i className="ri-heart-line"></i></Link>
                                                </li>
                                                <li><Link to='/'><i className="ri-eye-line"></i></Link></li>
                                                <li><Link to='/'><i className="ri-shuffle-line"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="discount circle flexcenter"><span>25%</span></div>
                                    </div>
                                    <div className="content">
                                        <div className="rating">
                                            <div className="stars"></div>
                                            <span className="mini-text">(106)</span>
                                        </div>
                                        <h3 className="main-links"><Link to='/'>Walking Shoe Sneaker Womens</Link></h3>
                                        <div className="price">
                                            <span className="current">$139.99</span>
                                            <span className="normal mini-text">$189.98</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="media">
                                        <div className="thumbnail object-cover">
                                            <Link to='/'>
                                                <img src={shoe4} alt=""></img>
                                            </Link>
                                        </div>
                                        <div className="hoverable">
                                            <ul>
                                                <li className="active"><Link to='/'><i className="ri-heart-line"></i></Link>
                                                </li>
                                                <li><Link to='/'><i className="ri-eye-line"></i></Link></li>
                                                <li><Link to='/'><i className="ri-shuffle-line"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="discount circle flexcenter"><span>35%</span></div>
                                    </div>
                                    <div className="content">
                                        <div className="rating">
                                            <div className="stars"></div>
                                            <span className="mini-text">(1,955)</span>
                                        </div>
                                        <h3 className="main-links"><Link to='/'>Womens Summer Tosca Shoe</Link></h3>
                                        <div className="price">
                                            <span className="current">$104.90</span>
                                            <span className="normal mini-text">$189.90</span>
                                        </div>
                                    </div>
                                </div>
                        


                    </div>
                        </div>
                    </div>
                </div>
            
        </div>
)}