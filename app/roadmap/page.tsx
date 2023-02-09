import { getRoadmap } from 'lib/hooks/roadmapLogic'
import React from 'react'
import RoadMapPanel from 'ui/Sections/Roadmap/RoadMap'
async function RoadMap() {
    const roadMapData = await getRoadmap()
    const data = [
      roadMapData
    ]
 
  return (
   <RoadMapPanel props={data}/>
  )
}

export default RoadMap