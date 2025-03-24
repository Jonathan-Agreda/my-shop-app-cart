export const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p>${product.price}</p>
            <div className="flex items-center mt-2">
                <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};