import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id, 
    footer,
    overview, 
    showcaseProjects[]->{
      _type,
      coverImage, 
      overview, 
      "slug": slug.current,
      tags, 
      title, 
    }, 
    title, 
  }
`

export const collectionFields = `*[_type == "collection"] {
  _id,
  contract,
  title,
  nftImage,
  bannerImage, 
  collectionImage,
  description,
}`
  

export const collectionBySlugQuery = groq`
*[_type == "collection" && slug.current == $slug][0] {
  ${collectionFields}
}
`

export const indexQuery = groq`
*[_type == "collection"] | order(date desc, _updatedAt desc) {
  ${collectionFields}
}`

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title`

export const collectionsQuery = groq`
  *[_type == "collection"] { contract }`

export const singleCollectionQuery = `*[_type == "collection" ] {
   ${collectionFields}
  }
    `



export interface Collection 
{
  _id?: string
  title?: string
  contract?: string
  nftImage?: string
  bannerImage?: string
  collectionImage?: string
  description?: string
  slug?: string

}

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    slug,
    title,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client, 
    coverImage,
    description,
    duration, 
    overview,
    site, 
    "slug": slug.current,
    tags,
    title,
  }
`
export const collectionSlugsQuery = groq`
*[_type == "collection" && defined(slug.current)][].slug.current`


export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`
export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
