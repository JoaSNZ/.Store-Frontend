import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
          await axios.post('http://localhost:8080/login', {
            email,
            password
          });
    
          alert("Login exitoso");
        } catch (error) {
          alert("Login fallido");
          console.log("Error al ingresar: ", error);
        }
    };

    return <>
        <div id="page" className="site_login">
            <div className="container_login">
                <div className="theform">
                    <div className="signin">
                        <nav className='test'>
                            <ul>
                                <li><Link to='/' ><i className='ri-arrow-left-line' /></Link></li>
                                <li>Don't have an account? <Link to='/register' className='t-singup'>Sign up</Link></li>
                            </ul>
                        </nav>
                        <div className="heading">
                            <h2>Sign In</h2>
                            <p>We secure your data privacy encrypted.</p>
                        </div>
                        <form action="">
                            <p>
                                <i className='ri-mail-line' />
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder='Your email address' />
                            </p>
                            <p>
                                <i className='ri-lock-line' />
                                <i className='ri-eye-off-line' />
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder='Enter password' />
                            </p>
                            <div className="actions">
                                <label>
                                    <input type="submit" onClick={handleLogin} value="Sign In" />
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