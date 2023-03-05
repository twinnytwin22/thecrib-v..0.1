'use client'
import React from 'react'
import Link from "next/link";
import { urlFor } from 'lib/hooks/sanityImage';
import { ActiveIndicator, NonActiveIndicator } from 'ui/Misc/Indicator';
import { isHolderBenefit } from "ui/Misc/HolderBadge";

function RecentCollectionCard({collection}: any) {
  return (
    <div> 
        <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto content-center justify-center" >

    <img className="w-72 h-72 rounded-lg gap-10 object-cover scale-100 mx-auto content-center justify-center" 
    src={urlFor(collection?.nftImage).width(200).url()} alt="Collection Image" />
    <div className='flex justify-center mt-3 '>
        
        <h6 className='text-xs mt-0.5 uppercase text-gray-900 dark:text-white tracking-tight pr-5' key={collection.mintactive} > 
        Mint Status:</h6>{collection?.mintactive === true && <ActiveIndicator/>} 
        {collection?.mintactive === false && <NonActiveIndicator/>}
        </div>


    <div className="flex justify-between items-center mt-2">
        <div className="flex items-center space-x-4">
            <h2 className="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white" key={collection.title}>
                <Link href={`/collection/${collection?.slug.current}`}>{collection.title}</Link></h2>
            {collection?.holderbenefit === true && isHolderBenefit()}

        </div>
        <Link href={`collection/${collection?.slug.current}`} 
        className="inline-flex items-center font-medium text-primary-600 text-gray-900 dark:text-white hover:underline">
       View Drop                      
       <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
           </svg>
        </Link>

    </div>
    <div className='mx-auto' key={collection.tags}>
{collection.tags?.slice(0,3).map((tag: any, i: any) => (

  <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-900" 
  key={i}>{tag}</span>
      ))}

  </div>

</div>
</div>
  )
}

export default RecentCollectionCard