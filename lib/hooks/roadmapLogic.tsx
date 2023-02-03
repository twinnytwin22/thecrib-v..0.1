import { apiVersion, dataset, projectId } from "studio/lib/sanity.api";

export async function getRoadmap() {
  const res = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*%5B_type%20%3D%3D%20%22roadmap%22%5D`)
  return res.json()
}
