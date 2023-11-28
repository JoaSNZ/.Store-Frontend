import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';


export default function Register() {
    
    const [formData, setForm] = useState({
        username: "",
        email: "",
        password: "",
        password2: ""
      });
    
      const handleChange = (e) => {
        setForm({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleRegister = async (e) => {
        e.preventDefault();
    
        if (formData.password !== formData.password2) {
          alert("Las contrasenas deben coincidir");
        } else {
          try {
            await axios.post('http://localhost:8080/registro', {
              formData
            });
      
            alert("Registrado");
          } catch (error) {
            alert("Error al registrarse");
            console.log("Error al registrarse ", error);
          }  
        }
      };

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
                                <li>Already member? <Link to='/login' className='t-singin'>Sign in</Link></li>
                            </ul>
                        </nav>
                        <div className="heading">
                            <h2>Sign Up</h2>
                            <p>We secure your data privacy encrypted.</p>
                        </div>
                        <form action="">
                            <p>
                                <i className='ri-user-3-line' />
                                <input type="text" name="username" onChange={handleChange} id="username" placeholder='Full Name' />
                            </p>
                            <p>
                                <i className='ri-mail-line' />
                                <input type="email" name="email" onChange={handleChange} id="email" placeholder='Your email address' />
                            </p>
                            <p>
                                <i className='ri-lock-line' />
                                <i className='ri-eye-off-line' />
                                <input type="password" name="password" onChange={handleChange} id="password" placeholder='Enter password' />
                            </p>
                            <p>
                                <i className='ri-lock-line' />
                                <input type="password" name="password2" onChange={handleChange} id="password2" placeholder='Re-Enter password' />
                            </p>
                            <div className="actions">
                                <label>
                                    <input type="submit" onClick={handleRegister} value="Sign Up" />
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