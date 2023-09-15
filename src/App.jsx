import './App.css';
import Navigation from './header/header-nav/navigation';
import Products_banners from './main/products/products-banners';
import Products_featured from './main/products/products-featured';
import { Products_trending } from './main/products/products-trending';
import Slider from './main/slider/slider';
import Brands from './main/brands/brands';
import Newsletter from './footer/newsletter/newsletter';
import Socials from './footer/socials/socials';
import Widgets from './footer/widgets/widgets';
import Login_Register from './header/login/login';
import Cart_page from './main/cart&checkout/cart-page';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [allProducts, setAllProducts ] = useState ([ ]);
  const [totalPrice, setTotalPrice ] = useState(0);
  const [countProducts, setCountProduct ] = useState (0);
  return (
    <div>

      <Router>
      
        <Routes>

          <Route
            path='/'
            element={
              <>
                <Navigation 
                allProducts={ allProducts }
                setAllProducts={ setAllProducts }
                totalPrice={ totalPrice }
                setTotalPrice={ setTotalPrice }
                countProducts={ countProducts }
                setCountProduct= { setCountProduct }>

                </Navigation>
                <Slider></Slider>
                <Brands></Brands>
                <Products_trending 
                allProducts= { allProducts } 
                setAllProducts={ setAllProducts }
                totalPrice= { setTotalPrice }
                setTotalPrice={ setTotalPrice }
                countProducts={ countProducts }
                setCountProduct= { setCountProduct }>
                </Products_trending>
                <Products_featured></Products_featured>
                <Products_banners></Products_banners>
                <Newsletter></Newsletter>
                <Widgets></Widgets>
                <Socials></Socials>
              </>
            }
          />
          <Route
            path= '/Login'
            element={
              <>
              <Login_Register></Login_Register>
              </>
            }
          />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
