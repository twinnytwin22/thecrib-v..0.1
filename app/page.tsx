import Hero3DCribBanner from 'ui/HeroBanners/Home3DCTABanner'
import RecentCollections from 'ui/Sections/RecentCollections'
import CollectorsSection from 'ui/Sections/CollectorSection'
import { getAllCollections, getSiteSettings } from 'lib/hooks/get-collection-data'
import { Suspense } from "react";
import CribLoader from 'ui/Misc/CribLoader'
import TwinOnLenz from 'ui/HeroBanners/TwinOnLenz'
import TestingPanel from 'ui/Navigation/TestingPanel';


async function Home() {
const collections = await getAllCollections()
const homeSettings = await getSiteSettings()

  return (
       <div className="flex min-h-screen max-w-screen w-full flex-col items-center bg-white dark:bg-gray-900">
      <Suspense fallback={<CribLoader/>}>   
        <Hero3DCribBanner settings={homeSettings}/>
        <RecentCollections collections={collections} />    
          <TwinOnLenz/>
        <CollectorsSection settings={homeSettings} />
      </Suspense>
         </div>

  )
}

export default Home
