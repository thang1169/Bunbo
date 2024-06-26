import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [productList, setProductList] = useState([]);
    const [restaurantMap, setRestaurantMap] = useState({});

    const baseURL = 'http://fptcloud28.fptu2024.meu-solutions.com/api/Products';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productResponse = await axios.get(baseURL);
                if (!productResponse.data) {
                    throw new Error('No data available');
                }
                setProductList(productResponse.data);

                const uniqueRestaurantIds = [...new Set(productResponse.data.map(product => product.restaurantId))];
                const restaurantDataPromises = uniqueRestaurantIds.map(restaurantId => axios.get(`http://fptcloud28.fptu2024.meu-solutions.com/api/Restaurants/${restaurantId}`));

                const restaurantDataResponses = await Promise.all(restaurantDataPromises);
                const restaurantData = restaurantDataResponses.map(response => response.data);

                const map = restaurantData.reduce((acc, restaurant) => {
                    acc[restaurant.restaurantId] = restaurant.restaurantName;
                    return acc;
                }, {});

                setRestaurantMap(map);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productList.map((data) => (
                            <div className="p-4 md:w-1/3" key={data.productId}>
                                <Link to={`/prodetail/${data.productId}`}>
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg" alt="blog" />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{data.productName}</h2>
                                            <p className="text-l leading-relaxed mb-3">{restaurantMap[data.restaurantId]}</p>
                                            <p className="leading-relaxed mb-3">{data.price}</p>

                                            <a className="text-gray-400 items-center leading-relaxed text-sm ">Đánh giá</a>
                                            <br />
                                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Chi tiết món ăn
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
