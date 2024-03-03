import React from 'react'
import { Link } from 'react-router-dom'

export default function UserProfile() {
    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrapjustify-center">

                        <div class=" w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-5">Nguyễn Nhi</h1>
                            <h2 class="text-sm title-font text-gray-500 tracking-widest mb-3">xxxxxxxx09</h2>
                            <p class="leading-relaxed mb-3">Trường đại học FPT</p>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            </div>
                            <div class="flex">
                                <Link to="/manageorder">
                                    <button class="flex mr-auto text-white bg-4C8787 border-0 py-2 px-6 focus:outline-none hover:bg-4C8787 rounded">Quản Lý Đơn Hàng</button>
                                </Link>
                                <button class="flex ml-auto text-white bg-4C8787 border-0 py-2 px-6 focus:outline-none hover:bg-4C8787 rounded">Thay Đổi Địa Chỉ</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
