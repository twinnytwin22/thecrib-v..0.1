import React from 'react'

function TwinOnLenz() {
  return (
    <section className="bg-white mx-5 md:mx-auto dark:bg-gray-800 py-4 rounded-lg h-auto border dark:border-gray-700">
    <div className="gap-8 items-center justify-items-center py-2 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2  lg:px-6">
        <img className="w-24 dark:hidden " src="/assets/lens_black.png" alt="lens logo"/>
        <img className="w-24 hidden dark:block"  src="/assets/lens_white.png" alt="lens logo"/>
        
        <div className="flex flex-col mt-4 md:mt-0 items-center">
            <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">Follow Twin on Lens.</h2>
            <a href="https://www.lensfrens.xyz/djtwinnytwin.lens/follow" className="inline-flex uppercase  w-36 justify-center px-5 py-3 text-base font-medium text-center text-[#00501E]  rounded-full hover:bg-[#ABFE2C] bg-[#ABFE2C] focus:ring-4 focus:ring-gray-100 dark:hover:bg-[#ABFE2C] dark:focus:ring-gray-800">
                    Follow
              </a> 
          
        </div>
    </div>
</section>
  )
}

export default TwinOnLenz