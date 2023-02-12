import "server-only";

const projectId = process.env.SANITY_PROJECT_ID
const apiVersion = process.env.SANITY_API_VERSION
const dataset = process.env.SANITY_DATASET

export const revalidate = 10;// revalidate every hour


export async function getRoadmap() {
  const res = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*%5B_type%20%3D%3D%20%22milestone%22%5D`)
  return res.json()
}
