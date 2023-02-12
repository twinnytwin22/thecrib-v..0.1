'use client'
import React, {useState} from 'react'
import { YoutubeVideo } from 'ui/Misc/YoutubeVideo'


function TestCard() {

  return (
  
 <div className='flex mx-auto items-center justify-center content-center center'>
  <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
      <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
          <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
              <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">Privacy info</h3>
              <p>
                  The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a securised location.
              </p>
          </div>
          <div className="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
              <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Learn more about privacy</a>
              <div className="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                  <div id="close-modal"  className="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                  <Lightbox/>
                  </div>
                  <button id="confirm-button" type="button" className="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Confirm</button>
              </div>
          </div>
      </div>
  </div>
</div>


  )
}

export default TestCard



const Lightbox = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Lightbox</button>
      {isOpen && (
        <div id="lightbox-modal" className='flex fixed w-full h-full' style={{position: 'fixed', top: '0', left: '0', justifyContent:'center', alignItems:'center'}}
        tabIndex={-1}>
          <div className="p-4 rounded-2xl bg-black opacity-2" 
          onClick={() => setIsOpen(false)}>
            <button onClick={() => setIsOpen(false)}>Close</button>
            <YoutubeVideo />
            
          </div>
        </div>
      )}
    </div>
  )
}


