import { Link } from 'react-router-dom';

export const Navbar = ({ cartItemCount }) => {
    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link to="/">My Shop</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-blue-200">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className="hover:text-blue-200">Shop</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="hover:text-blue-200">
                            Cart ({cartItemCount})
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
