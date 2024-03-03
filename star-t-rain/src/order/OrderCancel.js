import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderCancel() {
    return (
        <div>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center mb-5 px-4">
                <Link to="/manageorder" class="mr-16 font-normal active:text-4C8787 active:border-4C8787 active active:border-solid active:border-1px">Đang Vận Chuyển</Link>
                <Link to="success" class="mr-16 font-normal active:text-4C8787 active:border-4C8787 active active:border-solid active:border-1px">Thành Công</Link>
                <Link to="cancel" class="mr-16 font-normal active:text-4C8787 active:border-4C8787 active:border-solid active:border-1px">Đã Hủy</Link>
            </nav>
            <section class="text-gray-600 body-font overflow-hidden">

                <div class="container px-5 py-5 mx-auto border-2 border-opacity-60 border-gray-200 rounded-lg">
                    <div class="flex items-baseline justify-start border-b border-gray-200 ">
                        <p class='text-2xl text-4C8787 text-xl w-1/6 mb-5'>Danh mục</p>
                        <p class='text-xl text-4C8787 text-xl w-2/3 mb-5'>Đơn hàng ngày 30/12/2002</p>
                    </div>
                    <div class="-my-8 divide-y-2 divide-gray-100">
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-semibold title-font text-gray-700">CATEGORY</span>
                                <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                                <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                <a class="text-indigo-500 inline-flex items-center mt-4">Mua lại
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-semibold title-font text-gray-700">CATEGORY</span>
                                <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
                                <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                            </div>
                            <div class="md:flex-grow">
                                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Woke master cleanse drinking vinegar salvia</h2>
                                <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                <a class="text-indigo-500 inline-flex items-center mt-4">Learn More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
