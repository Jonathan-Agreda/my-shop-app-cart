import { useState } from 'react';

export const ProductCard = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
            <div className="flex items-center mt-2">
                <button
                    onClick={decreaseQuantity}
                    className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                >
                    -
                </button>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 text-center border-t border-b"
                />
                <button
                    onClick={increaseQuantity}
                    className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                >
                    +
                </button>
            </div>
            <button
                onClick={() => addToCart(product, quantity)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Add to Cart
            </button>
        </div>
    );
};