import React from 'react'

function AllStats(collections: any) {
  const length = collections.collections.length
  
  return (
    <div className="grid gap-8 grid-cols-3 justify-center">
    <div  className="block max-w-xs md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-sm md:text-md font-bold tracking-tight text-gray-900 dark:text-white">Total Collections</h5>
            <p className="font-normal text-sm md:text-md text-gray-700 dark:text-gray-400">{length}</p>
    </div>
    <div className="block max-w-xs md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-sm md:text-md font-bold tracking-tight text-gray-900 dark:text-white">Unique Collectors</h5>
            <p className="font-normal text-sm md:text-md text-gray-700 dark:text-gray-400">105</p>
    </div>
    <div className="block max-w-xs md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-sm md:text-md font-bold tracking-tight text-gray-900 dark:text-white">Total Collectibles</h5>
            <p className="font-normal text-sm md:text-md text-gray-700 dark:text-gray-400">140</p>
    </div>
    </div>
  )
}

export default AllStats