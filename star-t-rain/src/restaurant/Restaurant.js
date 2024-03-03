import React from 'react'
import ProductList from '../product/ProductList'
import { Link } from 'react-router-dom'

export default function Restaurant() {
    return (
        <div>
            <div class="flex flex-col text-center w-full mb-5">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
            </div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3">
                            <Link to='/restaurantdetail'>
                                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img class=" h-1/2 w-full object-cover object-center" src="https://furnibuy.com/wp-content/uploads/2021/04/furnibuy-tu-van-chon-ban-an-4-ghe-dep-cho-quan-bun-bo-hue.jpg" alt="blog" />
                                    <div class="p-6">
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Bún Bò Sinh Viên</h1>
                                        <p class="leading-relaxed mb-3">Ký túc xá khu B, Làng Đại Học</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class=" h-1/2 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                <div class="p-6">
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class=" h-1/2 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                <div class="p-6">
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
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
                </div>
            </section>
        </div>
    )
}
