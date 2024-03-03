import React from 'react'

export default function Searchbar() {
    const buttonStyle = {
        backgroundColor: '#4C8787',
        color: '#ffffff'
    }
    return (
        <div className='my-5 mx-20 flex items-center justify-center h-full'>


            <form class="flex items-center">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full ">

                    <input type="text" id="simple-search" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80-percent ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tên món ăn, tên quán..." required />
                </div>
                <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-4C8787 rounded-lg border">
                    <p>Tìm</p>
                </button>
            </form>


        </div>
    )
}
