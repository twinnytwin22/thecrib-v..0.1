import React from 'react'

function CollectionStats(data: any) {
  const stat = data?.data?.stats

  return (
    <div className="grid gap-8 grid-cols-3 justify-center mb-8 ">
    <div  className="block text-center max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Items</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{stat?.count}</p>
    </div>
    <div className="block text-center max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Floor</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{stat?.floor_price ?? 0}</p>
    </div>
    <div className="block text-center max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Collectors</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{stat?.num_owners}</p>
    </div>
    </div>
  )
}

export default CollectionStats