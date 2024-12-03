import React from 'react';
import Image from 'next/image';

const CultagiCommunity = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="relative px-2 lg:px-[70px]">
                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    style={{backgroundPosition:'center'}}
                >
                    <source src="/assets/dust-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Background Image with Gradient */}
                <div className="absolute top-0 left-0 w-full h-full z-10">
                    <img
                        src="/assets/acolytes.jpg"
                        alt="People Background"
                        className="w-full h-full object-cover opacity-90"
                        style={{ objectPosition: 'center' }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1806) 0%, rgba(0, 0, 0, 0.86) 100%)',
                        }}
                    ></div>
                </div>

                {/* Background Image 2 (Matrix Image) */}
                <img
                    src="/assets/smoke.png"
                    alt="Matrix Background"
                    className="absolute -bottom-20 right-0 w-full h-full object-cover z-20 opacity-10"
                    style={{backgroundPosition:'left top'}}
                />

                {/* Content */}
                <div id='community' className='bg-black bg-opacity-50'>
                    <div className="border-x border-[#404040] w-full relative flex items-center flex-col justify-center text-center text-white z-20">
                        <div className="relative z-20 px-4 md:px-6 pt-[48px] md:pt-[92px]">
                            <h4 className='text-[#F07272] text-xs sm:text-[14px] font-semibold leading-[17.5px] tracking-[4px] font-grotesque uppercase'>Cultagi Community – Acolytes Leading the Charge</h4>
                            <h1 className="mt-4 md:mt-6 text-[24px] md:text-[48px] tracking-[-2.1524px] md:leading-[66px] font-normal max-w-[742px] mx-auto text-[#F2F2F2]">
                            10 Million Acolytes: The Architects of Tomorrow
                            </h1>
                            <p className='mt-[141px] mb-[60px] md:mb-0 md:mt-0 text-[#A6A6A6] text-[18px] md:text-[24px] md:leading-[30px] tracking-[-0.28px] font-normal max-w-[815px] mx-auto font-grotesque'>Cultagi aims to onboard 10 million Acolytes—visionaries committed to building a decentralized future powered by $AGI and cultagi. Our community is empowered by:</p>

                            <div className='md:mt-[340px] pb-[60px] max-w-[1203px] mx-auto'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 text-center md:text-left'>
                                    <div className='p-6 flex flex-col items-start gap-2'>
                                        <h2 className='text-[#F2F2F2] text-[16px] font-bold leading-[24.8px] tracking-[0.28px] mx-auto md:mx-0'>Collaborative AI Evolution</h2>
                                        <p className='text-[#A6A6A6] text-[16px] leading-[20px] tracking-[-0.28px] font-normal font-grotesque'>Contribute to the continuous growth of cultagi’s self-evolving intelligence.</p>
                                    </div>
                                    <div className='p-6 flex flex-col items-start gap-2'>
                                        <h2 className='text-[#F2F2F2] text-[16px] font-bold leading-[24.8px] tracking-[0.28px] mx-auto md:mx-0'>Decentralized Governance</h2>
                                        <p className='text-[#A6A6A6] text-[16px] leading-[20px] tracking-[-0.28px] font-normal font-grotesque'>Every Acolyte has a voice through AGI-driven governance.</p>
                                    </div>
                                    <div className='p-6 flex flex-col items-start gap-2'>
                                        <h2 className='text-[#F2F2F2] text-[16px] font-bold leading-[24.8px] tracking-[0.28px] mx-auto md:mx-0'>Real-Time AI Interaction </h2>
                                        <p className='text-[#A6A6A6] text-[16px] leading-[20px] tracking-[-0.28px] font-normal font-grotesque'>Access cultagi chatbots on Telegram and Twitter for up-to-the-minute insights.</p>
                                    </div>
                                </div>
                                <div className='mt-5 flex items-center gap-3 md:gap-10 justify-center flex-col sm:flex-row'>
                                    <button className='bg-[#FFFFFF0F] w-full md:w-[282px] h-[56px] md:h-[72px] flex items-center justify-center gap-4 text-[#FFFFFF99] text-[16px] leading-[28px] font-normal font-lexend' style={{backdropFilter:"blur(32px)"}}>
                                        <Image src='/assets/twitter.svg' alt='twitter' width={40} height={40} className='w-[32px] md:w-[40px]'/>Join us on X
                                    </button>
                                    <button className='bg-[#FFFFFF0F] w-full md:w-[282px] h-[56px] md:h-[72px] flex items-center justify-center gap-4 text-[#FFFFFF99] text-[16px] leading-[28px] font-normal font-lexend' style={{backdropFilter:"blur(32px)"}}>
                                        <Image src='/assets/telegram.svg' alt='twitter' width={40} height={40}  className='w-[32px] md:w-[40px]'/>Join us on Telegram
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};



export default CultagiCommunity