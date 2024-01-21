import React from 'react'
import DeviceImg from '../images/Screenshot 2024-01-13 at 20.06.59.png'
import NFTImg from '../images/Screenshot 2024-01-13 at 20.29.09.png'
function Heading() {
  return (
    <div class='flex flex-row mt-20 px-40'>
        
        <div class="pr-20">
            <h1 class="mt-16 mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 lg:text-6xl">Create your NFT in the category of <mark class="px-1 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">Art & Journalism</mark></h1>
            <p class="mt-16 text-lg font-normal text-gray-500 lg:text-xl">Here at NFT Mart we make sure that artists and journalists from all around the world can have a reliable platform to share their creations and, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>

        <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt=""/>
            </div>
        </div>

    </div>
  )
}

export default Heading