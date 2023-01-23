import Link from 'next/link'
import React from 'react'
import AllCollectorsTable from 'ui/Sections/AllCollectorsTable'
import EmailSignUp from 'ui/Sections/EmailSignUp'
import { getOwnersForEthCollection, getOwnersPolygonCollection } from 'lib/hooks/get-collection-data'




 export function Collectors() {
  const contract = "0x148280a1395af6F430248c2E4B8063c69B7cA23E"
  const collectors = getOwnersForEthCollection(contract) 

  return (
    <div>
    <div className="bg-white dark:bg-gray-900" >
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">🔥</span> <span className="text-sm font-medium">Not a collector yet? Let's make it happen!</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </a>
        <AllCollectorsTable collectors={collectors}/>    
        <p className="mt-20 text-gray-900 dark:text-white" >Are you a collector?</p>
        <Link href='/holder'>
        <button type="button" className="mt-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">View Your NFTs</button>
      </Link>
    </div>  
    <EmailSignUp/>
</div>
      
    </div>
  )
}

