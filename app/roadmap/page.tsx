import { getRoadmap } from 'lib/hooks/roadmapLogic'
import React from 'react'
import RoadMap from 'ui/Sections/RoadMap'

async function page() {
const r = await getRoadmap()
const rmProps = r.result[0]

  return (
    <div>
<RoadMap props={rmProps}/>



    </div>
  )
}

export default page