import React, { useEffect, useState } from 'react'

export default function ProductList(products) {
    console.log(products);
    const [productList, setProductList] = useState([]);
    const [restaurantDetails, setRestaurantDetails] = useState({});

    const baseURL = 'https://localhost:7096/api/Products';
    const restaurantAPI = 'https://localhost:7096/api/Restaurants';

    useEffect(() => {
        fetch(baseURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setProductList(data);
                // Extract unique restaurantIds from products
                const uniqueRestaurantIds = Array.from(new Set(data.map((product) => product.restaurantId)));
                // Fetch restaurant details for each unique restaurantId
                Promise.all(
                    uniqueRestaurantIds.map((restaurantId) => fetch(`${restaurantAPI}/${restaurantId}`).then((response) => response.json()))
                )
                    .then((restaurantData) => {
                        // Create a mapping of restaurantId to restaurantName
                        const restaurantMap = restaurantData.reduce((acc, restaurant) => {
                            acc[restaurant.restaurantId] = restaurant.restaurantName;
                            return acc;
                        }, {});
                        setRestaurantDetails(restaurantMap);
                    })
                    .catch((error) => console.error('Error fetching restaurant details:', error));
            })
            .catch((error) => console.log(error.message));
    }, [baseURL, restaurantAPI]);
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {productList.map((data) =>

                            <div class="p-4 md:w-1/3">
                                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" key={data.productId}>
                                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg" alt="blog" />
                                    <div class="p-6">
                                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{data.productName}</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3"> {restaurantDetails[data.restaurantId]}</h1>
                                        <p class="leading-relaxed mb-3">{data.price}</p>

                                        <a class="text-gray-400 items-center leading-relaxed text-sm ">Đánh giá

                                        </a>
                                        <br />
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Chi tiết món ăn
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        )}
                        {/* <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg" alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Bún bò tái nạm</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                    <p class="leading-relaxed mb-3">120.000 VND</p>

                                    <a class="text-gray-400 items-center leading-relaxed text-sm ">Đánh giá

                                    </a>
                                    <br />
                                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Chi tiết món ăn
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg" alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Bún bò tái nạm</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                    <p class="leading-relaxed mb-3">120.000 VND</p>

                                    <a class="text-gray-400 items-center leading-relaxed text-sm ">Đánh giá

                                    </a>
                                    <br />
                                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Chi tiết món ăn
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg" alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Bún bò tái nạm</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                    <p class="leading-relaxed mb-3">120.000 VND</p>

                                    <a class="text-gray-400 items-center leading-relaxed text-sm ">Đánh giá

                                    </a>
                                    <br />
                                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Chi tiết món ăn
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg" alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Bún bò tái nạm</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                    <p class="leading-relaxed mb-3">120.000 VND</p>

                                    <a class="text-gray-400 items-center leading-relaxed text-sm ">Đánh giá

                                    </a>
                                    <br />
                                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Chi tiết món ăn
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg" alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Bún bò tái nạm</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                    <p class="leading-relaxed mb-3">120.000 VND</p>

                                    <a class="text-gray-400 items-center leading-relaxed text-sm ">Đánh giá

                                    </a>
                                    <br />
                                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Chi tiết món ăn
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}
