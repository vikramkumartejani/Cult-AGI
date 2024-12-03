import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='bg-black px-2 lg:px-[70px] md:block hidden'>
            <div className='border-x border-[#404040] h-[64px]'></div>
        </div>
        <div className='bg-[#0D0D0D] border-t border-[#404040] px-2 lg:px-[70px]'>
            <div className=' border-x border-[#404040]'>
                <div className='pt-[47px] pb-[40.33px] px-5'>
                    <h3 className='text-[#FFFFFF99] text-[18px] md:text-[28px] md:leading-[38.64px] font-normal md:font-bold text-center'>Lead the revolution. Control the future. Be the force of change.</h3>
                    <div className='md:pt-10 py-14 md:pb-[34px] font-grotesque text-[#F2F2F2] text-[18px] font-medium leading-[24.41px] grid grid-cols-2 md:flex items-center md:gap-[64px] gap-[24px] flex-wrap justify-center'>
                        <Link href='https://T.me/cultagi'>Telegram</Link>
                        <Link href='/'>Github</Link>
                        <Link href='www.x.com/cultagi'>Twitter</Link>
                        <Link href='https://cultagi.gitbook.io/manifesto'>Whitepaper</Link>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Image src='/assets/footer.svg' alt='logo' width={120} height={19} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer