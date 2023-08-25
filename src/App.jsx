import logo from './logo.svg';
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

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Slider></Slider>
      <Brands></Brands>
      <Products_trending></Products_trending>
      <Products_featured></Products_featured>
      <Products_banners></Products_banners>
      <Newsletter></Newsletter>
      <Socials></Socials>
      <Widgets></Widgets>

    </div>
  );
}

export default App;
