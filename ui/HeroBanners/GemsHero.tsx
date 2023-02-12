import Link from 'next/link'
import React from 'react'
import LatestPostCard from 'ui/Cards/PostCards/LatestPostCard'
import CollectionMinterCard from 'ui/Cards/MintingCard';

export default function GemsHero() {
    const bgImage = "/assets/lving-small.png"
  return (
    <section className="bg-white bg-cover dark:bg-gray-900 w-full rounded-2xl mt-12" style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', }} >
        <div className='bg-black bg-opacity-75 grid max-w-screen rounded-2xl' style={{ backdropFilter: 'blur(8px)',}}>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center justify-items-center" >
        <div className="p-0 md:pl-12 mr-auto place-self-center lg:col-span-6 justify-items-center items-center">

            <h1 className="max-w-xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">Introducing: Gems</h1>
            <a href="/collection/cribmusicv1">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">The easiest way to support, whenever you want</h5>
        </a>
        <p className="mb-3 font-normal text-gray-200">Each gems goes towards the next idea, the tool, the next release, the next THING.</p>
         
        </div>
        <div className="mt-8 lg:mt-0 lg:col-span-6 lg:flex mx-auto ">
            <CollectionMinterCard/>
        </div>                
    </div>
    </div>
</section>
  )
}
