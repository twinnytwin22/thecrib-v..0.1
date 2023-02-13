import Hero3DCribBanner from 'ui/HeroBanners/Home3DCTABanner'
import RecentCollections from 'ui/Sections/RecentCollections'
import { getAllCollections, getSiteSettings } from 'lib/hooks/get-collection-data'
import CribLoader from 'ui/Misc/CribLoader'
import TwinOnLenz from 'ui/HeroBanners/TwinOnLenz'
import Twinny from 'ui/Cards/Twinny';
import LayloSection from 'ui/Sections/LayloSection';
import LatestDrop from 'ui/HeroBanners/HeroUpcomingDropBanner'
import WelcomeMarquee from 'ui/Marquees/WelcomeMarquee'


async function Home() {
const collections = await getAllCollections()
const homeSettings = await getSiteSettings()

  return (
       <div className="flex w-screen flex-col items-center bg-white dark:bg-gray-900">
        <Hero3DCribBanner settings={homeSettings}/>
        <div className='overflow-hidden w-full opacity-50'>
        <WelcomeMarquee/>
        </div>
        <Twinny/>
        <LatestDrop/>
        <RecentCollections collections={collections} />    
        <hr className=' max-w-7xl w-full dark:opacity-25' />
           <LayloSection/>
           <TwinOnLenz/>
         <div className='mb-20'/>
         </div>

  )
}

export default Home
