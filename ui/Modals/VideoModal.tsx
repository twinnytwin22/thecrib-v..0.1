'use client'
import React, {useState} from 'react'
import { IPFSRenderer } from 'ui/Misc/IPFSRenderer'
import { YoutubeVideo } from 'ui/Misc/YoutubeVideo'
import CribNFTScene from 'ui/Models/CribNFTLoader'

const VideoLightbox = (image: any) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
      <>
    <div className=''>
      <img onClick={() => setIsOpen(true)}
   className="w-full rounded-lg" src={image.image} alt="video image">
          </img>
      {isOpen && (
        <div className="flex m-4 mx-auto backdrop-blur-sm bg-white/30" style={{position: 'fixed', top: '0', left: '0' , justifyContent:'center', alignItems:'center', height:'100%' , width:'100%', display:'flex'}}
        tabIndex={-1}>
          <div className="flex flex-col p-4 rounded-2xl bg-black opacity-2" 
          onClick={() => setIsOpen(false)}>
            <button onClick={() => setIsOpen(false)}>Close</button>
            <YoutubeVideo />
            
          </div>
        </div>
      )}
    </div>
    </>
  )
}


export default VideoLightbox