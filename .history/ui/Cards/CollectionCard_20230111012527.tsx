import React from 'react'
import Link from 'next/link';
import { urlFor } from 'lib/hooks/sanityImage';
import { ActiveIndicator, NonActiveIndicator } from 'ui/Misc/Indicator';

function CollectionCard(collections: any, i: any) {
  const collection = collections.collections
  const description = collection.description
  const mintStatus = collection.mintactive as boolean
  console.log(mintStatus)

  if (mintStatus === false) {
    console.log( 'this is false');
  } else {
    console.log('this is true')
  }
  


    return (
<Link href={`collections/${collection?.slug.current}`} className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" key={i}>
    <img className="object-cover aspect-square w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={urlFor(collection?.nftImage).width(200).url()} alt=""/>
      
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">{collection.title}</h5>
        <div className='flex h-5 mb-3'><h6 className='text-sm mb-2 uppercase text-gray-900 dark:text-white tracking-tight pr-5'> Mint Status:</h6>{mintStatus && ActiveIndicator()} {!mintStatus && NonActiveIndicator()}</div>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{description}</p>
        <div className='mx-auto'>

        {collection.tags?.map((tag: any) => (


<span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-900">{tag}</span>
    ))}

        </div>

      
    </div>
</Link>

  )
}

export default CollectionCard

