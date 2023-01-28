import Link from 'next/link'
import React from 'react'
import LatestPostCard from 'ui/Cards/PostCards/LatestPostCard'

export default function UpComingDrop() {
    const bgImage = "/assets/lving-small.png"
  return (
    <section className="bg-white bg-cover dark:bg-gray-900 w-[100vw]" style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', }} >
        <div className='bg-black bg-opacity-75 grid max-w-screen' style={{ backdropFilter: 'blur(8px)',}}>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center justify-items-center" >
        <div className="mr-auto place-self-center lg:col-span-6 justify-items-center items-center">
        <h4 className="max-w-2xl mb-4 text-md font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Upcoming Drop</h4>

            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">The Crib: Essentials Vol</h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get Notified
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <Link href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  rounded-lg  focus:ring-4 focus:ring-gray-100 text-white hover:bg-gray-700 focus:ring-gray-800">
                View Drop
            </Link> 
        </div>
        <div className="mt-8 lg:mt-0 lg:col-span-6 lg:flex ">
            <LatestPostCard/>
        </div>                
    </div>
    </div>
</section>
  )
}
