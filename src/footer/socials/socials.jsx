import '../socials/socials.css';
import {Link} from 'react-router-dom';
export default function Socials(){
    return(
        <div className="footer-info">
            <div className="container">
                <div className="wrapper">
                    <div className="flexcol">
                        <div className="logo">
                            <Link to='/'><span className="circle"></span>.Store</Link>
                        </div>
                        <div className="socials">
                            <ul className="flexitem">
                                <li><Link to='/'><i className="ri-twitter-line"></i></Link></li>
                                <li><Link to='/'><i className="ri-facebook-line"></i></Link></li>
                                <li><Link to='/'><i className="ri-instagram-line"></i></Link></li>
                                <li><Link to='/'><i className="ri-linkedin-line"></i></Link></li>
                                <li><Link to='/'><i className="ri-youtube-line"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <p className="mini-text">Copyright 2023 © .Store. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}