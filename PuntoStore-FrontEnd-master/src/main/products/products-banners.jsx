import '../products/products.css';
import banner1 from '../../multimedia/banner/banner1.jpg';
import banner2 from '../../multimedia/banner/banner2.jpg';
import procat1 from '../../multimedia/banner/procat1.jpg';
import procat2 from '../../multimedia/banner/procat2.jpg';
import procat3 from '../../multimedia/banner/procat3.jpg';
export default function Products_banners() {
    


    return(
        <div class="banners">
                <div class="container">
                    <div class="wrapper">
                        <div class="column">
                            <div class="banner flexwrap">
                                <div class="row">
                                    <div class="item">
                                        <div class="image">
                                            <img src={banner1} alt=""></img>
                                        </div>
                                        <div class="text-content flexcol">
                                            <h4>Brutal Sale!
                                                <h3><span>Get the deal in here</span><br>Living Room Chairh</br></h3>
                                            </h4>
                                            <a href="" class="primary-button">Shop Now</a>
                                        </div>
                                        <a href="" class="over-link"></a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="item get-gray">
                                        <div class="image">
                                            <img src={banner2} alt=""></img>
                                        </div>
                                        <div class="text-content flexcol">
                                            <h4>Brutal Sale!
                                                <h3><span>Discount everyday</span><br>Office Outfit</br></h3>
                                            </h4>
                                            <a href="" class="primary-button">Shop Now</a>
                                        </div>
                                        <a href="" class="over-link"></a>
                                    </div>
                                </div>
                            </div>

                            <div class="product-categories flexwrap">
                                <div class="row">
                                    <div class="item">
                                        <div class="image">
                                            <img src={procat1} alt=""></img>
                                        </div>
                                        <div class="content mini-links">
                                            <h4>Beauty</h4>
                                            <ul class="flexcol">
                                                <li><a href="">Makeup</a></li>
                                                <li><a href="">Skin Care</a></li>
                                                <li><a href="">Hair Care</a></li>
                                                <li><a href="">Fragances</a></li>
                                                <li><a href="">Foot & Hand Care</a></li>
                                            </ul>
                                            <div class="second-links">
                                                <a href="" class="view-all">View all<i class="ri-arrow-right-line"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="item">
                                        <div class="image">
                                            <img src={procat2} alt=""></img>
                                        </div>
                                        <div class="content mini-links">
                                            <h4>Gadjets</h4>
                                            <ul class="flexcol">
                                                <li><a href="">Camera</a></li>
                                                <li><a href="">Cellphones</a></li>
                                                <li><a href="">Computers</a></li>
                                                <li><a href="">GPS & Navigation</a></li>
                                                <li><a href="">Headphones</a></li>
                                            </ul>
                                            <div class="second-links">
                                                <a href="" class="view-all">View all<i class="ri-arrow-right-line"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="item">
                                        <div class="image">
                                            <img src={procat3} alt=""></img>
                                        </div>
                                        <div class="content mini-links">
                                            <h4>Home Decor</h4>
                                            <ul class="flexcol">
                                                <li><a href="">Kitchen</a></li>
                                                <li><a href="">Dining Room</a></li>
                                                <li><a href="">Pantry</a></li>
                                                <li><a href="">Great Room</a></li>
                                                <li><a href="">Breakfast Room</a></li>
                                            </ul>
                                            <div class="second-links">
                                                <a href="" class="view-all">View all<i class="ri-arrow-right-line"></i>
                                                </a>
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