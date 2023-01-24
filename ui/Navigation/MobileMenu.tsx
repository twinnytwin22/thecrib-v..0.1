'use client'
import Link from 'next/link';
import React, { useState } from 'react';

function MobileMenu() {

const width = 8

  return (
      <>
          <div className="block lg:hidden md:hidden px-5 bg-white dark:bg-black pb-2 w-[100vw] fixed bottom-0 inset-x-0">
            <div className="grid grid-cols-3 text-gray-800 dark:text-gray-400 justify-items-center">
                <div className="flex group ">
                    <Link href="/" className="flex items-end justify-center text-center mx-auto px-4 w-full group-hover:text-red-500 border-b-2 border-transparent group-hover:border-red-500">
                        <span className="px-1 flex flex-col items-center">
                            <div className="w-8">
                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                            </svg>
                            </div>
                            
                            <span className="block text-xs pb-1">Home</span>
                        </span>
                    </Link>
                </div>
                <div className="flex flex-row group items-center ">
                    <Link href="/collections" className="flex items-end justify-center items-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-red-500 border-b-2 border-transparent group-hover:border-red-500">
                        <div className="px-1 flex flex-col items-center">
                        <div className="w-8 items-center">
                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"></path>
                            </svg>
                            </div>
                            <span className="block text-xs pb-1">Collecttions </span>
                        </div>
                    </Link>
                </div>
                <div className="flex group">
                    <Link href="/holder" className="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-red-500 border-b-2 border-transparent group-hover:border-red-500">
                        <span className="px-1 flex flex-col items-center">
                        <div className="w-8">
                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"></path>
                            </svg>
                            </div>
                            <span className="block text-xs pb-1">Holders</span>
                        </span>
                    </Link>
                </div>
            </div>
            </div>
    </>
                
  )
}

export default MobileMenu


