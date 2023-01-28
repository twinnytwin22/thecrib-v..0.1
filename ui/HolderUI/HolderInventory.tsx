import React from 'react'
import HolderNFTCard from './HolderNFT'

function HolderInventory() {
  return (
      <>
              <h2 className='mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white mb-10'>Inventory</h2>

    <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
        <HolderNFTCard/>
        <HolderNFTCard/>
        <HolderNFTCard/>
        <HolderNFTCard/>
        <HolderNFTCard/>
        <HolderNFTCard/>
        </div>
        </>
  )
}

export default HolderInventory