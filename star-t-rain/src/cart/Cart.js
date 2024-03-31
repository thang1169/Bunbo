import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const cartItemsFromSession = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        setCartItems(cartItemsFromSession);
    }, []);

    const handleCheckout = async () => {
        try {
            // Thực hiện các bước thanh toán ở đây (nếu cần)

            // Xóa đơn hàng khỏi giỏ hàngw

            // Chuyển hướng sang trang thanh toán
            navigate('/checkout')
        } catch (error) {
            console.error('Error during checkout:', error);
            // Xử lý lỗi nếu có
        }
    };



    return (
        <div>
            <div className="bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Giỏ hàng</h1>
                {cartItems.map((item, index) => (
                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0" key={index}>
                        <div className="rounded-lg md:w-2/3">
                            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                <img src="https://statics.vinpearl.com/bun-bo-hue-ngon-o-sai-gon-5_1632128863.jpg" alt="product-image" className="w-full rounded-lg sm:w-40" />
                                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div className="mt-5 sm:mt-0">
                                        <h2 className="text-lg font-bold text-gray-900">{item.productName}</h2>
                                        <p className="mt-1 text-xs text-gray-700">{item.price} VNĐ</p>
                                    </div>
                                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div className="flex items-center border-gray-100">
                                            <input className="h-8 w-8 bg-white text-center text-xs outline-none" type="number" value={item.quantity} min="1" readOnly />
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <p className="text-sm">{item.price * item.quantity} VNĐ</p>
                                            {/* Đặt sự kiện xóa sản phẩm ra khỏi giỏ hàng */}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">Subtotal</p>
                                <p className="text-gray-700">{item.price * item.quantity} VNĐ</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-700">Shipping</p>
                                <p className="text-gray-700">15000 VNĐ</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-gray-700">Total</p>
                                <div>
                                    <p className="mb-1 text-gray-700">{item.price * item.quantity + 15000} VNĐ</p>
                                </div>
                            </div>
                            <button onClick={handleCheckout} className="mt-6 w-full rounded-md bg-4C8787 py-1.5 font-medium text-white">Thanh toán</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
