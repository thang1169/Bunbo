import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header class="text-black-600 body-font mb-10">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <i class="fa-solid fa-house w-10 h-10 text-black p-3 rounded-full" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </i>
                    <span class="ml-3 text-xl">Bún Bò Ghiền</span>
                </a>

                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to='/login' class="mr-5 hover:text-gray-900"><i class="fa-regular fa-user"></i></Link>
                    <Link to='/cart' class="mr-5 hover:text-gray-900"><i class="fa-solid fa-cart-shopping"></i></Link>
                </nav>
                <Link to="/dashboard">
                    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </Link>
            </div>

            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center border-t border-b border-black border-solid border border-2-0 border-r-0 border-l-0 px-4">
                <Link to="/" class="mr-16 font-normal active:text-4C8787 active:border-4C8787 active:border-solid active:border-1px">TRANG CHỦ</Link>
                <Link to="/bun-bo-tho-da" class="mr-16 font-normal active:text-4C8787 active:border-4C8787 active:border-solid active:border-1px">THỰC ĐƠN</Link>

                <Link to="/restaurant" class="mr-16 font-normal active:text-4C8787 active:border-4C8787 active:border-solid active:border-1px">THƯƠNG HIỆU</Link>
                <Link to="/contact" class="mr-16 font-normal active:text-4C8787 active:border-4C8787 active:border-solid active:border-1px">LIÊN HỆ</Link>
                <Link to="/order" class="mr-16 font-normal active:text-4C8787 active:border-4C8787 active:border-solid active:border-1px">ĐƠN HÀNG</Link>
                <Link to="/userpofile" class="mr-16 font-normal active:text-4C8787 active:border-4C8787 active:border-solid active:border-1px">THÔNG TIN</Link>
            </nav>


        </header>

    )
}
