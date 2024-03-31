import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ManageOrder() {
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        const cartItemsFromSession = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        setCartItems(cartItemsFromSession);
    }, []);
    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden ">
                {cartItems.map((item) => (
                    <div class="container px-5 py-5 mx-auto border-2 border-opacity-60 border-gray-200 rounded-lg mb-20">
                        <div class="flex items-baseline justify-start border-b border-gray-200 ">
                            <p class='text-2xl text-4C8787 text-xl w-1/6 mb-5'>Đơn hàng</p>
                        </div>
                        <div class="mt-2 -my-8 divide-y-2 divide-gray-100">

                            <div class="py-8 flex flex-wrap md:flex-nowrap">
                                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://statics.vinpearl.com/bun-bo-hue-ngon-o-sai-gon-5_1632128863.jpg" />
                                </div>
                                <div class="md:flex-grow">
                                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{item.productName}</h2>
                                    <p class="leading-relaxed text-xl">{item.quatity}</p>
                                    <p class="leading-relaxed text-xl">{item.price} VNĐ</p>
                                </div>
                            </div>

                        </div>
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
                    </div>
                ))}
            </section>
        </div>
    )
}
