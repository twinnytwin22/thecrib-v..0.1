import "server-only";

const projectId = process.env.SANITY_PROJECT_ID
const apiVersion = process.env.SANITY_API_VERSION
const dataset = process.env.SANITY_DATASET


export async function getSiteSettings() {
    const res = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*%5B_type%20%3D%3D%20%22siteconfig%22%5D`)
    return res.json()
  }

  export async function getPageSettings() {
    const res = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*%5B_type%20%3D%3D%20%22pageSettings%22%5D`)
    return res.json()
  }