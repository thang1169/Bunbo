import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <main class="ml-30 pt-5 overflow-auto">
                <div class="px-6 py-5">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-white rounded-3xl p-8 mb-5">
                            <div class="grid grid-cols-2 gap-x-20">
                                <div>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div class="col-span-2">
                                            <div class="p-4 bg-green-100 rounded-xl">
                                                <div class="font-bold text-xl text-gray-800 leading-none">Tổng số đơn hàng</div>
                                                <div class="mt-5">
                                                    <button type="button" class="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                                                        20 đơn
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
                                            <div class="font-bold text-xl leading-none">200.000 VNĐ</div>
                                            <div class="mt-2">Tổng doanh số</div>
                                        </div>
                                        <div class="p-4 bg-yellow-100 rounded-xl text-gray-800">
                                            <div class="font-bold text-xl leading-none">20</div>
                                            <div class="mt-2">Số lượng khách hàng</div>
                                        </div>
                                        <div class="col-span-2">
                                            <div class="p-4 bg-purple-100 rounded-xl text-gray-800">
                                                <div class="font-bold text-xl leading-none">5</div>
                                                <div class="mt-2">Số lượng nhà hàng đã liên kết</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 class="text-2xl font-bold mb-4">Quản Lý</h2>

                                    <div class="space-y-4">
                                        <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                            <Link to="/usermanagement">
                                                <p class="font-bold text-4C8787-800 text-xl">Tài khoản</p>
                                            </Link>
                                        </div>

                                        <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                            <Link to="/ordermanagement">
                                                <p class="font-bold text-4C8787-800 text-xl">Đơn hàng</p>
                                            </Link>
                                        </div>

                                        <div class="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                            <Link to="/productmanagement">
                                                <p class="font-bold text-4C8787-800 text-xl">Sản phẩm </p>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
