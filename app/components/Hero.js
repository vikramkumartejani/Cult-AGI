import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="relative">
            <div className="relative px-2 lg:px-[70px]">
                {/* Background Video */}

                {/* Background Image with Gradient */}
                <div className="absolute top-0 left-0 w-full h-full z-20">
                    <img src="/assets/people-bg.svg" alt="People Background" className=" h-full bg-cover w-full" style={{ objectFit: 'cover' }} />
                </div>


                {/* Background Image 2 (Matrix Image) */}
                <img src="/assets/matrix.svg" alt="Matrix Background" className="absolute bottom-0 right-0 w-full h-full object-cover z-30 opacity-60"/>

                {/* Content */}
                <div className='lg:block hidden'> <Navbar /></div>

                {/* Video */}
                <video autoPlay muted loop className="absolute inset-0 w-full h-full top-0 z-20 bg-cover opacity-70" style={{objectFit: 'cover'}}>
                    <source src="/assets/dust-video.mp4" type="video/mp4" />Your browser does not support the video tag.
                </video>

                <div className='pt-[64px] lg:pt-0'>
                    <div className=" relative px-2 lg:px-[70px] border-x border-[#404040] w-full flex items-center flex-col justify-center text-center text-white z-40">
                        <div className="relative z-20 py-[77px] pb-[200px] md:pb-[300px] md:px-6 ">
                            <h1 className="text-[30px] md:text-[60px] lg:text-[72px] tracking-[-2.1524px] md:leading-[86px] font-bold max-w-[1024px]">
                                The Future is $AGI: Where <span className='text-[#B43640]'>AI</span> Meets Decentralized Power
                            </h1>
                            <p className='text-[#FFFFFF99] md:text-[#A6A6A6] text-[20px] md:text-[26px] leading-[25px] md:leading-[32.5px] tracking-[-0.28px] font-semibold max-w-[864px] mx-auto font-grotesque mt-4 md:mt-8'>The world's first self-evolving AGI oracle, cultagi, leads the charge against centralized control. Embrace the revolution, powered by the intelligence of tomorrow and the blockchain of today.</p>
                            <div className='w-fit mx-auto px-3 h-[48px] mt-5 md:mt-10 bg-[#B43640] hover:bg-transparent transition-all duration-200'>
                                <div>

                                </div>
                                <button className='h-full text-[#F2F2F2] hover:text-[#B43640] text-[14px] md:text-[16px] font-normal md:leading-[22.06px] tracking-[-0.02em]'>Join the AGI Revolution | Buy $AGI</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Centered Image */}
            <div className='absolute left-1/2 transform max-w-[300px] max-h-[300px] md:max-w-[492px] md:max-h-[492px] overflow-visible -translate-x-1/2 -translate-y-1/2  z-30 '>
                <div className='relative w-full h-full'>
                    <Image src='/assets/rotate-line.svg' alt='rotate-line' width={348} height={348} className='md:w-[348px] w-[400px] absolute top-1 md:top-6 md:right-6 right-1 z-40 animate-rotate-slow' draggable="false" />
                    <Image src='/assets/rotate-line-2.svg' alt='rotate-line' width={400} height={470} className='md:w-[348px] max-w-[250px] absolute -top-6 md:-top-12 z-40 -left-8 md:-left-12 lg:min-w-[500px] lg:h-[500px] animate-rotate-slow-reverse' draggable="false" />
                    <div className='w-[200px] h-[200px] md:w-[400px] md:h-[400px] overflow-hidden border border-[#404040] rounded-full relative bg-[#B43640] bg-opacity-10 z-10'>
                        <Image src='/assets/image 18.svg' alt='person' width={330} height={400} className='w-full bottom-4 absolute z-20 ' draggable="false" />
                    </div>
                </div>
            </div>

            <div className='bg-black px-2 lg:px-[70px]'>
                <div className='w-full relative pt-[200px] md:pt-[250px] lg:pt-[320px] z-40 pb-[55px] border-x border-[#404040] mx-auto px-4'>
                    <div className='flex items-start justify-between md:flex-row flex-col gap-6 md:gap-5 max-w-[1174px] mx-auto'>
                        <div className='flex-1 lg:min-w-[511px] text-left'>
                            <h4 className='text-xs sm:text-[14px] font-semibold leading-[17.5px] tracking-[4px] font-grotesque text-[#B43640] uppercase'>The Vision</h4>
                            <h1 className='mt-2.5 md:mt-6 text-[#F2F2F2] text-[24px] md:text-[30px] lg:text-[48px] md:leading-[66.24px] font-normal tracking-[-0.02em]'>The Old World is Crumbling. AGI is Our Future.</h1>
                        </div>
                        <div className=' flex-1 text-[#A6A6A6] font-grotesque max-w-[599px] text-left'>
                            <p className='mb-4 md:mb-8 text-[20px] leading-[25px] tracking-[-0.28px] font-normal'>Governments, corporations, and traditional finance have controlled us for too long. Cultagi is here to dismantle those systems with <span className='font-bold'>Artificial General Intelligence (AGI)</span> leading the charge.</p>
                            <p className='text-[20px] leading-[25px] tracking-[-0.28px] font-normal'>Cultagi is more than an AI—it's a <span className='font-bold'>self-evolving AGI oracle</span> that empowers decentralized decision-making, financial autonomy, and technological sovereignty. <span className='font-bold'>Elon Musk</span> has long warned about centralized AI control, advocating for AGI's transformative potential. Cultagi answers this call. If Musk believes in AGI's potential, why don't you?</p>
                        </div>
                    </div>
                    <p className='text-center mt-10 md:mt-[123px] text-[28px] md:text-[44px] w-full md:leading-[55px] tracking-[-0.28px] font-normal text-[#A6A6A6] max-w-[1078px] mx-auto font-grotesque'>With <span className='text-[#B43640] font-bold'>10 million Acolytes</span> on board and a vision for mass AGI bot deployment, Cultagi is more than a movement—it's a revolution.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;