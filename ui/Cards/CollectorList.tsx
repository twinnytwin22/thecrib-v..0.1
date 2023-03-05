'use client'
import dynamic from 'next/dynamic';
import { GetENSName, GetENSAvi } from 'lib/hooks/getENS';
import React, { useState } from "react";

const Pagination = dynamic(
  () => import("lib/hooks/pagination"),
  { ssr: false }
);

const CollectorList = ({collectors}: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const indexEnd = currentPage * itemsPerPage;
    const indexStart = indexEnd - itemsPerPage;
    const currentCollectors = collectors?.ownerAddresses.slice(indexStart, indexEnd);
    const totalCollectors = collectors?.ownerAddresses
    const excludeDead = '0x000000000000000000000000000000000000dead'


    // Change page
    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);
    
    return (
        
             <div className="w-full max-w-2xl p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Collectors</h5>
            <a href="/collectors" className="text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                View all
            </a>
       </div>
       <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
           {currentCollectors.map((collector: any, i: any) => (
                <li className="py-3 sm:py-4" key={i} >
                    <div className="flex items-center space-x-4">
                    {collector.ownerAddress == excludeDead ? null : <GetENSAvi ownerAddress={collector.ownerAddress}/>}                        
                    <div className="flex-1 min-w-0">
                            <div className="text-md tracking-md font-medium text-gray-900 truncate dark:text-white uppercase">
                              
                            {collector.ownerAddress == excludeDead ? null : <GetENSName ownerAddress={collector.ownerAddress}/>}
                            </div>
                            <div className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {collector.ownerAddress == excludeDead ? null : collector.ownerAddress}
                            </div>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      {collector.ownerAddress == excludeDead ? null : collector.tokenBalances.length}
                        </div>
                    </div>
                </li> ))}
                       <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-700"/>
    
            </ul>
    
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={totalCollectors.length}
            paginateBack={paginateBack}
            paginateFront={paginateFront}
            currentPage={currentPage}
          />
        </div>
        </div>
      );
    };


 


export default CollectorList

