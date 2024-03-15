import './App.css';
import { useContext } from "react";
import { themeContext } from "./Context";
import ContectUs from './component/contectUs/ContectUs';
import Feedback from './component/feedback/Feedback';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import Navbar from './component/navbar/Navbar';
import Ourteam from './component/ourteam/Ourteam';
import Product from './component/product/Product';
import Service from './component/service/Service';
import Games from './component/games/Games';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='App'
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>
      <Navbar />
      <Home />
      <Service />
      <Feedback />
      <Product />
      <Games />
      <Ourteam />
      {/* <ContectUs /> */}
      <Footer />
    </div>

  );
}

export default App;
