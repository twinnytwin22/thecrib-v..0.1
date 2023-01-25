'use-client'
import React from 'react'
import { IPFSRenderer } from 'ui/Misc/IPFSRenderer'
import CribNFTScene from 'ui/Models/CribNFTLoader'

function TestCard(props:any) {
console.log(props, 'test')
  return (
      <>
    <CribNFTScene/>
    </>
  )
}

export default TestCard