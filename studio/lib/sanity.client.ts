
import { apiVersion, dataset, projectId, useCdn } from './sanity.api'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
export const sanityClient = { projectId, dataset, apiVersion, useCdn }
    

