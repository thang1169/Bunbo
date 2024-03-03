import React from 'react'
import { Link } from 'react-router-dom'

export default function UserManagement() {
    return (
        <div>


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Khách hàng
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Địa chỉ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Tên đăng nhập
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Số điện thoại
                            </th>
                            <th scope="col" class="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Ký túc xá khu B, Làng Đại Học
                            </td>
                            <td class="px-6 py-4">
                                nnhi
                            </td>
                            <td class="px-6 py-4">
                                xxxxxxxx09
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-4C8787 dark:text-blue-500 hover:underline">Ẩn</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Ký túc xá khu B, Làng Đại Học
                            </td>
                            <td class="px-6 py-4">
                                nnhi
                            </td>
                            <td class="px-6 py-4">
                                xxxxxxxx09
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-4C8787 dark:text-blue-500 hover:underline">Ẩn</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Ký túc xá khu B, Làng Đại Học
                            </td>
                            <td class="px-6 py-4">
                                nnhi
                            </td>
                            <td class="px-6 py-4">
                                xxxxxxxx09
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-4C8787 dark:text-blue-500 hover:underline">Ẩn</a>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <Link to="/dashboard">
                <button class="mt-5 inline-flex items-center px-4 py-2 bg-4C8787 hover:bg-4C8787 text-white text-sm font-medium rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>

                    Quay lại
                </button>
            </Link>
        </div>
    )
}
