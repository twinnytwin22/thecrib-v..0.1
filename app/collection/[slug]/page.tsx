import { getAllSlugs, getIpfsData, getOwnersForEthCollection, getOwnersPolygonCollection, fetchNFTsForCollection } from 'lib/hooks/get-collection-data';
import { Suspense } from 'react'
import CollectionNav from 'ui/Navigation/collectionNav';
import CollectionMinter from '../../../ui/Sections/CollectionMinter'
import { querySlug } from 'lib/hooks/get-collection-data';
import CribLoader from 'ui/Misc/CribLoader';
import NotFound from 'ui/Sections/NotFound';

export async function generateStaticParams() {
  const collections = await getAllSlugs();
  return ( collections.result.map((collection: any) => ({
   slug: collection
  })) 
  );
  
}
export const dynamicParams = true // true | false,


  


async function fetchCollectionOS(currentSlug: any) { 
  const OSoptions = {method: 'GET', headers: {'X-API-KEY': process.env.NEXT_PUBLIC_OPENSEA_API_KEY }, next: { revalidate: 10 } };
  const data = await fetch(`https://api.opensea.io/api/v1/collection/${currentSlug}`, OSoptions as any, )
  return data.json()
}



async function SingleCollection(params: any) {
  const collection = await querySlug(params)
  const currentSlug = await collection?.slug?.current || '';
  const chainData = await fetchCollectionOS(currentSlug)
  if (collection === null) {
    return ( 
    <><NotFound/></>   )
  }

  
  const contract = collection ? collection.contract as string : '';
  const collectors = collection.chain === 'polygon' ? await getOwnersPolygonCollection(contract) : await getOwnersForEthCollection(contract) 
  const metadata = await getIpfsData(contract)
  const nfts = await fetchNFTsForCollection(contract)

  const ipfsProps = [
    metadata,
    contract
  ]
const collectionProps =[
  collection,
  chainData,
  collectors,
  nfts 
]
  return (

        <Suspense fallback={<CribLoader/>}>
        <CollectionMinter collection={collection} data={ipfsProps}  />
    <CollectionNav props={collectionProps}/>
       
        </Suspense>
  )
}


export default SingleCollection