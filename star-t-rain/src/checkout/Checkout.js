import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    const address = sessionStorage.getItem('address');

    useEffect(() => {
        const cartItemsFromSession = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        setCartItems(cartItemsFromSession);
    }, []);
    return (
        <div>
            <div class="bg-white py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl sm:text-center">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Thanh Toán</h2>
                    </div>
                    {cartItems.map((item) => (
                        <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div class="p-8 sm:p-10 lg:flex-auto">
                                <h3 class="text-xl font-bold tracking-tight text-gray-900">Địa chỉ giao hàng</h3>
                                <p class="mt-6 text-base leading-7 text-gray-600">{address}</p>
                                <div class="mt-10 flex items-center gap-x-4">
                                    <h4 class="text-xl flex-none font-semibold leading-6 text-4C8787">Thành tiền</h4>
                                    <div class="h-px flex-auto bg-gray-100"></div>
                                </div>

                                <div class="mt-5 mb-2 flex justify-between">
                                    <p class="text-gray-700">Subtotal</p>
                                    <p class="text-gray-700">{item.price * item.quantity} VNĐ</p>
                                </div>
                                <div class="flex justify-between">
                                    <p class="text-gray-700">Shipping</p>
                                    <p class="text-gray-700">15000 VNĐ</p>
                                </div>
                                <hr class="my-4" />
                                <div class="flex justify-between">
                                    <p class="text-gray-700">Total</p>
                                    <div class="">
                                        <p class="mb-1 text-gray-700">{item.price * item.quantity + 15000} VNĐ</p>

                                    </div>
                                </div>

                                <a href="/manageorder" class="mt-10 block w-full rounded-md bg-4C8787 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm ">Giao hàng thành công</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
