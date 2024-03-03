import React, { useState } from 'react'
import ProductList from '../product/ProductList'
import { Link } from 'react-router-dom'


export default function Menu() {

    return (
        <div>

            <div class="bg-white">
                <div>

                    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div class="flex items-baseline justify-start border-b border-gray-200 pb-6 pt-10">
                            <p class='text-4C8787 text-xl w-1/4' >Danh mục</p>
                            <h1 class=" text-4xl font-bold tracking-tight text-gray-900 w-1/4">Món Ăn</h1>
                        </div>

                        <section aria-labelledby="products-heading" class="pb-24 pt-6">

                            <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

                                <form class="hidden lg:block">

                                    <ul role="list" class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">

                                        <li>
                                            <Link to={'/bun-bo-pho-da'} href="#">Bún Bò Thố Đá</Link>
                                        </li>
                                        <li>
                                            <a href="#">Bún Bò Truyền Thống</a>
                                        </li>
                                        <li>
                                            <a href="#">Món Thêm</a>
                                        </li>
                                        <li>
                                            <a href="#">Nước Giải Khát</a>
                                        </li>
                                    </ul>



                                </form>

                                <div class="lg:col-span-3">

                                    <ProductList />
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

        </div>
    )
}
