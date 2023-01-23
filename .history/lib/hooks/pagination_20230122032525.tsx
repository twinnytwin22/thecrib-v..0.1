'use client'
import React from "react";

interface PaginationProps {
    itemsPerPage: number
    totalItems: number
    paginateFront: any
    paginateBack: any
    currentPage: number
}

export default function Pagination(props: PaginationProps) {
    

const { itemsPerPage, totalItems, paginateBack, paginateFront, currentPage } = props

  return (
<div className="flex flex-col items-center ">
        
          <span className="text-sm text-gray-700 dark:text-gray-400 gap-3">
           Showing
          <span className="font-semibold text-gray-900 dark:text-white">
         {currentPage * itemsPerPage - 10}
          </span>
          of
          <span className="font-semibold text-gray-900 dark:text-white">
         {currentPage * itemsPerPage} </span>
          of
          <span className="font-semibold text-gray-900 dark:text-white">
         {totalItems} </span>
          results
        </span>


        <div className="inline-flex mt-2 xs:mt-0">
        
          <div  className="text-gray-900 dark:text-white"
            >
            <button disabled={currentPage === 1}
            onClick={() => {
              paginateBack();
            }} className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
      <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
          <p className="text-gray-700 dark:text-gray-400">Previ</p></button>
          </div>

          <div className="text-gray-900 dark:text-white"
            
            >
            <button disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
            onClick={() => {
              paginateFront();
            }} 
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
      <p className="text-gray-700 dark:text-gray-400">Next</p>
      <svg aria-hidden="true" className="w-5 h-5 ml-2 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
  </button>
          </div>
      </div>
    </div>
  );
}


