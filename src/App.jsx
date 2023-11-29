import './App.css';
import Navigation from './header/header-nav/navigation';
import Products_banners from './main/products/products-banners';
import Products_featured from './main/products/products-featured';
import Products_trending from './main/products/products-trending';
import Slider from './main/slider/slider';
import Brands from './main/brands/brands';
import Newsletter from './footer/newsletter/newsletter';
import Socials from './footer/socials/socials';
import Widgets from './footer/widgets/widgets';
import Login from './header/login/login';
import Register from './header/login/register';
import { useState } from 'react';
import { Header_Cart } from './cart-test/header_cart';
import Product_List from './cart-test/productlist';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
    <div>

      <Router>

        <Routes>

          <Route
            path='/'
            element={
              <>
                <Navigation></Navigation>
                <Slider></Slider>
                <Brands></Brands>
                <Products_trending></Products_trending>
                <Products_featured></Products_featured>
                <Products_banners></Products_banners>
                <Newsletter></Newsletter>
                <Widgets></Widgets>
                <Socials></Socials>
              </>
            }
          />
          <Route
            path='/login'
            element={
              <>
                <Login></Login>
              </>
            }
          />
          <Route
            path='/register'
            element={
              <>
                <Register></Register>
              </>
            }
          />
          <Route
            path='/Cart'
            element={
              <>
                <Header_Cart
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}>
                </Header_Cart>
                <Product_List>
                </Product_List>
              </>
            }
          >
          </Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;
