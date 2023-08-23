import '../socials/socials.css';
export default function Socials(){
    return(
        <div className="footer-info">
            <div className="container">
                <div className="wrapper">
                    <div className="flexcol">
                        <div className="logo">
                            <a href=""><span className="circle"></span>.Store</a>
                        </div>
                        <div className="socials">
                            <ul className="flexitem">
                                <li><a href=""><i className="ri-twitter-line"></i></a></li>
                                <li><a href=""><i className="ri-facebook-line"></i></a></li>
                                <li><a href=""><i className="ri-instagram-line"></i></a></li>
                                <li><a href=""><i className="ri-linkedin-line"></i></a></li>
                                <li><a href=""><i className="ri-youtube-line"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="mini-text">Copyright 2023 © .Store. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}