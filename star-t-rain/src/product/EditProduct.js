import React from 'react'

export default function EditProduct() {
    return (
        <div>
            <div class="container px-5 py-5 mx-auto w-full dark:bg-gray-950">
                <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-1 ">
                    <h1 class="text-xl font-bold text-center mb-4 dark:text-gray-200">Chỉnh sửa món ăn</h1>
                    <form action="#">
                        <div class="mb-4">
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tên món ăn</label>
                            <input type="email" id="email" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Tên món ăn" required />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tên quán</label>
                            <input type="email" id="email" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Tên quán" required />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Giá</label>
                            <input type="email" id="email" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Giá tiền" required />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Hình ảnh</label>
                            <input type="email" id="email" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Địa chỉ hình ảnh" required />
                        </div>

                        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-4C8787 hover:bg-4C8787 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Chỉnh sửa</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
