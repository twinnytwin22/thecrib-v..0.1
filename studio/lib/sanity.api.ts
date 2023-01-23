
export const useCdn = process.env.NODE_ENV === 'production'

/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in a server-only function that don't need it.
 */


export const projectId = '7cz92znn' 
export const dataset = 'production'

// see https://www.sanity.io/docs/api-versioning for how versioning works
export const apiVersion = '2021-10-21'

// This is the document id used for the preview secret that's stored in your dataset.
// The secret protects against unauthorized access to your draft content and have a lifetime of 60 minutes, to protect against bruteforcing.
export const previewSecretId: `${string}.${string}` = 'preview.secret'
