import client from '@sanity/client';

export const sanityClient = client({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2021-10-21',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});