import Hero3DCribBanner from 'ui/HeroBanners/Home3DCTABanner'
import RecentCollections from 'ui/Sections/RecentCollections'
import { getAllCollections, getSiteSettings } from 'lib/hooks/get-collection-data'
import { Suspense } from "react";
import CribLoader from 'ui/Misc/CribLoader'
import TwinOnLenz from 'ui/HeroBanners/TwinOnLenz'
import Twinny from 'ui/HeroBanners/Twinny';
import LayloSection from 'ui/Sections/LayloSection';


async function Home() {
const collections = await getAllCollections()
const homeSettings = await getSiteSettings()

  return (
       <div className="flex w-screen flex-col items-center bg-white dark:bg-gray-900">
      <Suspense fallback={<CribLoader/>}>   
        <Hero3DCribBanner settings={homeSettings}/>
        <Twinny/>
        <RecentCollections collections={collections} />    
           <LayloSection/>
           <TwinOnLenz/>
         <div className='mb-20'/>
      </Suspense>
         </div>

  )
}

export default Home
