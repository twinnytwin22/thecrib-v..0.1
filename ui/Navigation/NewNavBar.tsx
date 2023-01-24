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


export async function getSomeProps(c: any) {
  return {
    props: {
      session: await unstable_getServerSession(c.req, c.res, getAuthOptions(c.req)),
    },
  };
};

const NewNavBar: NextPage = () => { 
  const { data, status } = useSession()
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
  



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
                <button  
                data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
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


