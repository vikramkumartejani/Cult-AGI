import Image from 'next/image'
import React from 'react'

const VideoFrame = () => {
  return (
    <div
      className='relative w-full px-2 lg:px-[70px] bg-black/60'
      style={{
        backgroundImage: "url('/assets/video-frame-bg.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 border-none bg-opacity-20"
        style={{
          background: `linear-gradient(180deg, #00000088, rgba(0, 0, 0, 0) %, #000000 100%)`
        }}></div>
      {/* Content */}
      <div className='z-30 h-full relative w-full px-4 lg:px-[67px] py-11 md:py-[100px] border-x border-[#404040]'>
        <div className='md:pt-[47px] md:pb-[40.33px] mx-auto flex flex-col items-center justify-center w-full max-w-[1164px] relative gap-2 md:gap-4'>
          <Image src='/assets/top-lines.svg' alt='video-frame' width={732} height={16.52} />
          <div className='border border-[#404040] p-2 md:p-4 w-full'>
            <video className='w-full' autoPlay
              muted
              loop>
              <source src='/assets/video.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          <Image src='/assets/red-label.svg' alt='red-label' width={263} height={86} className='md:w-[263px] w-[100px] absolute -bottom-4 md:-bottom-2 -right-3 lg:-right-12' />
          <Image src='/assets/top-lines.svg' alt='video-frame' width={732} height={16.52} />
        </div>
      </div>
    </div>
  )
}

export default VideoFrame
