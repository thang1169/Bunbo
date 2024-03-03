import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const dataProduct = [
    {
        id: 1,
        name: "Bùn Bò Tái Nạm",
        rating: 1,
        image:
            "https://static.vinwonders.com/production/bun-bo-nha-trang-1.jpg",
        price: "15.000",
    },
    {
        id: 2,
        name: "Bún Bò Tái Wangyu",
        rating: 2,
        image:
            "https://img-global.cpcdn.com/recipes/020745ddc8e14bdd/680x482cq70/bun-bo-hu%E1%BA%BF-tai-n%E1%BA%A1m-recipe-main-photo.jpg",
        price: "25.000",
    },
    {
        id: 3,
        name: "Bún Bò Tô Nhỏ",
        rating: 3,
        image:
            "https://cdn3.ivivu.com/2022/09/bun-bo-hue-ivivu-3.jpg",
        price: "25.000",
    },
    {
        id: 4,
        name: "Bún Bò Gân",
        rating: 3,
        image: "https://cdn3.ivivu.com/2022/09/bun-bo-hue-ivivu-2.jpg",
        price: "25.000",
    },
];

export default function Product(data) {
    const navigate = useNavigate()
    const handleClick = () => {
        console.log(data.name);
        navigate("/prodetail", { state: data })
    };

    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4">

                        <div class="p-4 md:w-1/3">

                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" onClick={handleClick}>
                                <img class="lg:h-48 md:h-36 w-30p object-cover object-center" src="https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg" alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Bún bò tái nạm</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Quán 202</h1>
                                    <p class="leading-relaxed mb-3">120.000 VND</p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Chi tiết món ăn
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <a class="text-gray-400 inline-flex items-center leading-none text-sm ml-10">Đánh giá

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg" alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Bún bò tái nạm</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                    <p class="leading-relaxed mb-3">120.000 VND</p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Chi tiết món ăn
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <a class="text-gray-400 inline-flex items-center leading-none text-sm ml-10">Đánh giá

                                        </a>
                                    </div>
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
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Chi tiết món ăn
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <a class="text-gray-400 inline-flex items-center leading-none text-sm ml-10">Đánh giá

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg    " alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Bún bò tái nạm</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Quán 202</h1>
                                    <p class="leading-relaxed mb-3">120.000 VND</p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Chi tiết món ăn
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <a class="text-gray-400 inline-flex items-center leading-none text-sm ml-10">Đánh giá

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg" alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Bún bò tái nạm</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                    <p class="leading-relaxed mb-3">120.000 VND</p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Chi tiết món ăn
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <a class="text-gray-400 inline-flex items-center leading-none text-sm ml-10">Đánh giá

                                        </a>
                                    </div>
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
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Chi tiết món ăn
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <a class="text-gray-400 inline-flex items-center leading-none text-sm ml-10">Đánh giá

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
