import '../header-nav/navigation.css';
import '../../services/javascript-functions';
import apparel4 from '../../multimedia/products/apparel4.jpg';
import home2 from '../../multimedia/products/home2.jpg';
import home3 from '../../multimedia/products/home3.jpg';
import home4 from '../../multimedia/products/home4.jpg';
import home5 from '../../multimedia/products/home5.jpg';
import {Link} from 'react-router-dom';
import {data} from '../../data';
import { useEffect, useState } from 'react';


export default function Navigation(){

    const [active, setActive ] = useState (false)

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
                            <li className= "btnLogin-popup"><Link to="/Login">Sign Up</Link></li>
                            <li><Link to="/Login">My Account</Link></li>
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
                                <div className="icon-large" onClick={() => setActive(!active)}>
                                    <i className="ri-shopping-cart-line"></i>
                                    <div className="fly-item"><span className="item-number">5</span></div>
                                </div>
                                <div className="icon-text">
                                    <div className="mini-text">Total</div>
                                    <div className="cart-total">$0</div>
                                </div>
                                </Link>
                                <div className="mini-cart">
                                    <div className={"container ${active ? '' : 'cart:hover'}"} >
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

            <div className="header-main mobile-hide">
                <div className="container">
                    <div className="wrapper flexitem">
                        <div className="left">
                            <div className="dpt-cat">
                                <div className="dpt-head">
                                    <div className="main-text">All Departments</div>
                                    <div className="mini-text mobile-hide">Total 1059 Products</div>
                                    <Link to="/" className="dpt-trigger mobile-hide">
                                        <i className="ri-menu-3-line ri-xl"></i>
                                        <i className="ri-close-line ri-xl"></i>
                                    </Link>
                                </div>
                                <div className="dpt-menu">
                                    <ul className="second-links">
                                        <li className="has-child beauty">
                                            <Link to="/">
                                                <div className="icon-large"><i className="ri-bear-smile-line"></i></div>
                                                Beauty
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </Link>
                                            <ul>
                                                <li><Link to="/">Makeup</Link></li>
                                                <li><Link to="/">Skin Care</Link></li>
                                                <li><Link to="/">Hair Care</Link></li>
                                                <li><Link to="/">Fragance</Link></li>
                                                <li><Link to="/">Foot & Hand Care</Link></li>
                                                <li><Link to="/">Tools & Accesories</Link></li>
                                                <li><Link to="/">Shave & Hair Removal</Link></li>
                                                <li><Link to="/">Personal Care</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-child electronic">
                                            <Link to="/">
                                                <div className="icon-large"><i className="ri-bluetooth-connect-line"></i></div>
                                                Electronics
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </Link>
                                            <ul>
                                                <li><Link to="/">Camera</Link></li>
                                                <li><Link to="/">Cellphones</Link></li>
                                                <li><Link to="/">Computers</Link></li>
                                                <li><Link to="/">GPS & Navigation</Link></li>
                                                <li><Link to="/">Headphones</Link></li>
                                                <li><Link to="/">Home Audio</Link></li>
                                                <li><Link to="/">Televison</Link></li>
                                                <li><Link to="/">Video Projectors</Link></li>
                                                <li><Link to="/">Wearable Technology</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-child fashion">
                                            <Link to="/">
                                                <div className="icon-large"><i className="ri-t-shirt-air-line"></i></div>
                                                Women's Fashion
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </Link>
                                            <ul>
                                                <li><Link to="/">Clothing</Link></li>
                                                <li><Link to="/">Shoes</Link></li>
                                                <li><Link to="/">Jewelry</Link></li>
                                                <li><Link to="/">Watches</Link></li>
                                                <li><Link to="/">handbags</Link></li>
                                                <li><Link to="/">Accesories</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <div className="icon-large"><i className="ri-shirt-line"></i></div>
                                                Men's Fashion
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <div className="icon-large"><i className="ri-user-5-line"></i></div>
                                                Girl's Fashion
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <div className="icon-large"><i className="ri-user-6-line"></i></div>
                                                Boy's Fashion
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <div className="icon-large"><i className="ri-heart-pulse-line"></i></div>
                                                Health & Household
                                            </Link>
                                        </li>
                                        <li className="has-child homekit">
                                            <Link to="/">
                                                <div className="icon-large"><i className="ri-home-8-line"></i></div>
                                                Home & Kitchen
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </Link>
                                            <div className="mega">
                                                <div className="flexcol">
                                                    <div className="row">
                                                        <h4><Link to="/">Kitchen & Dining</Link></h4>
                                                        <ul>
                                                            <li><Link to="/">Kitchen</Link></li>
                                                            <li><Link to="/">Dining Room</Link></li>
                                                            <li><Link to="/">Pantry</Link></li>
                                                            <li><Link to="/">Great Room</Link></li>
                                                            <li><Link to="/">Breakfast Nook</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="row">
                                                        <h4><Link to="/">Living</Link></h4>
                                                        <ul>
                                                            <li><Link to="/">Living Room</Link></li>
                                                            <li><Link to="/">Family Room</Link></li>
                                                            <li><Link to="/">Sunroom</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="flexcol">
                                                    <div className="row">
                                                        <h4><Link to="/">Bed & Bath</Link></h4>
                                                        <ul>
                                                            <li><Link to="/">Bathroom</Link></li>
                                                            <li><Link to="/">Powder Room</Link></li>
                                                            <li><Link to="/">Bedroom</Link></li>
                                                            <li><Link to="/">Storage & Closet</Link></li>
                                                            <li><Link to="/">Baby & Kids</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="row">
                                                        <h4><Link to="/">Utility</Link></h4>
                                                        <ul>
                                                            <li><Link to="/">Laundry</Link></li>
                                                            <li><Link to="/">Garage</Link></li>
                                                            <li><Link to="/">Mudroom</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="flexcol">
                                                    <div className="row">
                                                        <h4><Link to="/">Outdoor</Link></h4>
                                                        <ul>
                                                            <li><Link to="/">Landscape</Link></li>
                                                            <li><Link to="/">Patio</Link></li>
                                                            <li><Link to="/">Deck</Link></li>
                                                            <li><Link to="/">Pool</Link></li>
                                                            <li><Link to="/">Backyard</Link></li>
                                                            <li><Link to="/">Porch</Link></li>
                                                            <li><Link to="/">Exterior</Link></li>
                                                            <li><Link to="/">Outdoor Kitchen</Link></li>
                                                            <li><Link to="/">Front Yard</Link></li>
                                                            <li><Link to="/">Driveway</Link></li>
                                                            <li><Link to="/">Poolhouse</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <div className="icon-large"><i className="ri-baidu-line"></i></div>
                                                Pet Supplies
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <div className="icon-large"><i className="ri-basketball-line"></i></div>
                                                Sports
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <div className="icon-large"><i className="ri-shield-star-line"></i></div>
                                                Best Seller
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="search-box">
                                <form action="" className="search">
                                    <span className="icon-large"><i className="ri-search-line"></i></span>
                                    <input type="search" placeholder="Search for products" />
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </header>
        </div>
    )
}