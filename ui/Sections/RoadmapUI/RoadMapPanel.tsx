import React from 'react'
import RoadMapItem from './RoadMapItem'




function RoadMapPanel({props}: any) {
console.log(props, )

return (
  <>
    <ul>
      <>
      <h3>WTF</h3>
      {props.map((e: any) => { 
        {e && console.log(e,"eee")
      }
      <div>
        <h1 className='text-lg'>
             WHAT UP HOE!
        </h1>
          <RoadMapItem key={e.title} child={{e}} className='text-2xl'/>
        </div>
      })}
      </>
      </ul>       
  </>
  
)
}


export default RoadMapPanel