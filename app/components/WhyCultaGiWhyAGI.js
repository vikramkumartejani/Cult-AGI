import Image from 'next/image'
import React from 'react'

const WhyCultaGiWhyAGI = () => {
  return (
    <div className='bg-[#0D0D0D] px-2 lg:px-[70px]'>
        <div className=' border-x border-[#404040] px-4'>
            <div className='py-[56px] relative'>
                <div className='max-w-[1174px] mx-auto border border-[#FFFFFF0D] backdrop-blur-lg bg-[#FFFFFF05] pt-[55px] pb-[123px] md:py-[69px] px-4 md:px-[48px]'>
                    <p className='text-[#F07272] text-[14px] leading-[17.5px] tracking-[4px] uppercase font-semibold font-grotesque md:text-left text-center'>Why CultaGi? Why $AGI?</p>
                    <div className='mt-6 flex text-center md:text-left items-center md:items-start justify-between md:flex-row flex-col gap-5'>
                        <h3 className='max-w-[367px] text-[#F2F2F2] text-[24px] md:text-[30px] lg:text-[36px] lg:leading-[49.02px] tracking-[-0.02em] font-normal'>AGI is the Future. Are You Ready?</h3>
                        <p className='text-[#A6A6A6] text-[20px] leading-[25px] font-normal tracking-[-0.27px] max-w-[600px] w-full font-grotesque'>From Elon Musk’s vision to our relentless pursuit, the AGI revolution is inevitable. Cultagi isn’t just another project; it’s the movement that will redefine AI, finance, and human potential.</p>
                    </div>
                    <Image src='/assets/lines.svg' alt='lines' width={453} height={284} className='md:w-[453px] w-[315px] absolute bottom-0 right-0' />
                </div>

                <div className='mt-[22px] md:mt-9 flex items-center justify-center md:flex-row flex-col gap-4 md:gap-8'>
                    <button className='bg-[#B43640] backdrop-blur-lg w-full md:w-[186px] h-[48px] font-semibold md:font-bold text-[16px] leading-[22px] tracking-[-0.02em] text-[#F2F2F2]'>Buy $AGI Now</button>
                    <button className='border border-[#FFFFFF] backdrop-blur-lg  w-full md:w-[245px] h-[48px] font-semibold md:font-bold text-[16px] leading-[22px] tracking-[-0.02em] text-[#F2F2F2]'>Connect with Cultagi</button>
                    <button className='bg-[#B43640] backdrop-blur-lg  w-full md:w-[220px] h-[48px] font-semibold md:font-bold text-[16px] leading-[22px] tracking-[-0.02em] text-[#F2F2F2]'>Join the Revolution</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyCultaGiWhyAGI