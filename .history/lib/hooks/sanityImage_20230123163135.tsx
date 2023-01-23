import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";


export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2021-10-21',
    useCdn: true,
    
  })
  
  export const builder = imageUrlBuilder(client)
  export function urlFor(source: any) {
  return builder.image(source)
  }
