'use client'
import React from 'react'
import { useSession } from "next-auth/react"

function HolderSettings() {
    const { data: session, status } = useSession()



  return (
    <div>
        
        <section className="">
  <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Your Information & Settings</h2>
      <form action="#">
          <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Ethereum Address</label>
                  <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={`${session?.address}`} placeholder="Type product name" readOnly/>
              </div>
          </div>
      </form>
  </div>
</section>
    </div>
  )
}

export default HolderSettings