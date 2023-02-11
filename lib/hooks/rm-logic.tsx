
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export const revalidate = 3600; // revalidate every hour


export async function getRoadmap() {
  const res = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*%5B_type%20%3D%3D%20%22roadmap%22%5D`)
  return res.json()
}
