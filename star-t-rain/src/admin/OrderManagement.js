import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function OrderManagement() {
    const [orderList, setOrderList] = useState([]);

    const baseURL = `http://fptcloud28.fptu2024.meu-solutions.com/api/Orders`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(baseURL);
                if (!response.data) {
                    throw new Error('No data available');
                }
                console.log(response);
                // Cập nhật orderList với dữ liệu được định dạng lại ngày tháng
                const formattedData = response.data.map(order => ({
                    ...order,
                    checkOutTime: formatDate(order.checkOutTime),
                    preparedTime: formatDate(order.preparedTime)
                }));
                setOrderList(formattedData);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Xử lý lỗi nếu có
            }
        };

        fetchData();
    }, []);

    // Hàm định dạng ngày tháng
    const formatDate = (dateTimeString) => {
        // Tạo một đối tượng ngày tháng từ chuỗi ngày tháng
        const dateObject = new Date(dateTimeString);
        // Định dạng ngày tháng theo ý muốn (VD: dd/MM/yyyy)
        const formattedDate = `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`;
        return formattedDate;
    };

    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Mã đơn
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ngày đặt
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ngày giao
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Tổng tiền
                            </th>
                            <th scope="col" class="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderList.map((data) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {data.orderId}
                                </th>
                                <td class="px-6 py-4">
                                    {data.checkOutTime}
                                </td>
                                <td class="px-6 py-4">
                                    {data.preparedTime}
                                </td>
                                <td class="px-6 py-4">
                                    {data.total}
                                </td>
                                <td class="px-6 py-4">
                                </td>
                            </tr>
                        ))}
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
    );
}
