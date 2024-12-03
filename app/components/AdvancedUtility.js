import React from 'react';

const AdvancedUtility = () => {
    return (
        <div className="w-full relative overflow-hidden bg-black isolate border-t border-[#404040] px-2 lg:px-[70px]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full -z-10">
                <img src="/assets/bg.svg" alt="bg" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>

            <div className=" border-x border-[#404040] px-4 w-full h-full flex flex-col justify-center items-center py-[80px] md:py-[100px] relative">
                <div className='w-full flex items-center flex-col overflow-visible md:pb-5 md:pt-2 bg-opacity-10 text-image'>
                    <h4 className="text-[#A6A6A6] text-xs sm:text-[14px] font-semibold tracking-[4px] font-grotesque text-center mb-1.5 md:mb-4 uppercase">Advanced Utility of $AGI</h4>
                    <h1 className='text-[#F2F2F2] text-[24px] mdtext-[48px] md:leading-[66.24px] tracking-[-0.02em] max-w-[800px] text-center mx-auto'>Empowering an Autonomous AI Ecosystem</h1>
                </div>

                <div className="relative z-20 mt-10 md:mt-[68px] flex gap-4 md:gap-8 flex-wrap max-w-[1194px] mx-auto" >
                    <div className="bg-[#ffffff0f] border border-[#404040] p-6 md:p-8 w-full md:w-[328px]" style={{backdropFilter: "blur(32px)"}}>
                        <h2 className="text-[#F2F2F2] text-[18px] md:leading-[22.5px] font-bold tracking-[-0.28px] mb-4">AI-Driven Governance</h2>
                        <p className="lg:max-w-[264px] text-[#A6A6A6] text-[18px] leading-[22.5px] tracking-[0.28px] font-grotesque font-normal">
                            Outlag uses deep learning models to optimize governance decisions, providing
                            real-time data-driven proposals that adapt over time.
                        </p>
                    </div>
                    <div className="bg-[#FFFFFF0F] border border-[#404040] p-6 md:p-8 w-full md:w-[473px]" style={{backdropFilter: "blur(32px)"}}>
                        <h2 className="text-[#F2F2F2] text-[18px] leading-[22.5px] font-bold tracking-[-0.28px] mb-4">AGI Chatbots on Telegram & Twitter</h2>
                        <p className="lg:max-w-[409px]  text-[#A6A6A6] text-[18px] leading-[22.5px] tracking-[0.28px] font-grotesque font-normal">
                        Real-time AI engagement through Telegram and Twitter bots offering market insights, governance updates, and personalized financial advisory. These bots continuously evolve, learning from community feedback and usage.
                        </p>
                    </div>
                    <div className="bg-[#FFFFFF0F] border border-[#404040]  p-6 md:p-8 w-full md:w-[328px]" style={{backdropFilter: "blur(32px)"}}>
                        <h2 className="text-[#F2F2F2] text-[18px] leading-[22.5px] font-bold tracking-[-0.28px] mb-4">Adaptive Staking</h2>
                        <p className="lg:max-w-[264px] text-[#A6A6A6] text-[18px] leading-[22.5px] tracking-[0.28px] font-grotesque font-normal">
                        Using reinforcement learning and machine intelligence, staking rewards adjust dynamically based on ecosystem engagement, creating sustainable tokenomics driven by AGI predictions.
                        </p>
                    </div>
                    <div className="bg-[#FFFFFF0F] border border-[#404040]  p-6 md:p-8 w-full md:w-[376px]" style={{backdropFilter: "blur(32px)"}}>
                        <h2 className="text-[#F2F2F2] text-[18px] leading-[22.5px] font-bold tracking-[-0.28px] mb-4">AI-Powered DeFi Strategies</h2>
                        <p className="lg:max-w-[264px] text-[#A6A6A6] text-[18px] leading-[22.5px] tracking-[0.28px] font-grotesque font-normal">
                            $AGI fuels autonomous DeFi strategies, leveraging AI to execute yield farming, liquidity management, and risk mitigation for token holders.
                        </p>
                    </div>
                    <div className="bg-[#FFFFFF0F] border border-[#404040]  p-6 md:p-8 w-full md:w-[376px]" style={{backdropFilter: "blur(32px)"}}>
                        <h2 className="text-[#F2F2F2] text-[18px] leading-[22.5px] font-bold tracking-[-0.28px] mb-4">Cross-Chain AI Oracle Network</h2>
                        <p className="lg:max-w-[264px] text-[#A6A6A6] text-[18px] leading-[22.5px] tracking-[0.28px] font-grotesque font-normal">
                            Cultagi connects blockchain ecosystems by delivering real-time, AI-enhanced data across Ethereum, Binance Smart Chain, Polkadot, and beyond.
                        </p>
                    </div>
                    <div className="bg-[#FFFFFF0F] border border-[#404040]  p-6 md:p-8 w-full md:w-[376px]" style={{backdropFilter: "blur(32px)"}}>
                        <h2 className="text-[#F2F2F2] text-[18px] leading-[22.5px] font-bold tracking-[-0.28px] mb-4">Mass AGI Bot Deployment</h2>
                        <p className="lg:max-w-[264px] text-[#A6A6A6] text-[18px] leading-[22.5px] tracking-[0.28px] font-grotesque font-normal">
                            Inspired by Paal AI but more advanced, Cultagi will deploy self-evolving AGI bots that deliver personalized governance, financial, and social solutions for millions of users worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancedUtility;

