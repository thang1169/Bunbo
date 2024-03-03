import React from 'react'
import Searchbar from '../searchbar/Searchbar'
import Product from '../product/Product'
import Slides from '../swiper/Slides'
import HomeBanner from '../banner/HomeBanner'
import TopRatting from '../product/TopRatting'
import ProductList from '../product/ProductList'

export default function Home() {

    return (
        <div >
            <header className="text-gray-600 body-font">

                <nav className=" flex flex-wrap items-center text-base justify-center">
                    <a className="mx-10 my-2 hover:text-gray-700 ">

                        Miễn phí giao hàng
                    </a>
                    <a className="mx-10 my-2 hover:text-gray-700">Khuyến mãi</a>
                    <a className="mx-10 my-2 hover:text-gray-700">Hỗ trợ 24/7</a>
                </nav>

            </header>
            <Slides />
            <ProductList />
            <HomeBanner />
            <h2 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900 pt-10 ml-10">ĐÁNH GIÁ CAO</h2>
            <TopRatting />
        </div>

    )
}
