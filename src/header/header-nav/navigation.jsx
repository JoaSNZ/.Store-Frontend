import '../header-nav/navigation.css';
import '../../services/javascript-functions';
import apparel4 from '../../multimedia/products/apparel4.jpg';

export default function Navigation(){




    return (
    <div id="page" className="site">

        <aside className="site-off desktop-hide">
            <div className="off-canvas">
                <div className="canvas-head" >
                    <div className="logo"><a href="/"><span className="circle"></span>.Store</a></div>
                    <a href="#" className="t-close flexcenter"><i className="ri-close-line"></i></a>
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
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Featured Products</a></li>
                            <li><a href="#">Wishlist</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul className="flexitem main-links">
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Order Tracking</a></li>
                            <li><a href="#">USD <span className="icon-small"><i className="ri-arrow-down-s-line"></i></span></a>
                                <ul>
                                    <li className="current"><a href="#">USD</a></li>
                                    <li><a href="#">EURO</a></li>
                                    <li><a href="#">ARS</a></li>
                                    <li><a href="#">JPY</a></li>
                                </ul>
                            </li>
                            <li><a href="#">English <span className="icon-small"><i
                                            className="ri-arrow-down-s-line"></i></span></a>
                                <ul>
                                    <li className="current"><a href="#">English</a></li>
                                    <li><a href="#">German</a></li>
                                    <li><a href="#">Spanish</a></li>
                                    <li><a href="#">Japanese</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-nav">
                <div className="container">
                    <div className="wrapper flexitem">
                        <a href="#" className="trigger desktop-hide"><span className="i ri-menu-2-line"></span></a>
                        <div className="left flexitem">
                            <div className="logo"><a href="/"><span className="circle"></span>.Store</a></div>
                            <nav className="mobile-hide">
                                <ul className="flexitem second-links">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Shop</a></li>
                                    <li className="has-child">
                                        <a href="#">Women
                                            <div className="icon-small"><i className="ri-arrow-down-s-line"></i></div>
                                        </a>
                                        <div className="mega">
                                            <div className="container">
                                                <div className="wrapper">
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Women's clothing</h4>
                                                            <ul>
                                                                <li><a href="#">Dresses</a></li>
                                                                <li><a href="#">Tops & Tees</a></li>
                                                                <li><a href="#">Jackets & Coats</a></li>
                                                                <li><a href="#">Pants & Capris</a></li>
                                                                <li><a href="#">Sweaters</a></li>
                                                                <li><a href="#">Costumes</a></li>
                                                                <li><a href="#">Hoodies & Sweatshirts</a></li>
                                                                <li><a href="#">Pajamas & Robes</a></li>
                                                                <li><a href="#">Shorts</a></li>
                                                                <li><a href="#">Swimwear</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Jewelry</h4>
                                                            <ul>
                                                                <li><a href="#">Accesories</a></li>
                                                                <li><a href="#">Bags & Purses</a></li>
                                                                <li><a href="#">Necklaces</a></li>
                                                                <li><a href="#">Rings</a></li>
                                                                <li><a href="#">Earrings</a></li>
                                                                <li><a href="#">Bracelets</a></li>
                                                                <li><a href="#">Body Jewelry</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Beauty</h4>
                                                            <ul>
                                                                <li><a href="#">Bath Accesories</a></li>
                                                                <li><a href="#">Makeup & Cosmetics</a></li>
                                                                <li><a href="#">Skin Care</a></li>
                                                                <li><a href="#">Hair Care</a></li>
                                                                <li><a href="#">Essential Oils</a></li>
                                                                <li><a href="#">Fragances</a></li>
                                                                <li><a href="#">Soaps & Bath Bombs</a></li>
                                                                <li><a href="#">Face Masks & Coverings</a></li>
                                                                <li><a href="#">Spa Kits & Gifts</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol">
                                                        <div className="row">
                                                            <h4>Top Brands</h4>
                                                            <ul className="women-brands">
                                                                <li><a href="#">Nike</a></li>
                                                                <li><a href="#">Louis Vuitton</a></li>
                                                                <li><a href="#">Hermes</a></li>
                                                                <li><a href="#">Gucci</a></li>
                                                                <li><a href="#">Zalando</a></li>
                                                                <li><a href="#">Tiffany & Co.</a></li>
                                                                <li><a href="#">Zara</a></li>
                                                                <li><a href="#">H&M</a></li>
                                                                <li><a href="#">Cartier</a></li>
                                                                <li><a href="#">Chanel</a></li>
                                                                <li><a href="#">Hurley</a></li>
                                                            </ul>
                                                            <a href="#" className="view-all">View all brands <i
                                                                    className="ri-arrow-right-line"></i> </a>
                                                        </div>
                                                    </div>
                                                    <div className="flexcol products">
                                                        <div className="row">
                                                            <div className="media">
                                                                <div className="thumbnail object-cover">
                                                                    <a href="#">
                                                                        <img src={apparel4}
                                                                            alt="">
                                                                                </img>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="text-content">
                                                                <h4>Most Wanted!</h4>
                                                                <a href="#" className="primary-button">Order Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </li>
                                    <li><a href="#">Men</a></li>
                                    <li>
                                        <a href="#">Sport
                                            <div className="fly-item"><span>New!</span></div>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right">
                            <ul className="flexitem second-links">
                                <li className="mobile-hide"><a href="#">
                                        <div className="icon-large"><i className="ri-heart-line"></i></div>
                                        <div className="fly-item"><span className="item-number">0</span></div>
                                    </a></li>
                                <li><a href="#" className="iscart"></a></li>
                                <div className="icon-large">
                                    <i className="ri-shopping-cart-line"></i>
                                    <div className="fly-item"><span className="item-number">0</span></div>
                                </div>
                                <div className="icon-text">
                                    <div className="mini-text">Total</div>
                                    <div className="cart-total">$0.00</div>
                                </div>
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
                                    <a href="#" className="dpt-trigger mobile-hide">
                                        <i className="ri-menu-3-line ri-xl"></i>
                                    </a>
                                </div>
                                <div className="dpt-menu">
                                    <ul className="second-links">
                                        <li className="has-child beauty">
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-bear-smile-line"></i></div>
                                                Beauty
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul>
                                                <li><a href="#">Makeup</a></li>
                                                <li><a href="#">Skin Care</a></li>
                                                <li><a href="#">Hair Care</a></li>
                                                <li><a href="#">Fragance</a></li>
                                                <li><a href="#">Foot & Hand Care</a></li>
                                                <li><a href="#">Tools & Accesories</a></li>
                                                <li><a href="#">Shave & Hair Removal</a></li>
                                                <li><a href="#">Personal Care</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-child electronic">
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-bluetooth-connect-line"></i></div>
                                                Electronics
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul>
                                                <li><a href="#">Camera</a></li>
                                                <li><a href="#">Cellphones</a></li>
                                                <li><a href="#">Computers</a></li>
                                                <li><a href="#">GPS & Navigation</a></li>
                                                <li><a href="#">Headphones</a></li>
                                                <li><a href="#">Home Audio</a></li>
                                                <li><a href="#">Televison</a></li>
                                                <li><a href="#">Video Projectors</a></li>
                                                <li><a href="#">Wearable Technology</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-child fashion">
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-t-shirt-air-line"></i></div>
                                                Women's Fashion
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <ul>
                                                <li><a href="#">Clothing</a></li>
                                                <li><a href="#">Shoes</a></li>
                                                <li><a href="#">Jewelry</a></li>
                                                <li><a href="#">Watches</a></li>
                                                <li><a href="#">handbags</a></li>
                                                <li><a href="#">Accesories</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-shirt-line"></i></div>
                                                Men's Fashion
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-user-5-line"></i></div>
                                                Girl's Fashion
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-user-6-line"></i></div>
                                                Boy's Fashion
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-heart-pulse-line"></i></div>
                                                Health & Household
                                            </a>
                                        </li>
                                        <li className="has-child homekit">
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-home-8-line"></i></div>
                                                Home & Kitchen
                                                <div className="icon-small"><i className="ri-arrow-right-s-line"></i></div>
                                            </a>
                                            <div className="mega">
                                                <div className="flexcol">
                                                    <div className="row">
                                                        <h4><a href="#">Kitchen & Dining</a></h4>
                                                        <ul>
                                                            <li><a href="#">Kitchen</a></li>
                                                            <li><a href="#">Dining Room</a></li>
                                                            <li><a href="#">Pantry</a></li>
                                                            <li><a href="#">Great Room</a></li>
                                                            <li><a href="#">Breakfast Nook</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="row">
                                                        <h4><a href="#">Living</a></h4>
                                                        <ul>
                                                            <li><a href="#">Living Room</a></li>
                                                            <li><a href="#">Family Room</a></li>
                                                            <li><a href="#">Sunroom</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="flexcol">
                                                    <div className="row">
                                                        <h4><a href="#">Bed & Bath</a></h4>
                                                        <ul>
                                                            <li><a href="#">Bathroom</a></li>
                                                            <li><a href="#">Powder Room</a></li>
                                                            <li><a href="#">Bedroom</a></li>
                                                            <li><a href="#">Storage & Closet</a></li>
                                                            <li><a href="#">Baby & Kids</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="row">
                                                        <h4><a href="#">Utility</a></h4>
                                                        <ul>
                                                            <li><a href="#">Laundry</a></li>
                                                            <li><a href="#">Garage</a></li>
                                                            <li><a href="#">Mudroom</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="flexcol">
                                                    <div className="row">
                                                        <h4><a href="#">Outdoor</a></h4>
                                                        <ul>
                                                            <li><a href="#">Landscape</a></li>
                                                            <li><a href="#">Patio</a></li>
                                                            <li><a href="#">Deck</a></li>
                                                            <li><a href="#">Pool</a></li>
                                                            <li><a href="#">Backyard</a></li>
                                                            <li><a href="#">Porch</a></li>
                                                            <li><a href="#">Exterior</a></li>
                                                            <li><a href="#">Outdoor Kitchen</a></li>
                                                            <li><a href="#">Front Yard</a></li>
                                                            <li><a href="#">Driveway</a></li>
                                                            <li><a href="#">Poolhouse</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-baidu-line"></i></div>
                                                Pet Supplies
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-basketball-line"></i></div>
                                                Sports
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="icon-large"><i className="ri-shield-star-line"></i></div>
                                                Best Seller
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="search-box">
                                <form action="" className="search">
                                    <span className="icon-large"><i className="ri-search-line"></i></span>
                                    <input type="search" placeholder="Search for products">
                                    <button type="submit">Search</button>
                                    </input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </header>
        /</div>
    )
}