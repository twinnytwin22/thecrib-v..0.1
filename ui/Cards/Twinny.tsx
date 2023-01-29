import React from 'react'
import { CardSocialIcons } from 'ui/Misc/socialIcons'

function Twinny() {
  return (
    <div className=" mb-6 mt-3 lg:mb-12 mx-5 md:mx-auto">
          <div className="items-center bg-gray-50 rounded-lg shadow flex flex-row dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="w-36 md:w-40 rounded-lg sm:rounded-none sm:rounded-l-lg" src="/assets/twinny-twin.jpg" alt="Twinny Avatar"/>
              </a>
              <div className="p-5">
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Meet Twinny Twin</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">Musician & Developer</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400 text-xs md:text-sm">World builder & Creator of Crib Music</p>
<CardSocialIcons/>
              </div>
          </div> 
          </div>
  )
}

export default Twinny