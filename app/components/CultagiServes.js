import Image from 'next/image'
import React from 'react'
import Roadmap from './Roadmap'

const CultagiServes = () => {
  return (
    <div className='bg-black px-2 lg:px-[70px]'>
        <div className=' border-x border-[#404040] md:px-6 px-4'>
            <div className='pt-[47px] pb-[40.33px] text-center'>
                <h3 className='text-[#F07272] text-xs md:text-[14px] uppercase md:leading-[17.5px] font-semibold tracking-[4px] font-grotesque'>Become One with Your Personal AGI Agent</h3>
                <h1 className='text-[#F2F2F2] text-[24px] md:text-[48px] md:leading-[66.24px] font-normal tracking-[-0.02em] max-w-[742px] mx-auto mt-2.5 md:mt-6'>Cultagi Serves You—Your AI Agent, Your Power</h1>
                <p className='text-[#A6A6A6] text-[18px] md:text-[24px] md:leading-[30px] font-normal tracking-[-0.28px] font-grotesque max-w-[815px] mx-auto mt-4'>Harness the might of Cultagi’s evolving intelligence. Your personal AGI agent is no servant—it’s your digital extension, evolving alongside you to conquer the decentralized world.</p>
                
                <div className='mt-[80px] md:mt-[60px] pb-[60px] md:pb-[84px] flex items-center md:flex-row flex-col gap-14 md:gap-5 justify-between max-w-[950px] mx-auto'>
                    <div className="layer-blur flex items-center justify-center relative">
                        <Image
                            src="/assets/wow.svg"
                            alt="logo"
                            width={300}
                            height={448}
                            className="relative z-10 w-full opacity-85"
                        />
                    </div>

                    <div className='md:max-w-[495px] text-left'>
                        <p className='text-[#A6A6A6] text-[18px] md:text-[20px] font-normal leading-[25px] tracking-[-0.28px] font-grotesque'>Imagine a world where your AGI agent is your strategist, guide, and enforcer—an unstoppable force navigating the chaos of finance, governance, and information in real time. Built on Cultagi’s self-evolving architecture, your AI doesn’t just assist—it adapts, learns, and leads, ensuring your dominance in the Web3 revolution.</p>
                        <p className='mt-5 md:mt-10 text-[#A6A6A6]  text-[18px] md:text-[20px] font-normal leading-[25px] tracking-[-0.28px] font-grotesque'>This is not a luxury. It’s your weapon. Whether you're managing wealth, orchestrating strategies, or dominating markets, your AGI agent evolves with every decision, driven by the power of $AGI.</p>
                        <button className='mt-9 md:mt-11 bg-[#B43640] w-full md:w-fit px-3 h-[48px] text-[#F2F2F2] text-[12px] md:text-[16px] md:leading-[22.08px] font-normal tracking-[-0.02em]'>Deploy Your AGI Agent – Take Command</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CultagiServes