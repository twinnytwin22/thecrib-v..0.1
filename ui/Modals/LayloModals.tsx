'use client'
import React, {useState} from 'react'
import { LayloCard } from 'ui/Cards/LayloCard'

export const LayloBar = (image: any) => {
  const [isOpen, setIsOpen] = useState(false)
  function LayloButtonBar() {
    return (

    <div onClick={() => setIsOpen(true)} 
     className=" inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
    <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">🔔</span> <span className="text-sm font-medium">Turn on drop notifications!</span> 
    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
   </div>
    )
   }

  return (
      <>
    <div className=''>
    <LayloButtonBar/>
      {isOpen && (
        <div className="z-50 flex m-4 mx-auto backdrop-blur-sm bg-white/30" style={{position: 'fixed', top: '0', left: '0' , justifyContent:'center', alignItems:'center', height:'100%' , width:'100%', display:'flex'}}
        tabIndex={-1}>
          <div className="flex flex-col p-4 rounded-2xl bg-black opacity-2" 
          onClick={() => setIsOpen(false)}>
            <button onClick={() => setIsOpen(false)}>Close</button>
         <LayloCard/>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default LayloBar



