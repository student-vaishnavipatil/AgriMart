import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Table from './Components/Table';
import ImageText from './Components/ImageText';
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import Login from './Components/Login';
import ProductDetails from './Components/ProductDetails'; 
import ImageCarousel from './Components/ImageCarousel';// Make sure to import this correctly
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Change the path to include the product ID for details */}
        <Route path="/detail/:id" element={<ProductDetails />} /> 

        <Route
          path="/"
          element={
            <>
              {/* <div className="img">
                <img src="farm1.jpg" className="img_farm" alt="..." />
              </div> */}
               <ImageCarousel />
              <div className="text-on-image">
                <span id="element"></span>
                <ImageText />
              </div>
              <div className="todayPrice">Today's Market Price</div>
              <Table />
              <div className="todayPrice">Latest Market Price</div>
              <div className="Card">
                {/* Ensure each card has an id prop to be passed to the detail page */}
                <Cards src="Tur Dal.webp" title="Tur Dal" date="26 Nov 2024" price="80-/kg" id="tur-dal" />
                <Cards src="moong.webp" title="Moong Dal" date="26 Nov 2024" price="100-/kg" id="moong" />
                <Cards src="Onion.webp" title="Onion" date="26 Nov 2024" price="60-/kg" id="onion" />
                <Cards src="Bajra.webp" title="Bajra" date="26 Nov 2024" price="50-/kg" id="bajra" />
                <Cards src="maize.webp" title="maize" date="26 Nov 2024" price="25-/kg" id="maize" />
              </div>
              <div className="Card">
                {/* Ensure each card has an id prop to be passed to the detail page */}
                <Cards src="Groundnut.webp" title="Groundnut" date="26 Nov 2024" price="80-/kg" id="groundnut" />
                <Cards src="Potato.webp" title="Potato" date="26 Nov 2024" price="100-/kg" id="potato" />
                <Cards src="Paddy.webp" title="Paddy" date="26 Nov 2024" price="60-/kg" id="paddy" />
                <Cards src="Bajra.webp" title="Bajra" date="26 Nov 2024" price="50-/kg" id="bajra" />
                <Cards src="maize.webp" title="maize" date="26 Nov 2024" price="25-/kg" id="maize" />
              </div>
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
