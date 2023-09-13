import '../header-nav/navigation.css';
import '../../services/javascript-functions';
import apparel4 from '../../multimedia/products/apparel4.jpg';
import home2 from '../../multimedia/products/home2.jpg';
import home3 from '../../multimedia/products/home3.jpg';
import home4 from '../../multimedia/products/home4.jpg';
import home5 from '../../multimedia/products/home5.jpg';
import {Link} from 'react-router-dom'

export default function Nav_variant(){

    //const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
        //dptClass = document.querySelector('.site');
    //dptButton.addEventListener('click', function() {
        //dptClass.classList.toggle('showdpt')
    //})



    return (
    <div id="page" className="site page-home">

        <aside className="site-off desktop-hide">
            <div className="off-canvas">
                <div className="canvas-head" >
                    <div className="logo"><Link to="/"><span className="circle"></span>.Store</Link></div>
                    <Link to="/" className="t-close flexcenter"><i className="ri-close-line"></i></Link>
                </div>
                <div className="departments"></div>
                <nav></nav>
                <div className="thetop-nav"></div>
            </div>
        </aside>

        <header>
            <div className="header-top mobile-hide">
                <div className="container wrapper flexitem">
                    <div className="left">
                        <ul className="flexitem main-links">
                            <li><Link to="/">Blog</Link></li>
                            <li><Link to="/">Featured Products</Link></li>
                            <li><Link to="/">Wishlist</Link></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul className="flexitem main-links">
                            <li className= "btnLogin-popup"><Link to="/">Sign Up</Link></li>
                            <li><Link to="/">My Account</Link></li>
                            <li><Link to="/">Order Tracking</Link></li>
                            <li><Link to="/">USD <span className="icon-small"><i className="ri-arrow-down-s-line"></i></span></Link>
                                <ul>
                                    <li className="current"><Link to="/">USD</Link></li>
                                    <li><Link to="/">EURO</Link></li>
                                    <li><Link to="/">ARS</Link></li>
                                    <li><Link to="/">JPY</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">English <span className="icon-small"><i
                                            className="ri-arrow-down-s-line"></i></span></Link>
                                <ul>
                                    <li className="current"><Link to="/">English</Link></li>
                                    <li><Link to="/">German</Link></li>
                                    <li><Link to="/">Spanish</Link></li>
                                    <li><Link to="/">Japanese</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-nav">
                <div className="container">
                    <div className="wrapper flexitem">
                        <Link to="/" className="trigger desktop-hide"><span className="i ri-menu-2-line"></span></Link>
                        <div className="left flexitem">
                            <div className="logo"><Link to="/"><span className="circle"></span>.Store</Link></div>
                            <nav className="mobile-hide">
                                <ul className="flexitem second-links">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/">Shop</Link></li>
                                    <li className="has-child">
                                        <Link to="/">Women
                                            <div className="icon-small"><i className="ri-arrow-down-s-line"></i></div>
                                        </Link>
                                        <div className="mega">
                                            <div className="container">
                                                <div className="wrapper">
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Women's clothing</h4>
                                                            <ul>
                                                                <li><Link to="/">Dresses</Link></li>
                                                                <li><Link to="/">Tops & Tees</Link></li>
                                                                <li><Link to="/">Jackets & Coats</Link></li>
                                                                <li><Link to="/">Pants & Capris</Link></li>
                                                                <li><Link to="/">Sweaters</Link></li>
                                                                <li><Link to="/">Costumes</Link></li>
                                                                <li><Link to="/">Hoodies & Sweatshirts</Link></li>
                                                                <li><Link to="/">Pajamas & Robes</Link></li>
                                                                <li><Link to="/">Shorts</Link></li>
                                                                <li><Link to="/">Swimwear</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Jewelry</h4>
                                                            <ul>
                                                                <li><Link to="/">Accesories</Link></li>
                                                                <li><Link to="/">Bags & Purses</Link></li>
                                                                <li><Link to="/">Necklaces</Link></li>
                                                                <li><Link to="/">Rings</Link></li>
                                                                <li><Link to="/">Earrings</Link></li>
                                                                <li><Link to="/">Bracelets</Link></li>
                                                                <li><Link to="/">Body Jewelry</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Beauty</h4>
                                                            <ul>
                                                                <li><Link to="/">Bath Accesories</Link></li>
                                                                <li><Link to="/">Makeup & Cosmetics</Link></li>
                                                                <li><Link to="/">Skin Care</Link></li>
                                                                <li><Link to="/">Hair Care</Link></li>
                                                                <li><Link to="/">Essential Oils</Link></li>
                                                                <li><Link to="/">Fragances</Link></li>
                                                                <li><Link to="/">Soaps & Bath Bombs</Link></li>
                                                                <li><Link to="/">Face Masks & Coverings</Link></li>
                                                                <li><Link to="/">Spa Kits & Gifts</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Top Brands</h4>
                                                            <ul className="women-brands">
                                                                <li><Link to="/">Nike</Link></li>
                                                                <li><Link to="/">Louis Vuitton</Link></li>
                                                                <li><Link to="/">Hermes</Link></li>
                                                                <li><Link to="/">Gucci</Link></li>
                                                                <li><Link to="/">Zalando</Link></li>
                                                                <li><Link to="/">Tiffany & Co.</Link></li>
                                                                <li><Link to="/">Zara</Link></li>
                                                                <li><Link to="/">H&M</Link></li>
                                                                <li><Link to="/">Cartier</Link></li>
                                                                <li><Link to="/">Chanel</Link></li>
                                                                <li><Link to="/">Hurley</Link></li>
                                                            </ul>
                                                            <Link to="/" className="view-all">View all brands <i
                                                                    className="ri-arrow-right-line"></i> </Link>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol products">
                                                        <div className="row">
                                                            <div className="media">
                                                                <div className="thumbnail object-cover">
                                                                    <Link to="/">
                                                                        <img src={apparel4}alt="" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="text-content">
                                                                <h4>Most Wanted!</h4>
                                                                <Link to="/" className="primary-button">Order Now</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </li>
                                    <li><Link to="/">Men</Link></li>
                                    <li>
                                        <Link to="/">Sport
                                            <div className="fly-item"><span>New!</span></div>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right">
                            <ul className="flexitem second-links">
                                <li className="mobile-hide"><Link to="/">
                                        <div className="icon-large"><i className="ri-heart-line"></i></div>
                                        <div className="fly-item"><span className="item-number">0</span></div>
                                    </Link></li>
                                <li className="cart"><Link to="/">
                                <div className="icon-large">
                                    <i className="ri-shopping-cart-line"></i>
                                    <div className="fly-item"><span className="item-number">5</span></div>
                                </div>
                                <div className="icon-text">
                                    <div className="mini-text">Total</div>
                                    <div className="cart-total">$1,622.95</div>
                                </div>
                                </Link>
                                <div className="mini-cart">
                                    <div className="content">
                                        <div className="cart-head">
                                            5 items in cart
                                        </div>
                                        <div className="cart-body">
                                            <ul className="products mini">
                                                <li className="item">
                                                    <div className="thumbnail object-cover">
                                                        <Link to="/"><img src={home2} alt=""/></Link>
                                                    </div>
                                                    <div className="item-content">
                                                        <p><Link>Dimmable Celing Light Modern</Link></p>
                                                        <span className="price">
                                                            <span>$279.99</span>
                                                            <span className="fly-item"><span>2x</span></span>
                                                        </span>
                                                    </div>
                                                    <Link to= "/" className="item-remove"><i className="ri-close-line"></i></Link>
                                                </li>
                                                <li className="item">
                                                    <div className="thumbnail object-cover">
                                                        <Link to="/"><img src={home3} alt=""/></Link>
                                                    </div>
                                                    <div className="item-content">
                                                        <p><Link>Dimmable Celing Light Modern</Link></p>
                                                        <span className="price">
                                                            <span>$279.99</span>
                                                            <span className="fly-item"><span>1x</span></span>
                                                        </span>
                                                    </div>
                                                    <Link to= "/" className="item-remove"><i className="ri-close-line"></i></Link>
                                                </li>
                                                <li className="item">
                                                    <div className="thumbnail object-cover">
                                                        <Link to="/"><img src={home4} alt=""/></Link>
                                                    </div>
                                                    <div className="item-content">
                                                        <p><Link>Dimmable Celing Light Modern</Link></p>
                                                        <span className="price">
                                                            <span>$279.99</span>
                                                            <span className="fly-item"><span>1x</span></span>
                                                        </span>
                                                    </div>
                                                    <Link to= "/" className="item-remove"><i className="ri-close-line"></i></Link>
                                                </li>
                                                <li className="item">
                                                    <div className="thumbnail object-cover">
                                                        <Link to="/"><img src={home5} alt=""/></Link>
                                                    </div>
                                                    <div className="item-content">
                                                        <p><Link>Dimmable Celing Light Modern</Link></p>
                                                        <span className="price">
                                                            <span>$279.99</span>
                                                            <span className="fly-item"><span>1x</span></span>
                                                        </span>
                                                    </div>
                                                    <Link to= "/" className="item-remove"><i className="ri-close-line"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="cart-footer">
                                            <div className="subtotal">
                                                <p>Subtotal</p>
                                                <p><strong>$1,622.95</strong></p>
                                                <div className="actions">
                                                    <Link to= "/" className="primary-button">Checkout</Link>
                                                    <Link to= "/Cart" className="secondary-button">View Cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        
            
           
        </header>
        </div>
    )
}