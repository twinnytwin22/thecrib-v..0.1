// First, we must import the schema creator
import collection from './collections/collection'
import song from './song';
import tag from './collections/tag';
import blockContent from "./blockContent";
import siteconfig from "./siteConfig";
import roadmap from "./roadmap/roadMap"
import StatusLabel from './roadmap/StatusLabel';

// Then import schema types from any plugins that might expose them
export const schemaTypes = [
   collection,
   tag,
   song,
   blockContent,
   roadmap,
   siteconfig, ]
