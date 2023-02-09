import React from 'react'

const RoadMapPanel = (props: any) =>  {
    const rm = props.props[0]
    console.log(rm, 'rm')

return (
    <div className='mx-auto max-w-6xl'>
        <div className="bg-white dark:bg-gray-900">
            <div className="relative border-l border-gray-200 dark:border-gray-700">  
            <p>THE ROAD MAP SHOULD BE BELOW</p>
        {rm.result.map((qt: any) => { 
        <p>{qt.title}</p>
        {qt.milestones.map((milestone: any, i: any) => {
        <p key={i}>ice spice</p>
        {milestone?.title as string && console.log(milestone.title)}
          })}
          })}
         
            </div>
        </div>
    </div>
  )
}

export default RoadMapPanel

