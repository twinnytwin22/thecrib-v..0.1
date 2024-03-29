import "server-only";

const projectId = process.env.SANITY_PROJECT_ID
const apiVersion = process.env.SANITY_API_VERSION
const dataset = process.env.SANITY_DATASET



export async function getRoadmap() {
  const res = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*%5B_type%20%3D%3D%20%22milestone%22%20%5D%7B%0A%20%20title%2C%0A%20%20completed%2C%0A%20%20%20%20_id%2C%20%0A%20%20url%2C%0A%20%20description%2C%0A%20%20quarter-%3E%7B%0A%20%20quarter%2C%0A%20%20year%2C%20%0A%0A%20%20%7D%0A%7D`,{ next: { revalidate: 30 } })
  return res.json()
}
