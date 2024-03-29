// First, we must import the schema creator
import collection from './collections/collection'
import song from './song';
import tag from './collections/tag';
import blockContent from "./blockContent";
import siteconfig from "./siteConfig";
import roadmap from "./roadmap/roadMap"
import milestone from './roadmap/milestone';
import quarter from './roadmap/quarter';
import StatusLabel from './roadmap/StatusLabel';
import page from './documents/page'

// Then import schema types from any plugins that might expose them
export const schemaTypes = [
   collection,
   tag,
   song,
   blockContent,
   milestone, 
   quarter,
   page,
   siteconfig, ]
