import {
  getAllSlugs,
  getIpfsData,
  getOwnersForEthCollection,
  getOwnersPolygonCollection,
  fetchNFTsForCollection,
} from "lib/hooks/get-collection-data";
import { Suspense } from "react";
import CollectionNav from "ui/Navigation/collectionNav";
import CollectionMinter from "../../../ui/Sections/CollectionMinter";
import { querySlug } from "lib/hooks/get-collection-data";
import CribLoader from "ui/Misc/CribLoader";
import NotFound from "ui/Sections/NotFound";
import { urlFor } from "lib/hooks/sanityImage";



export async function generateStaticParams() {
  const collections = await getAllSlugs();
  return collections.result.map((collection: any) => ({
    slug: collection,
  }));
}
export const dynamicParams = true; // true | false,

async function fetchCollectionOS(currentSlug: any) {
  const OSoptions = {
    method: "GET",
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_OPENSEA_API_KEY },
    next: { revalidate: 10 },
  };
  const data = await fetch(
    `https://api.opensea.io/api/v1/collection/${currentSlug}`,
    OSoptions as any
  );
  return data.json();

}



async function SingleCollection(params: any) {
  const collection = await querySlug(params);
   const jsonLd = {
    '@context': `https://thecrib.space${collection?.slug?.current}`,
    '@type': 'Collection',
    name: collection?.title,
    image: urlFor(collection?.nftImage).width(800).url(),
    description: collection?.description,
  };
  const currentSlug = await collection?.slug?.current || "";
  const name = await collection?.title
  const chainData = await fetchCollectionOS(currentSlug);
  console.log(chainData, 'name:', name)
  if (collection === null) {
    return (
      <>
        <NotFound />
      </>
    );
  }
  if (chainData === null) {
    return (
      <CribLoader/>
    )
  }
  
  const contract = collection ? (collection?.contract as string) : "";
  const chainId = collection?.chain 
  const collectors =
    collection?.chain === "polygon"
      ? await getOwnersPolygonCollection(contract)
      : await getOwnersForEthCollection(contract);
  const metadata = await getIpfsData(contract);
  const nfts = await fetchNFTsForCollection(contract);

  const ipfsProps = [metadata, contract];
  const collectionProps = [collection, chainData, collectors, nfts];
  
  return (
    <>
        <section>
    {}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

 
    <Suspense fallback={<CribLoader />}>
      <CollectionMinter collection={collection} data={ipfsProps} />
      <CollectionNav props={collectionProps} />
    </Suspense>   </section></>
  );
}

export default SingleCollection;
