'use client'

import React from 'react'
import { LayloCard } from 'ui/Cards/LayloCard'

function LayloSection() {
  return (
    <div className="bg-white dark:bg-gray-900">
    <div className="flex flex-col md:flex-col gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
 <LayloCard/>
        <div className="order-first md:order-last mt-4 md:mt-0">
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">Never miss a drop! Ever.</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Algorithms never place nice. So whether you are a current or future collector of the CRIB, or just a fan or Twinny Twin, sign up for notification on upcoming drops, free mints, performances & more!</p>
           
        </div>
    </div>
</div>
  )
}

export default LayloSection