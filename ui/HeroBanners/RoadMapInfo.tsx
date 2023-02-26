import Link from 'next/link'
import React from 'react'
import LatestPostCard from 'ui/Cards/PostCards/LatestPostCard'

export default function RMInfo() {
    const bgImage = "/assets/blackprint.png"
  return (
    <section className="bg-white bg-cover dark:bg-gray-900 max-w-sm md:max-w-6xl w-full my-8 shadow-md rounded-2xl mx-auto" style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', }} >
        <div className='bg-black bg-opacity-75 grid max-w-screen rounded-2xl' style={{ backdropFilter: 'blur(1px)',}}>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 items-center justify-items-center" >
        <div className="p-0  mr-auto place-self-center lg:col-span-6 justify-items-center items-center text-center mx-auto">
        <h4 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white text-center">Check Out Our Blueprint</h4>

            <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-200">Our version of a roadmap </h5>
    
        <p className="max-w-lg mb-6 mt-4 font-normal text-gray-200 mx-auto">On the road to open-source, we'd like to be as transparent as possible with our milestones, plans, and intentions. There are many ways you can contribute right now.</p>
         
        <a href="/roadmap" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg hover:bg-red-600 bg-blue-800  text-white ">
                    View Blueprint
              </a> 
        </div>
      
    </div></div>

</section>
  )
}
