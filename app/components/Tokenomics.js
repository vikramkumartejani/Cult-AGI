import React from 'react';

const Tokenomics = () => {
    return (
        <div id='tokenomics' className="w-full relative overflow-hidden bg-black isolate border-t border-[#404040] px-2 lg:px-[70px]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full -z-10">
                <img src="/assets/image 14.svg" alt="bg" className="w-full h-full object-cover" style={{backgroundPosition:'center', objectFit:'cover'}} />
                <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>

            <div className=" border-x border-[#404040] px-4 lg:px-10 w-full h-full py-[67px] md:py-[100px] relative">
                <h4 className="text-[#F07272] text-xs sm:text-[14px] font-semibold tracking-[4px] font-grotesque text-center mb-4 uppercase">TOKENOMICS</h4>
                <h1 className='text-[#F2F2F2] text-[24px] md:text-[48px] md:leading-[66.24px] tracking-[-0.02em] max-w-[660px] text-center mx-auto'>$AGI: The Currency of the AGI Revolution</h1>

                <div className="mt-11 md:mt-[104px]" >
                    <div className='relative border border-[#404040] py-6 md:py-10 px-4 md:px-8 text-center max-w-[715px] mx-auto'>
                        <div className='w-[7.7px] h-[7.7px] border border-[#404040] absolute -top-1 -left-1'></div>
                        <div className='w-[7.7px] h-[7.7px] border border-[#404040] absolute -bottom-1 -left-1'></div>
                        <div className='w-[7.7px] h-[7.7px] border border-[#404040] absolute -top-1 -right-1'></div>
                        <div className='w-[7.7px] h-[7.7px] border border-[#404040] absolute -bottom-1 -right-1'></div>
                        <h2 className='text-[#A6A6A6] text-xs sm:text-[14px] font-semibold font-grotesque leading-[17.5px] tracking-[4px]'>TOTAL SUPPLY</h2>
                        <h1 className='text-[38px] sm:text-[44px] md:text-[88px] md:leading-[100px] tracking-[-1.38px] font-extrabold font-grotesque text-[#B43640]'>10,000,000 $AGI</h1>
                    </div>

                    <div className='text-left flex items-start md:flex-row flex-col justify-between gap-8 md:gap-5 mt-11 md:mt-16 xl:-mt-[50px]'>
                        <div className='w-full md:max-w-[200px]'>
                            <h3 className='text-[#F2F2F2] text-[16px] md:text-[18px] md:leading-[22.5px] tracking-[-0.28px] font-bold'>Acolytes <span className='text-[#F07272]'>(60%)</span> </h3>
                            <p className='mt-2 md:mt-0 text-[#A6A6A6] text-[20px] md:text-[18px] font-normal leading-[22.5px] tracking-[-0.28px] font-grotesque'>The heart of the movement—fueling governance, staking, and ecosystem expansion.</p>
                        </div>
                        <div className='w-full md:max-w-[200px] text-left md:text-right'>
                            <h3 className='text-[#F2F2F2] text-[16px] md:text-[18px] md:leading-[22.5px] tracking-[-0.28px] font-bold'>Treasury <span className='text-[#F07272]'>(5%)</span> </h3>
                            <p className='mt-2 md:mt-0 text-[#A6A6A6] text-[20px] md:text-[18px] font-normal leading-[22.5px] tracking-[-0.28px] font-grotesque'>For sustainable long-term growth and adaptability. </p>
                        </div>
                    </div>

                    <div className='mt-8 md:mt-[92px] grid grid-cols-1 md:grid-cols-3 md:flex items-start justify-between gap-8 md:gap-5'>
                        <div className='w-full md:max-w-[272px]'>
                            <h3 className='text-[#F2F2F2] text-[16px] md:text-[18px] md:leading-[22.5px] tracking-[-0.28px] font-bold'>AI Infrastructure <span className='text-[#F07272]'>(15%)</span> </h3>
                            <p className=' mt-2 md:mt-0 text-[#A6A6A6] text-[20px] md:text-[18px] font-normal leading-[22.5px] tracking-[-0.28px] font-grotesque'>Dedicated to scaling GPU clusters and advancing AI models. </p>
                        </div>
                        <div className='w-full md:max-w-[272px] text-left md:text-center'>
                            <h3 className='text-[#F2F2F2] text-[16px] md:text-[18px] md:leading-[22.5px] tracking-[-0.28px] font-bold'>Research & Partnerships <span className='text-[#F07272]'>(10%)</span> </h3>
                            <p className='mt-2 md:mt-0 text-[#A6A6A6] text-[20px] md:text-[18px] font-normal leading-[22.5px] tracking-[-0.28px] font-grotesque'>Collaborating with AI pioneers and blockchain innovators to push boundaries. </p>
                        </div>
                        <div className='w-full md:max-w-[272px] text-left md:text-right'>
                            <h3 className='text-[#F2F2F2] text-[16px] md:text-[18px] md:leading-[22.5px] tracking-[-0.28px] font-bold'>Innovation Fund <span className='text-[#F07272]'>(10%)</span> </h3>
                            <p className='mt-2 md:mt-0 text-[#A6A6A6] text-[20px] md:text-[18px] font-normal leading-[22.5px] tracking-[-0.28px] font-grotesque'>Supporting self-evolving AI advancements and experimental projects. </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Tokenomics