import '../products/products.css';
import apparel1 from '../../multimedia/products/apparel1.jpg';
import apparel2 from '../../multimedia/products/apparel2.jpg';
import apparel3 from '../../multimedia/products/apparel3.jpg';
import apparel4 from '../../multimedia/products/apparel4.jpg';
import shoe1 from '../../multimedia/products/shoe1.jpg';
import shoe2 from '../../multimedia/products/shoe2.jpg';
import shoe3 from '../../multimedia/products/shoe3.jpg';
import shoe4 from '../../multimedia/products/shoe4.jpg';

export default function Products_featured() {
    


    return(
        <div class="features">
        <div class="container">
            <div class="wrapper">
                <div class="column">
                    <div class="sectop flexitem">
                        <h2><span class="circle"></span><span>Featured Products</span></h2>
                        <div class="second-links">
                            <a href="" class="view-all">View all<i class="ri-arrow-right-line"></i></a>
                        </div>
                    </div>
                    <div class="products main flexwrap">
                        <div class="item">
                            <div class="media">
                                <div class="thumbnail object-cover">
                                    <a href="#">
                                        <img src={apparel1} alt=""></img>
                                    </a>
                                </div>
                                <div class="hoverable">
                                    <ul>
                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div class="discount circle flexcenter"><span>17%</span></div>
                            </div>
                            <div class="content">
                                <div class="rating">
                                    <div class="stars"></div>
                                    <span class="mini-text">(1,955)</span>
                                </div>
                                <h3 class="main-links"><a href="#">Under Armour Men's Tech</a></h3>
                                <div class="price">
                                    <span class="current">$56.50</span>
                                    <span class="normal mini-text">$75.50</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="media">
                                <div class="thumbnail object-cover">
                                    <a href="#">
                                        <img src={apparel2} alt=""></img>
                                    </a>
                                </div>
                                <div class="hoverable">
                                    <ul>
                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div class="discount circle flexcenter"><span>17%</span></div>
                            </div>
                            <div class="content">
                                <div class="rating">
                                    <div class="stars"></div>
                                    <span class="mini-text">(994)</span>
                                </div>
                                <h3 class="main-links"><a href="#">Women's Lightweight Knit Hoodie Sweater
                                        Pullover</a></h3>
                                <div class="price">
                                    <span class="current">$37.50</span>
                                    <span class="normal mini-text">$45.50</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="media">
                                <div class="thumbnail object-cover">
                                    <a href="#">
                                        <img src={apparel3} alt=""></img>
                                    </a>
                                </div>
                                <div class="hoverable">
                                    <ul>
                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div class="discount circle flexcenter"><span>32%</span></div>
                            </div>
                            <div class="content">
                                <div class="rating">
                                    <div class="stars"></div>
                                    <span class="mini-text">(2,548)</span>
                                </div>
                                <h3 class="main-links"><a href="#">Black Women's Coat Dress</a></h3>
                                <div class="price">
                                    <span class="current">$129.99</span>
                                    <span class="normal mini-text">$189.99</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="media">
                                <div class="thumbnail object-cover">
                                    <a href="#">
                                        <img src={apparel4} alt=""></img>
                                    </a>
                                </div>
                                <div class="hoverable">
                                    <ul>
                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div class="discount circle flexcenter"><span>31%</span></div>
                            </div>
                            <div class="content">
                                <div class="rating">
                                    <div class="stars"></div>
                                    <span class="mini-text">(10)</span>
                                </div>
                                <h3 class="main-links"><a href="#">Happy Sailed Womens Summer Boho Floral</a>
                                </h3>
                                <div class="price">
                                    <span class="current">$129.99</span>
                                    <span class="normal mini-text">$189.99</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="media">
                                <div class="thumbnail object-cover">
                                    <a href="#">
                                        <img src={shoe1} alt=""></img>
                                    </a>
                                </div>
                                <div class="hoverable">
                                    <ul>
                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div class="discount circle flexcenter"><span>32%</span></div>
                            </div>
                            <div class="content">
                                <div class="rating">
                                    <div class="stars"></div>
                                    <span class="mini-text">(2,548)</span>
                                </div>
                                <h3 class="main-links"><a href="#">Men Slip On Shoes Casual with Arch Support
                                        Insoles</a></h3>
                                <div class="price">
                                    <span class="current">$129.99</span>
                                    <span class="normal mini-text">$189.99</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="media">
                                <div class="thumbnail object-cover">
                                    <a href="#">
                                        <img src={shoe2} alt=""></img>
                                    </a>
                                </div>
                                <div class="hoverable">
                                    <ul>
                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div class="discount circle flexcenter"><span>30%</span></div>
                            </div>
                            <div class="content">
                                <div class="rating">
                                    <div class="stars"></div>
                                    <span class="mini-text">(1,237)</span>
                                </div>
                                <h3 class="main-links"><a href="#">Skechers Women's Go Joy Walking Shoe
                                        Sneaker</a></h3>
                                <div class="price">
                                    <span class="current">$45.95</span>
                                    <span class="normal mini-text">$64.95</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="media">
                                <div class="thumbnail object-cover">
                                    <a href="#">
                                        <img src={shoe3}alt=""></img>
                                    </a>
                                </div>
                                <div class="hoverable">
                                    <ul>
                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div class="discount circle flexcenter"><span>25%</span></div>
                            </div>
                            <div class="content">
                                <div class="rating">
                                    <div class="stars"></div>
                                    <span class="mini-text">(106)</span>
                                </div>
                                <h3 class="main-links"><a href="#">Walking Shoe Sneaker Womens</a></h3>
                                <div class="price">
                                    <span class="current">$139.99</span>
                                    <span class="normal mini-text">$189.98</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="media">
                                <div class="thumbnail object-cover">
                                    <a href="#">
                                        <img src={shoe4} alt=""></img>
                                    </a>
                                </div>
                                <div class="hoverable">
                                    <ul>
                                        <li class="active"><a href="#"><i class="ri-heart-line"></i></a>
                                        </li>
                                        <li><a href="#"><i class="ri-eye-line"></i></a></li>
                                        <li><a href="#"><i class="ri-shuffle-line"></i></a></li>
                                    </ul>
                                </div>
                                <div class="discount circle flexcenter"><span>35%</span></div>
                            </div>
                            <div class="content">
                                <div class="rating">
                                    <div class="stars"></div>
                                    <span class="mini-text">(1,955)</span>
                                </div>
                                <h3 class="main-links"><a href="#">Womens Summer Tosca Shoe</a></h3>
                                <div class="price">
                                    <span class="current">$104.90</span>
                                    <span class="normal mini-text">$189.90</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    )}            