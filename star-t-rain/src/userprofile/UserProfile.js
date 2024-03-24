import React from 'react'
import { Link } from 'react-router-dom'

export default function UserProfile() {
    // Retrieve user information from sessionStorage
    const userName = sessionStorage.getItem('userName');
    const phoneNumber = sessionStorage.getItem('phoneNumber');
    const address = sessionStorage.getItem('address');

    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrapjustify-center">
                        <div className=" w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">{userName}</h1>
                            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-3">{phoneNumber}</h2>
                            <p className="leading-relaxed mb-3">{address}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            </div>
                            <div className="flex">
                                <Link to="/manageorder">
                                    <button className="flex mr-auto text-white bg-4C8787 border-0 py-2 px-6 focus:outline-none hover:bg-4C8787 rounded">Quản Lý Đơn Hàng</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
