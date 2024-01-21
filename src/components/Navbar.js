import React from 'react'
import Logo from '../images/nft.png'
import { useRef } from 'react';


function Navbar() {
    const createNFTRef = useRef(null);

    const handleCreateNFTClick = () => {
        if (createNFTRef.current) {
        window.scrollTo({
            top: createNFTRef.current.offsetTop,
            behavior: 'smooth',
        });
        }
    };
  return (
    
        <nav class=" border-b-2 border-b-purple-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-16">
            <a class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={Logo} class="h-10" alt="Flowbite Logo" />
                <span class="text-[#222324] font-bold self-center text-2xl whitespace-nowrap">#NFT_MART</span>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                type="button"
                onClick={handleCreateNFTClick}
                className="text-white shadow shadow-purple-500 bg-blue-700 font-bold hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-3 text-center bg-gradient-to-r from-purple-500 to-pink-500"
                >
                Create a NFT
                </button>
                
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
                    <a href="#" class="block py-2 px-3 md:p-0 font-bold text-[#222324] bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 md:p-0 font-bold text-[#222324] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 md:p-0 font-bold text-[#222324] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 md:p-0 font-bold text-[#222324] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
  )
}

export default Navbar