
import { fetchNFTsForCollection, getAllSlugs, getOwnerForCollection, fetchCollectionOS } from 'lib/hooks/get-collection-data';
import React, { Suspense } from 'react'
import CollectionNav from 'ui/Navigation/collectionNav';
import CollectionContent from 'ui/Sections/CollectionContent';
import CollectionMinter from '../../../ui/Sections/CollectionMinter'
import { querySlug } from 'lib/hooks/get-collection-data';
import CribLoader from 'ui/Misc/CribLoader';
import NotFound from 'ui/Sections/NotFound';

export async function generateStaticParams() {
  const collections = await getAllSlugs();
  return collections.result.map((collection: any) => ({
   slug: collection
  }));
}




async function SingleCollection(params: any) {
  const collection = await querySlug(params)
  const currentSlug = await collection?.slug?.current || '';
  const chainData = await fetchCollectionOS(currentSlug)
  if (collection === null) {
    return ( 
    <><NotFound/></>   )
  }
  const blockchain = collection.blockchain
  const contract = collection ? collection.contract : '';
  const collectors = await getOwnerForCollection(contract, blockchain);
  const nfts = await fetchNFTsForCollection(contract, blockchain)
  console.log(nfts)


  
  return (
  <>
        <Suspense fallback={<CribLoader/>}>
        <CollectionMinter collection={collection}/>
    <CollectionNav/>
        <CollectionContent collection={collection} data={chainData} collectors={collectors} blockchain={blockchain} />
        </Suspense>
  </>
  )
}

export default SingleCollection