import React from 'react';
import Cards from './Cards';

// Sample data (replace this with actual data from an API or state management)
const products = [
  {
    id: 'moong',
    title: 'Moong Dal',
    price: '80',
    src: 'moong.webp',
    description: 'High-quality Moong Dal for cooking.',
    date: '26 Nov 2024',
  },
  {
    id: 'tur-dal',
    title: 'Tur Dal',
    price: '100',
    src: 'paddy.webp',
    description: 'Fresh Tur Dal, perfect for your dishes.',
    date: '26 Nov 2024',
  },
  // Add more products as needed
];

const Home = () => {
    return (
        <div className="card-container">
            {products.map(product => (
                <Cards 
                    key={product.id}
                    src={product.src} 
                    title={product.title} 
                    price={product.price} 
                    id={product.id} // Pass the product ID
                    description={product.description}
                    date={product.date}
                />
            ))}
        </div>
    );
};

export default Home;
