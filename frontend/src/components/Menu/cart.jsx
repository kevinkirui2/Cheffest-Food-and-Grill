import React from 'react';

const Cart = ({ items = [] }) => {
    return (
        <div className="cart fixed p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
            {items.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
            ) : (
                <ul className="block">
                    {items.map((item, index) => (
                        <li key={index} className="py-4 block">
                            <span className="text-lg font-medium text-gray-700">{item.name}</span>
                            <span className="text-green-600 font-semibold">{item.price}/=</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
