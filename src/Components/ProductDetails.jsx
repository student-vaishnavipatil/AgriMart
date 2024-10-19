import React from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details';

// Sample data (this could be replaced with API data)
const products = [
    {
    id: 'moong',
    title: 'Moong Dal',
    description: 'High-quality Moong Dal, rich in protein, perfect for cooking various Indian dishes such as dal and khichdi.',
    price: '100',
    date: '26 Nov 2024',
    src: '/moong.webp',
    loc: 'Rajasthan, India',
    variety: 'Split Green Moong Dal',
    unit: '1 kg'
  },
  {
    id: 'tur-dal',
    title: 'Tur Dal',
    description: 'Tur Dal is a rich source of protein and an essential part of Indian cuisine. It’s ideal for making dal and sambhar.',
    price: '80',
    date: '26 Nov 2024',
    src: '/Tur Dal.webp',
    loc: 'Maharashtra, India',
    variety: 'Organic Desi Tur Dal',
    unit: '1 kg'
  },
  {
    id: 'onion',
    title: 'Onion',
    description: 'Fresh and firm red onions, suitable for cooking, salads, and garnishing dishes.',
    price: '60',
    date: '26 Nov 2024',
    src: '/Onion.webp',
    loc: 'Nashik, Maharashtra',
    variety: 'Red Onions',
    unit: '1 kg'
  },
  {
    id: 'bajra',
    title: 'Bajra',
    description: 'Bajra, or Pearl Millet, is a highly nutritious grain that is gluten-free and perfect for making roti and porridge.',
    price: '50',
    date: '26 Nov 2024',
    src: '/Bajra.webp',
    loc: 'Gujarat, India',
    variety: 'Organic Pearl Millet',
    unit: '1 kg'
  },
  {
    id: 'maize',
    title: 'Maize',
    description: 'Sweet corn freshly harvested from sustainable farms. Ideal for soups, salads, and snacks.',
    price: '50',
    date: '26 Nov 2024',
    src: '/maize.webp',
    loc: 'Punjab, India',
    variety: 'Sweet Corn',
    unit: '1 kg'
  },
  {
    id: 'potato',
    title: 'Potato',
    description: 'Freshly harvested potatoes from organic farms, perfect for cooking, baking, and making snacks.',
    price: '30',
    date: '26 Nov 2024',
    src: '/potato.webp',
    loc: 'Uttar Pradesh, India',
    variety: 'White Potato',
    unit: '1 kg'
  },
  {
    id: 'paddy',
    title: 'Paddy',
    description: 'High-quality paddy rice from sustainable fields, ideal for making a variety of rice dishes.',
    price: '40',
    date: '26 Nov 2024',
    src: '/paddy.webp',
    loc: 'West Bengal, India',
    variety: 'Basmati Rice',
    unit: '1 kg'
  },
  {
    id: 'groundnut',
    title: 'Groundnut',
    description: 'Premium grade groundnuts, rich in flavor, ideal for oil extraction or direct consumption.',
    price: '70',
    date: '26 Nov 2024',
    src: '/groundnut.webp',
    loc: 'Gujarat, India',
    variety: 'Bold Groundnut',
    unit: '1 kg'
  }
  // Add more products as needed
];

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL

  // Find the product based on the ID
  const product = products.find(item => item.id === id);

  // Check if the product exists
  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Render the Details component with the product data
  return (
    <div>
      <Details
        src={product.src}
        title={product.title}
        description={product.description}
        price={product.price}
        date={product.date}
        loc={product.loc}
        variety={product.variety}
        unit={product.unit}
      />
    </div>
  );
};

export default ProductDetails;
