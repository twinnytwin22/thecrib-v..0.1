// pages/index.js

import { createClient } from "next-sanity";
import Link from "next/link";
import { NextPage, GetStaticProps } from 'next'
import imageUrlBuilder from '@sanity/image-url'
import { sanityCollectionProps } from '../../lib/types/collection'
import { getAllCollections } from "../../lib/hooks/get-collection-data";
import CollectionMinter from "../../ui/Sections/CollectionMinter";
import CollectionContent from "../../ui/Sections/CollectionContent";
import AllCollections from "../../ui/Sections/AllCollections";
import EmailSignUp from "../../ui/Sections/EmailSignUp";




async function AllCollectionsPage() {
  const collections = await getAllCollections()
  console.log(collections, "")
  return (
    <>

<div className="flex min-h-screen flex-col items-center bg-white dark:bg-gray-900">
<AllCollections collections={collections}/>
<EmailSignUp/>
    </div>

    </>
  );
}


export default AllCollectionsPage;

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false
})

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
return builder.image(source)
}