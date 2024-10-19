import React, { useEffect } from 'react';
import './details.css';
import Cards from './Cards';

const Details = ({ src, title, description, price, date, loc, variety, unit }) => {

  // Scroll to top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className='details'>
      <div className="left">
        <img className='img' src={src} alt={title} style={{ width: '25vw', height: "20vw", borderRadius: '12px' }} />
      </div>
      <div className="right">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: &#8377;{price}</p>
        <p>Date: {date}</p>
        <p>Location:{loc}</p>
        <p>Variety:{variety}</p>
        <p>Unit:{unit}</p>
        <button type="button" className='chatbtn'>Call Buyer</button>
        <button type="button" className='chatbtn'>Chat Now </button>
      </div>
    </div>
     <div className="Card">
     {/* Ensure each card has an id prop to be passed to the detail page */}
     <Cards src="/Tur Dal.webp" title="Tur Dal" date="26 Nov 2024" price="80-/kg" id="tur-dal" />
     <Cards src="/Moong.webp" title="Moong Dal" date="26 Nov 2024" price="100-/kg" id="moong" />
     <Cards src="/Onion.webp" title="Onion" date="26 Nov 2024" price="60-/kg" id="onion" />
     <Cards src="/Bajra.webp" title="Bajra" date="26 Nov 2024" price="50-/kg" id="bajra" />
     <Cards src="/Maize.webp" title="maize" date="26 Nov 2024" price="25-/kg" id="maize" />
   </div>
   <div className="Card">
     {/* Ensure each card has an id prop to be passed to the detail page */}
     <Cards src="/Tur Dal.webp" title="Tur Dal" date="26 Nov 2024" price="80-/kg" id="tur-dal" />
     <Cards src="/Moong.webp" title="Moong Dal" date="26 Nov 2024" price="100-/kg" id="moong" />
     <Cards src="/Onion.webp" title="Onion" date="26 Nov 2024" price="60-/kg" id="onion" />
     <Cards src="/Bajra.webp" title="Bajra" date="26 Nov 2024" price="50-/kg" id="bajra" />
     <Cards src="/Maize.webp" title="maize" date="26 Nov 2024" price="25-/kg" id="maize" />
   </div>
   </>
  );
};

export default Details;
