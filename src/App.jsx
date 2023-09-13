import './App.css';
import Navigation from './header/header-nav/navigation';
import Nav_variant from './header/header-nav/nav-variant';
import Products_banners from './main/products/products-banners';
import Products_featured from './main/products/products-featured';
import Products_trending from './main/products/products-trending';
import Slider from './main/slider/slider';
import Brands from './main/brands/brands';
import Newsletter from './footer/newsletter/newsletter';
import Socials from './footer/socials/socials';
import Widgets from './footer/widgets/widgets';
import Cart_page from './main/cart&checkout/cart-page';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
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
            path= '/Cart'
            element={
              <>
              <Nav_variant></Nav_variant>
              <Cart_page></Cart_page>
              <Newsletter></Newsletter>
              <Widgets></Widgets>
              <Socials></Socials>
              </>
            }
          />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
