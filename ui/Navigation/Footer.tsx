import React from 'react'

import Link from 'next/link'
import { FooterSocialIcons } from 'ui/Misc/social-icons'

export function Footer() {  
    return (
    
<footer className="p-4 bg-black shadow md:px-6 md:py-8 dark:bg-black">
    <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <img src="/assets/cribwhitelogo.png" className="mr-3 h-8 hidden md:block" alt="Crib Logo" />
           
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-300 sm:mb-0 dark:text-gray-400 hidden md:block">
            <li>
               <FooterSocialIcons/>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
         
            <li>
                <a href="/contact" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-300 sm:text-center dark:text-gray-300">© 2022 <a href="https://crib.sanity.studio/" className="hover:underline">THE CRIB™</a>. All Rights Reserved.
    </span>
</footer>

  )
}

