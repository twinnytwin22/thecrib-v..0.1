import React from 'react'

function PrivacyPolicy({data}:any) {
    console.log(data)
  return (
    <div className='max-w-7xl w-full mx-auto'>
        <p>{data.pageText1}</p>
        </div>
  )
}

export default PrivacyPolicy