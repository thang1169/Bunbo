import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { axiosAuth } from '../lib/axios';

export default function Restaurant() {
    const [restaurantList, setRestaurantList] = useState([]);

    // const baseURL = 'https://localhost:7096/api/Restaurants';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosAuth.get(`/Restaurants`);
                if (!response.data) {
                    throw new Error('No data available');
                }
                setRestaurantList(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="flex flex-col text-center w-full mb-5">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Thương Hiệu</h1>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {restaurantList.map((data) => (
                            <div className="p-4 md:w-1/3" key={data.restaurantId}>
                                <Link to={`/restaurantdetail/${data.restaurantId}`}>
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img className="h-1/2 w-full object-cover object-center" src="https://furnibuy.com/wp-content/uploads/2021/04/furnibuy-tu-van-chon-ban-an-4-ghe-dep-cho-quan-bun-bo-hue.jpg" alt="blog" />
                                        <div className="p-6">
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{data.restaurantName}</h1>
                                            <p className="leading-relaxed mb-3">{data.description}</p>
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
