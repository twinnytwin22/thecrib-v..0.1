'use client'
import React from "react";
import Link from "next/link";
import { urlFor } from 'lib/hooks/sanityImage';
import { ActiveIndicator, NonActiveIndicator } from 'ui/Misc/Indicator';
import { isHolderBenefit } from "ui/Misc/HolderBadge";

  export default function RecentCollections(collection: any) {
  console.log(collection, 'collection')
    

    return (
      <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Recent Drops</h2>
      </div> 
      <div className="grid gap-8 lg:grid-cols-3">
          {collection.collections.result.slice(0,3).map((collection: any, i:any) => (
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={i}>

              <img className="w-72 h-72 rounded-lg gap-10 object-cover scale-100" 
              src={urlFor(collection?.nftImage).width(200).url()} alt="Collection Image" />
              <div className='flex justify-center mb-3 '>
                  
                  <h6 className='text-xs mt-0.5 uppercase text-gray-900 dark:text-white tracking-tight pr-5' > 
                  Mint Status:</h6>{collection?.mintactive === true && ActiveIndicator()} 
                  {collection?.mintactive === false && NonActiveIndicator()}
                  </div>


              <div className="flex justify-between items-center mt-5">
                  <div className="flex items-center space-x-4">
                      <h2 className="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">
                          <Link href={`/collections/${collection?.slug.current}`}>{collection.title}</Link></h2>
                      {collection?.holderbenefit === true && isHolderBenefit()}

                  </div>
                  <Link href={`collections/${collection?.slug.current}`} 
                  className="inline-flex items-center font-medium text-primary-600 text-gray-900 dark:text-white hover:underline">
                 View Drop                      
                 <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                     </svg>
                  </Link>

              </div>
              <div className='mx-auto'>
        {collection.tags?.slice(0,3).map((tag: any) => (


            <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-900" 
            key={tag}>{tag}</span>
                ))}

            </div>

          </article> ))}
         
      </div>  
  </div> 
  <div className="flex justify-center items-center w-full mb-16 mt-6 mx-auto">
  <a href="/collections" 
  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-red-100 bg-red-700 focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-red-500 dark:focus:ring-gray-800">
                    View all collectibles
              </a> 
  </div>


</section>
    );
  };

