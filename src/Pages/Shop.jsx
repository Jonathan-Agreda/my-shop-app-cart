import { useState, useEffect } from 'react';
import { ProductCard } from '../Components/ProductCard';

export const Shop = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Shop</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};