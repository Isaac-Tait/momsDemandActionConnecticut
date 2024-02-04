import Link from 'next/link';
import Image from 'next/image';

import Navigation from './Navigation';

export default function Header() {
  return (
    <div className='w-full px-12 bg-slate-100 heropattern-topography-indigo-200'>
      <div className='flex flex-row justify-between'>
        {/* Logo */}
        <Link href='/'>
          <Image
            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='/stateLogo.svg'
            alt='Moms Demand Action CT State Logo'
            width={180}
            height={37}
            priority
          />
        </Link>
        {/* Responsive Header */}
        <div className='flex justify-center items-center'>
          <h1 className='font-bold text-4xl text-blue-500 p-2 font-cursive hidden lg:block'>
            Connecticut Chapter
          </h1>
        </div>
        {/* Social Media */}
        <div className='flex justify-center items-center'>
          <Link href='https://www.facebook.com/MomsDemandActionCTCentral/'>
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/facebookLogo.png'
              alt='Moms Demand Action CT State Logo'
              width={35}
              height={35}
              priority
            />
          </Link>
        </div>
      </div>
      {/* Navigation */}
      <div >
        <Navigation />
      </div>
    </div>
  );
}
