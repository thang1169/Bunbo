import React from 'react'
import ProductList from '../product/ProductList'

export default function () {
    return (
        <div>

            <div class="bg-white">
                <div class="pt-6">

                    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                            <img src="https://hcm.inhat.vn/wp-content/uploads/2019/10/quan-bun-bo-sai-gon.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center" />
                        </div>
                        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img src="https://afamilycdn.com/150157425591193600/2023/3/25/bun-bo-nga-bui-nga-bui-1679480736611684708028-1679731650211-16797316546951647355496-1679734994329-1679735001166835223292.jpg" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center" />
                            </div>
                            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img src="https://vcdn1-dulich.vnecdn.net/2023/11/11/IMG-3926-1699688632.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=xdz1xfYUxgXwrcJbrhoQPg" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center" />
                            </div>
                        </div>
                        <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                            <img src="https://image.phunuonline.com.vn/fckeditor/upload/2020/20201009/images/to-bun-bo-hai-nguoi-an-_441602229774.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center" />
                        </div>
                    </div>

                    <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 ">
                        <div class="lg:col-span-2 lg:pr-8">
                            <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Bún Bò Sinh Viên</h1>
                        </div>


                        <div class="mt-4 lg:row-span-3 lg:mt-0  lg:pl-2">

                            <div>
                                <h3 class="text-sm font-medium text-gray-900">Địa Chỉ</h3>

                                <div class="mt-4 space-y-6">
                                    <p class="text-base text-gray-900">Ký túc xá khu B, Làng Đại Học</p>
                                </div>
                            </div>

                            <div class="mt-10">
                                <h3 class="text-sm font-medium text-gray-900">Các món được đề cử</h3>

                                <div class="mt-4">
                                    <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                                        <li class="text-gray-400"><span class="text-gray-600">Bún bò nạm</span></li>
                                        <li class="text-gray-400"><span class="text-gray-600">Bún bò giò heo</span></li>
                                        <li class="text-gray-400"><span class="text-gray-600">Bùn bò thập cẩm</span></li>
                                        <li class="text-gray-400"><span class="text-gray-600">Bún bò đặc biệt</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="mt-10">
                                <h2 class="text-sm font-medium text-gray-900">Tiêu chí của quán</h2>

                                <div class="mt-4 space-y-6">
                                    <p class="text-sm text-gray-600">Phục vụ nhiệt tình, thân thiện</p>
                                </div>
                            </div>


                        </div>

                        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">

                            <ProductList />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
