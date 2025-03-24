export const Cart = ({ cartItems }) => {
    // Calcular el total de la compra
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="border-b py-2">
                                <div className="flex justify-between items-center">
                                    <span>{item.title}</span>
                                    <span>${item.price} x {item.quantity}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
                    </div>
                </>
            )}
        </div>
    );
}
