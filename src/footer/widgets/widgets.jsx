import '../widgets/widgets.css';
import {Link} from 'react-router-dom';
export default function Widgets() {
    return(
    <div className="widgets">
            <div className="container">
                <div className="wrapper">
                    <div className="flexwrap">
                        <div className="row">
                            <div className="item mini-links">
                                <h4>Help & Contact</h4>
                                <ul className="flexcol">
                                    <li><Link to='/'>Your Account</Link></li>
                                    <li><Link to='/'>Your Orders</Link></li>
                                    <li><Link to='/'>Shipping Rates</Link></li>
                                    <li><Link to='/'>Returns</Link></li>
                                    <li><Link to='/'>Assistant</Link></li>
                                    <li><Link to='/'>Help</Link></li>
                                    <li><Link to='/'>Contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item mini-links">
                                <h4>Products Categories</h4>
                                <ul className="flexcol">
                                    <li><Link to='/'>Beauty</Link></li>
                                    <li><Link to='/'>Electronics</Link></li>
                                    <li><Link to='/'>Women's Fashion</Link></li>
                                    <li><Link to='/'>Men's Fashion</Link></li>
                                    <li><Link to='/'>Girl's Fashion</Link></li>
                                    <li><Link to='/'>Boy's Fashion</Link></li>
                                    <li><Link to='/'>Health & Household</Link></li>
                                    <li><Link to='/'>Home & Kitchen</Link></li>
                                    <li><Link to='/'>Pet Supplies</Link></li>
                                    <li><Link to='/'>Sports</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item mini-links">
                                <h4>Payment Info</h4>
                                <ul className="flexcol">
                                    <li><Link to='/'>Bussiness Car</Link></li>
                                    <li><Link to='/'>Shop with Points</Link></li>
                                    <li><Link to='/'>Reload Your Balance</Link></li>
                                    <li><Link to='/'>Paypal</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="item mini-links">
                                <h4>About Us</h4>
                                <ul className="flexcol">
                                    <li><Link to='/'>Company Info</Link></li>
                                    <li><Link to='/'>News</Link></li>
                                    <li><Link to='/'>Investors</Link></li>
                                    <li><Link to='/'>Careers</Link></li>
                                    <li><Link to='/'>Policies</Link></li>
                                    <li><Link to='/'>Customers Review</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}