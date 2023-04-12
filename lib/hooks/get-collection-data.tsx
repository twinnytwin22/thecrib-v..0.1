import { createClient } from "next-sanity";
import groq from "groq";
import { apiVersion, dataset, projectId } from "studio/lib/sanity.api";
const ethApiKey = process.env.NEXT_PUBLIC_ALCHEMY_ID!;
const polygonApiKey = process.env.NEXT_PUBLIC_POLYGON_ALCHEMY_ID!;
import fetchWithRetry from "./fetchWithRetry";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-10-21",
  useCdn: false,
});

export const getRequestOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};

export const revalidate = 3600; // revalidate every hour

export const OSoptions = {
  method: "GET",
  headers: { "X-API-KEY": process.env.NEXT_PUBLIC_OPENSEA_API_KEY },
};

export async function getAllContracts() {
  const res = await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*%5B_type%20%3D%3D%20%22collection%22%5D%7Bcontract%7D`
  );
  return res.json();
}
export async function getSiteSettings() {
  const res = await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*%5B_type%20%3D%3D%20%22siteconfig%22%5D`
  );
  return res.json();
}
export async function getAllCollections() {
  const res = await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*%5B_type%20%3D%3D%20%22collection%22%5D%0A%7C%20order(%0A%20%20%20%20mintStatus%20%3D%3D%20%22upcoming%22%2C%0A%20%20%20%20mintStatus%20%3D%3D%20%22active%22%2C%0A%20%20%20%20mintStatus%20%3D%3D%20%22inactive%22%2C%0A%20%20%20%20createdDate%2C%0A%20%20%20%20-mintPrice%2C%0A%20%20%20%20title%0A%20%20)%0A`
  );
  return res.json();
}
export async function getAllSlugs() {
  const res = await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*%5B_type%20%3D%3D%20%22collection%22%20%26%26%20defined(slug.current)%5D%5B%5D.slug.current`
  );
  return res.json();
}

export async function getUpcomingDrop() {
  const res = await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*%5B_type%20%3D%3D%20%22collection%22%20%26%26%20mintStatus%20%3D%3D%20%22upcoming%22%5D%5B0%5D%0A`,
    {
      cache: 'no-store',
    }
  );
  return res.json();
}

export async function getLatestDrop() {
  const res = await fetch(
    `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*%5B_type%20%3D%3D%20%22collection%22%20%26%26%20mintStatus%20%3D%3D%20%22active%22%5D%20%7C%20order(_createdAt%20desc)%20%5B0%5D%0A`,
    {
      cache: 'no-store',
    }
  );
  return res.json();
}


export async function querySlug(context: any) {
  const { slug = "" } = context.params || "";
  const res = await client.fetch(query, { slug });
  return res;
}

export const query = groq`*[_type == "collection" && slug.current == $slug][0]{
  title,
  description,
  crossMintId,
  slug,
  contract,
  mintPrice,
  nftImage, 
  mintStatus,
  tags, 
  chain,
  "abiURL": abi.asset->url
}`;

export async function getOwnersPolygonCollection(contract: any) {
  const res = await fetchWithRetry(
    `https://polygon-mainnet.g.alchemy.com/nft/v2/${polygonApiKey}/getOwnersForCollection?contractAddress=${contract}&withTokenBalances=true`,
    getRequestOptions
  );
  return res.json();
}

export async function getOwnersForEthCollection(contract: any) {
  const res = await fetchWithRetry(
    `https://eth-mainnet.g.alchemy.com/nft/v2/${ethApiKey}/getOwnersForCollection?contractAddress=${contract}&withTokenBalances=true`,
    getRequestOptions
  );
  return res.json();
}

export async function fetchNFTsForCollection({contract, chainId}: any) {
  let apiKey = "";
  if (chainId === "eth") {
    apiKey = ethApiKey;
  } else if (chainId === "polygon") {
    apiKey = polygonApiKey;
  }

  const baseURL = `https://${chainId}-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTsForCollection`;
  const URL = `${baseURL}?contractAddress=${contract}&withMetadata=${"true"}`;
  const nfts = await fetchWithRetry(URL, getRequestOptions);
  return nfts.json();
}


export async function fetchCollectionOS(currentSlug: any) {
  const data = await fetchWithRetry(
    `https://api.opensea.io/api/v1/collection/${currentSlug}`,
    OSoptions as any
  );
  return data.json();
}

export async function getCribNfts(address: string, setNFTs: any) {
  if (address) {
    console.log("Loading NFTs");
    const res = await fetchWithRetry(
      `https://eth-mainnet.g.alchemy.com/nft/v2/${ethApiKey}/getNFTs?owner=${address}&pageSize=100&contractAddresses[]=0x148280a1395af6F430248c2E4B8063c69B7cA23E`,
      getRequestOptions
    );
    if (res) {
      console.log("NFTs Loaded");
    }
    const nfts = res.json().then((nfts: any) => {
      setNFTs(nfts.ownedNfts);
    });
    return nfts;
  }
}

export async function getIpfsData(contractAddress: string, chainId: string): Promise<any> {
  let apiKey: string;

  if (chainId === 'eth') {
    apiKey = ethApiKey!;
  } else if (chainId === 'polygon') {
    apiKey = polygonApiKey!;
  } else {
    throw new Error(`Unsupported chainId: ${chainId}`);
  }
  const metadata = await fetchWithRetry(
    `https://${chainId}-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTMetadata?contractAddress=${contractAddress}&tokenId=2`,
    getRequestOptions
  );

  return metadata.json();
}
