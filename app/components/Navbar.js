'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Lock body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className='blur-custom relative z-40 h-[64px] bg-[#05050533] lg:bg-transparent md:h-[103px] w-full flex items-center justify-between px-4 md:px-5 md:border-[#404040] lg:border-x lg:border-b-0 border-b border-[#FFFFFF40]'>
      {/* Logo */}
      <Link href='/'>
        <Image
          src='/assets/navar-logo.svg'
          alt='logo'
          width={120}
          height={19}
          className='sm:w-[120px] w-[89px]'
        />
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden lg:flex items-center gap-[30px] mt-1'>
        <li>
          <Link href='/' className='text-[#F2F2F2] text-[16px] leading-[22.08px] font-bold'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/#tokenomics' className='text-[#A6A6A6] text-[16px] leading-[22.08px] font-bold'>
            Tokenomics
          </Link>
        </li>
        <li>
          <Link href='/#roadmap' className='text-[#A6A6A6] text-[16px] leading-[22.08px] font-normal mr-[86px]'>
            Roadmap
          </Link>
        </li>
        <li>
          <Link href='/#community' className='text-[#A6A6A6] text-[16px] leading-[22.08px] font-normal'>
            Community
          </Link>
        </li>
        <li>
          <Link href='/manifesto' className='text-[#A6A6A6] text-[16px] leading-[22.08px] font-normal'>
            Manifesto
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className='lg:hidden block'>
        <button onClick={toggleMenu}>
          <Image
            src={isMenuOpen ? '/assets/close-menu.svg' : '/assets/menu.svg'}
            alt={isMenuOpen ? 'close menu' : 'open menu'}
            width={32}
            height={32}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen !z-50 bg-black "
          style={{
            backgroundImage: 'url(/assets/matrix-menu.svg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className='flex items-center justify-between w-full h-[63px] px-6 bg-black border-b border-[#FFFFFF40]'>
            <Link href='/'>
              <Image
                src='/assets/navar-logo.svg'
                alt='logo'
                width={89}
                height={19}
              />
            </Link>
            <button
              onClick={toggleMenu}
            >
              <Image src='/assets/close-menu.svg' alt='close-menu' width={24} height={24} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col justify-start mt-[50px] pl-[31px] text-white text-lg items-start gap-10">
            <Link href="/" onClick={toggleMenu}  className='text-white text-[20px] leading-[27.06px] font-bold'>
              Home
            </Link>
            <Link href="/#tokenomics" onClick={toggleMenu} className='text-[#ECF1F080] text-[20px] leading-[27.08px] font-normal'>
              Tokenomics
            </Link>
            <Link href="/#roadmap" onClick={toggleMenu} className='text-[#ECF1F080] text-[20px] leading-[27.08px] font-normal'>
              Roadmap
            </Link>
            <Link href="/#community" onClick={toggleMenu} className='text-[#ECF1F080] text-[20px] leading-[27.08px] font-normal'>
              Community
            </Link>
            <Link href="/manifesto" onClick={toggleMenu} className='text-[#ECF1F080] text-[20px] leading-[27.08px] font-normal'>
              Manifesto
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
