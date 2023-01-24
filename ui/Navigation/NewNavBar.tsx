'use client'
import { useState } from "react"
import { ConnectToCrib } from '../Buttons/ConnectToCrib'
import DarkModeSwitch from "ui/Buttons/DarkModeSwitch";
import SignOutButton from "ui/Buttons/SignOut";
import { getAuthOptions } from 'pages/api/auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"
import {  NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";


export async function getSomeProps(c: any) {
  return {
    props: {
      session: await unstable_getServerSession(c.req, c.res, getAuthOptions(c.req)),
    },
  };
};

const NewNavBar: NextPage = () => { 
  const { status } = useSession()
   

 return (
    <header>
      <nav className="bg-black w-[100vw] border-gray-200  lg:px-6 py-2.5 dark:bg-black">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
                <img src="/assets/cribwhitelogo.png" className="mr-5 h-6 sm:h-9" alt="Crib Logo" />

            </a>
            <div className="flex lg:order-2">
                <div className="lg:flex sm:hidden md:hidden" >
                </div>
                     <>    
                <ConnectToCrib/>
                {status === 'unauthenticated' ? "" : (<SignOutButton/>)}
                 
              <DarkModeSwitch/>
                 </>
     
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 ml-8 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link href="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-white lg:p-0 dark:text-white" aria-current="page"
                        >Home</Link>
                    </li>
                    <li>
                        <a href="/collections" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Collections</a>
                    </li>
                    <li>
                        <a href="/collectors" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Collectors</a>
                    </li>
         
                </ul>
            </div>
        </div>
    </nav>
</header>
 )
}


export default NewNavBar;


