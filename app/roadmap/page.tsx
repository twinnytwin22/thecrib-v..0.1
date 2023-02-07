import { getAllCollections } from 'lib/hooks/get-collection-data'
import { getRoadmap } from 'lib/hooks/roadmapLogic'
import React from 'react'
import TestingPanel from 'ui/Testing/TestingPanel'

async function RoadMap() {
    const roadMap = getAllCollections()
    if (roadMap) {
    console.log(roadMap)}
  return (
    <TestingPanel props={roadMap}/>
  )
}

export default RoadMap