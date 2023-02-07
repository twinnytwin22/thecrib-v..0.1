import { getRoadmap } from 'lib/hooks/roadmapLogic'
import React from 'react'
import TestingPanel from 'ui/Testing/TestingPanel'

async function RoadMap() {
    const roadMap = getRoadmap()
    if (roadMap) {
    console.log(roadMap)}
  return (
    <TestingPanel props={roadMap}/>
  )
}

export default RoadMap