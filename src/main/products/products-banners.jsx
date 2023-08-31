import '../products/products.css';
import banner1 from '../../multimedia/banner/banner1.jpg';
import banner2 from '../../multimedia/banner/banner2.jpg';
import procat1 from '../../multimedia/banner/procat1.jpg';
import procat2 from '../../multimedia/banner/procat2.jpg';
import procat3 from '../../multimedia/banner/procat3.jpg';
import {Link} from 'react-router-dom';
export default function Products_banners() {
    


    return(
        <div className="banners">
                <div className="container">
                    <div className="wrapper">
                        <div className="column">
                            <div className="banner flexwrap">
                                <div className="row">
                                    <div className="item">
                                        <div className="image">
                                            <img src={banner1} alt=""></img>
                                        </div>
                                        <div className="text-content flexcol">
                                            <h4>Brutal Sale!</h4>
                                            <h3><span>Get the deal in here</span><br />Living Room Chairh</h3>
                                            <Link to = '/'className="primary-button">Shop Now</Link>
                                        </div>
                                        <Link to = '/'className="over-link"></Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="item get-gray">
                                        <div className="image">
                                            <img src={banner2} alt=""></img>
                                        </div>
                                        <div className="text-content flexcol">
                                            <h4>Brutal Sale!</h4>
                                            <h3><span>Discount everyday</span><br/>Office Outfit</h3>
                                            <Link to = '/'className="primary-button">Shop Now</Link>
                                        </div>
                                        <Link to = '/'className="over-link"></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="product-categories flexwrap">
                                <div className="row">
                                    <div className="item">
                                        <div className="image">
                                            <img src={procat1} alt=""></img>
                                        </div>
                                        <div className="content mini-links">
                                            <h4>Beauty</h4>
                                            <ul className="flexcol">
                                                <li><Link to='/'>Makeup</Link></li>
                                                <li><Link to='/'>Skin Care</Link></li>
                                                <li><Link to='/'>Hair Care</Link></li>
                                                <li><Link to='/'>Fragances</Link></li>
                                                <li><Link to='/'>Foot & Hand Care</Link></li>
                                            </ul>
                                            <div className="second-links">
                                                <Link to = '/'className="view-all">View all<i className="ri-arrow-right-line"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="item">
                                        <div className="image">
                                            <img src={procat2} alt="" />
                                        </div>
                                        <div className="content mini-links">
                                            <h4>Gadjets</h4>
                                            <ul className="flexcol">
                                                <li><Link to='/'>Camera</Link></li>
                                                <li><Link to='/'>Cellphones</Link></li>
                                                <li><Link to='/'>Computers</Link></li>
                                                <li><Link to='/'>GPS & Navigation</Link></li>
                                                <li><Link to='/'>Headphones</Link></li>
                                            </ul>
                                            <div className="second-links">
                                                <Link to = '/'className="view-all">View all<i className="ri-arrow-right-line"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="item">
                                        <div className="image">
                                            <img src={procat3} alt=""></img>
                                        </div>
                                        <div className="content mini-links">
                                            <h4>Home Decor</h4>
                                            <ul className="flexcol">
                                                <li><Link to='/'>Kitchen</Link></li>
                                                <li><Link to='/'>Dining Room</Link></li>
                                                <li><Link to='/'>Pantry</Link></li>
                                                <li><Link to='/'>Great Room</Link></li>
                                                <li><Link to='/'>Breakfast Room</Link></li>
                                            </ul>
                                            <div className="second-links">
                                                <Link to = '/'className="view-all">View all<i className="ri-arrow-right-line"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )}            