import { getAllCollections } from 'lib/hooks/get-collection-data'
import { getRoadmap } from 'lib/hooks/rm-logic'
import React from 'react'
import TestingMarquee from 'ui/Testing/TestingMarquee'
async function RoadMapPage() {
  const roadMapData = await getAllCollections()
   if (!roadMapData){
    console.log('got damn')
   }else{
    console.log(roadMapData as string)
   }
  
 
   
  return (
 
   <div className='h-96 max-w-screen w-full'>
  <TestingMarquee/>
</div>
  )
}

export default RoadMapPage