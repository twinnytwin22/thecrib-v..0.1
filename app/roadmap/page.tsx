import { getPageSettings } from 'lib/hooks/pageSettings'
import { getRoadmap } from 'lib/hooks/rm-logic'
import React, {Suspense} from 'react'
import GemsHero from 'ui/HeroBanners/GemsHero'
import RoadMapHero from 'ui/Sections/RoadmapUI/RoadMapHero'
import CribLoader from 'ui/Misc/CribLoader'
import MileStoneList from 'ui/Sections/RoadmapUI/MilestoneList'
import RoadmapPages from 'ui/Sections/RoadmapUI/RoadmapPages'


async function RMpage() {
const querysettings = await getPageSettings()
const settings = await querysettings?.result[0]
const res = await getRoadmap()
const data = await res?.result

  return (
   
    <div className="flex w-screen flex-col items-center bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
        <div className='w-full text-left p-4 mx-auto'> 
      <Suspense fallback={<CribLoader/>}>
        <RoadMapHero settings={settings}/>
       <MileStoneList data={data}/>
       <RoadmapPages/>
       </Suspense>
       </div>
       
    </div>  
</div>





      
  )
}

export default RMpage