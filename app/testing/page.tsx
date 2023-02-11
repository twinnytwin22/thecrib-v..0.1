import { getAllCollections } from 'lib/hooks/get-collection-data'
import { getRoadmap } from 'lib/hooks/rm-logic'
import React from 'react'
async function RoadMapPage() {
  const roadMapData = await getAllCollections()
   if (!roadMapData){
    console.log('got damn')
   }else{
    console.log(roadMapData as string)
   }
  
 
   
  return (
 
   <div className='h-96'>
  {roadMapData && roadMapData.result.map((e: any) => {
    <p key={e._id}> {e.title}</p>
   
  }) }
</div>
  )
}

export default RoadMapPage