import './login.css';
import { Link } from 'react-router-dom';
export default function Login_Register() {

    //const signup = document.querySelector('.t-singup'),
       //singin = document.querySelector('.t-singin'),
        //addclass = document.querySelector('.site_login');
    //signup.addEventListener('click', function () {
        //addclass.className = 'site_login signup-show'
    //});
    //singin.addEventListener('click', function () {
        //addclass.className = 'site_login signin-show'
    //});

    return <>
        <div id="page" className="site_login">
            <div className="container_login">
                <div className="theform">
                    <div className="play">
                        <div className="wrapper_login">
                            <div className="card one"></div>
                            <div className="card two"></div>
                            <div className="card three"></div>
                            <div className="card four"></div>
                            <div className="card five"></div>
                        </div>
                    </div>
                    <div className="signup">
                        <nav className='test'>
                            <ul>
                                <li><Link to='/' ><i className='ri-arrow-left-line' /></Link></li>
                                <li>Already member? <Link to='#' className='t-singin'>Sign in</Link></li>
                            </ul>
                        </nav>
                        <div className="heading">
                            <h2>Sign Up</h2>
                            <p>We secure your data privacy encrypted.</p>
                        </div>
                        <form action="">
                            <p>
                                <i className='ri-user-3-line' />
                                <input type="text" placeholder='Full Name' />
                            </p>
                            <p>
                                <i className='ri-mail-line' />
                                <input type="email" placeholder='Your email address' />
                            </p>
                            <p>
                                <i className='ri-lock-line' />
                                <i className='ri-eye-off-line' />
                                <input type="password" placeholder='Enter password' />
                            </p>
                            <p>
                                <i className='ri-lock-line' />
                                <input type="password" placeholder='Re-Enter password' />
                            </p>
                            <div className="actions">
                                <label>
                                    <Link to= '/'><input type="submit" value="Sign Up" /></Link>
                                    <i className='ri-arrow-right-line' />
                                </label>
                                <p>Or</p>
                                <p className='socials_login'>
                                    <button><i className='ri-facebook-line'></i></button>
                                    <button><i className='ri-google-line'></i></button>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="signin">
                        <nav className='test'>
                            <ul>
                                <li><Link to='/' ><i className='ri-arrow-left-line' /></Link></li>
                                <li>Don't have an account? <Link to='#' className='t-singup'>Sign up</Link></li>
                            </ul>
                        </nav>
                        <div className="heading">
                            <h2>Sign In</h2>
                            <p>We secure your data privacy encrypted.</p>
                        </div>
                        <form action="">
                            <p>
                                <i className='ri-mail-line' />
                                <input type="email" placeholder='Your email address' />
                            </p>
                            <p>
                                <i className='ri-lock-line' />
                                <i className='ri-eye-off-line' />
                                <input type="password" placeholder='Enter password' />
                            </p>
                            <div className="actions">
                                <label>
                                    <Link to= '/'><input type="submit" value="Sign In" /></Link>
                                    <i className='ri-arrow-right-line' />
                                </label>
                                <p>Or</p>
                                <p className='socials_login'>
                                    <button><i className='ri-facebook-line'></i></button>
                                    <button><i className='ri-google-line'></i></button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
}