import React from 'react'

const Roadmap = () => {
    const phases = [
        {
            icon: "🚀 ",
            title: " Phase 1",
            subtitle: "Infiltration & Awakening (Q1 2024)",
            points: [
                "Launch cultagi Chatbot on Telegram and Twitter.",
                "Initiate AI-driven governance models.",
                "Deploy adaptive staking with dynamic AGI rewards."
            ]
        },
        {
            icon: "🌐 ",
            title: "Phase 2",
            subtitle: "Financial Revolution (Q2 2024)",
            points: [
                "Integrate AI-optimized DeFi solutions.",
                "Scale the cross-chain oracle network.",
                "Expand GPU clusters for decentralized AI training."
            ]
        },
        {
            icon: "🏛 ",
            title: "Phase 3",
            subtitle: "Global AGI Expansion (Q3 2024)",
            points: [
                "Establish strategic AI research partnerships.",
                "Deploy AGI bots at mass scale, revolutionizing personalized AI experiences."
            ]
        },
        {
            icon: "🔮 ",
            title: "Phase 4",
            subtitle: "El Dorado - The New Digital Frontier (Q4 2024)",
            points: [
                "Realize a fully autonomous AGI-driven ecosystem.",
                "Lead humanity into a decentralized, AI-led era of freedom, innovation, and abundance."
            ]
        }
    ]
    return (
        <div id='roadmap' className='bg-black border-t border-[#404040] px-2 lg:px-[70px]'>
            <div className=' border-x border-[#404040] px-4'>
                <div className='py-14 md:py-20 text-center'>
                    <h3 className='text-[#F07272] text-xs sm:text-[14px] uppercase leading-[17.5px] font-semibold tracking-[4px] font-grotesque'>Roadmap to AGI Sovereignty</h3>
                    <h1 className='text-[#F2F2F2] text-[24px] md:text-[48px] md:leading-[66.24px] font-normal tracking-[-0.02em] max-w-[742px] mx-auto mt-6'>Building a Decentralized Future with AGI</h1>
                    <div className='mt-[50px] text-left'>
                        <div className="md:block hidden max-w-[930px] mx-auto relative pl-[1px]">
                            {/* Main vertical line */}
                            <div className="absolute left-0 top-[92px] lg:top-[68px] h-[76%] lg:h-[78%] w-[2px] bg-[#404040]" />

                            {phases.map((phase, index) => (
                                <div key={index} className="flex gap-4 relative mb-6">
                                    {/* Horizontal connector line */}
                                    <div className="absolute left-0 top-[50%] w-[520px] h-[1px] bg-[#404040]" />

                                    {/* Left Column */}
                                    <div className="relative w-[280px] ml-[40px] bg-[#111111] border border-[#404040] p-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-[18px] text-white -mt-1">{phase.icon}</span>
                                            <h2 className="text-[#B43640] font-bold text-[18px] leading-[22.5px] tracking-[-0.28px]">
                                                {phase.title}
                                            </h2>
                                        </div>
                                        <p className="text-[#A6A6A6] text-[18px] leading-[22.5px] tracking-[-0.28px] font-normal font-grotesque">
                                            {phase.subtitle}
                                        </p>
                                    </div>

                                    {/* Right Column */}
                                    <div className="relative flex-1 bg-[#111111] border border-[#404040] p-6 pl-10">
                                        <ul className="space-y-1.5">
                                            {phase.points.map((point, pointIndex) => (
                                                <li key={pointIndex} className="flex gap-3 text-[#BFBFBF] font-normal font-grotesque leading-[25px] text-[20px] tracking-[-0.28px]">
                                                    <span>•</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className='md:hidden block'>
                            {/* Mobile Design */}
                            {phases.map((phase, index) => (
                                <div key={index} className="relative flex gap-8 mt-[55px] md:mt-10">
                                    <div className=" w-full bg-[#111111] border border-[#404040]">
                                        <div className="relative px-4 py-6 border-b border-[#404040]">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-[18px] text-white -mt-1">{phase.icon}</span>
                                                <h2 className="text-[#B43640] font-bold text-[18px] leading-[22.5px] tracking-[-0.28px]">
                                                    {phase.title}
                                                </h2>
                                            </div>
                                            <p className="text-[#A6A6A6] text-[18px] leading-[22.5px] tracking-[-0.28px] font-normal font-grotesque">
                                                {phase.subtitle}
                                            </p>
                                        </div>
                                        <ul className="space-y-1.5 pl-6 pr-4 py-6">
                                            {phase.points.map((point, pointIndex) => (
                                                <li key={pointIndex} className="flex gap-3 text-[#BFBFBF] font-normal font-grotesque leading-[25px] text-[20px] tracking-[-0.28px]">
                                                    <span>•</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {index < phases.length - 1 && (
                                        <div className="absolute left-1/2 top-full h-[55px] md:h-10 w-[1px] bg-[#404040] -translate-x-1/2" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap