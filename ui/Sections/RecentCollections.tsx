'use client'
import React from "react";
import RecentCollectionCard from "ui/Cards/RecentCollectionCard";


  export default function RecentCollections({collections}: any) {
    

    return (
      <div className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Recent Drops</h2>
            </div>    
      <div className="grid gap-8 lg:grid-cols-3">
          {collections.result.slice(0,3).map((collection: any, i: any) => (
         <div key={i}>          
            <RecentCollectionCard collection={collection}/>
         </div>  
         ))}  
      </div> 
         
  </div> 
  <div className="flex justify-center items-center w-full mb-16 mt-6 mx-auto">
  <a href="/explore" 
  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-red-100 bg-red-700 focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-red-500 dark:focus:ring-gray-800">
                    View all collectibles
              </a> 
  </div>
</div>
    );
  };

