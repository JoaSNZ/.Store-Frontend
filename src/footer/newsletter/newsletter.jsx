import '../newsletter/newsletter.css';
export default function Newsletter() {
    return(
        <div className="newsletter">
            <div className="container">
                <div className="wrapper">
                    <div className="box">
                        <div className="content">
                            <h3>Join Our Newsletter</h3>
                            <p>Get E-mail updates about our latest shop and <strong>special offers</strong></p>
                        </div>
                        <form action="" className="search">
                            <span className="icon-large"><i className="ri-mail-line"></i></span>
                            <input type="email" name="email" id="" placeholder='Your email address' required />
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}