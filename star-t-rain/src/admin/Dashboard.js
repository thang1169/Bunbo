import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <main class="ml-30 pt-5 overflow-auto">
                <div class="px-6 py-5">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-white rounded-3xl p-8 mb-5">
                            <div>
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
