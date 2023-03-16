'use client'
import {
    TwitterShareButton,
    TwitterIcon,
  } from 'next-share'

export const SocialShareRow = () => {
    return (
        <>
        <TwitterShareButton
  url={'https://thecrib.space'}
  title={'Check out @djtwinnytwin\'s upcoming drop at:'}
  hashtags={['#Always #CribMusic']}>
   
    <svg className='w-8 -rotate-45 ' fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
</TwitterShareButton>
        </>
    )
}