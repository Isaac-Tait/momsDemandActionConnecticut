import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className='w-full px-12 bg-pink-100'>
      <div className='flex flex-row justify-between'>
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
        <h1 className='flex justify-center items-center font-bold text-4xl text-red-500 p-2'>
          Moms Demand Action&nbsp;
          <span className='text-blue-500'>Connecticut Chapter</span>
        </h1>
      </div>

      <div className='flex flex-row justify-between px-2'>
        <Link
          href='/senators'
          className='text-blue-500 underline hover:text-red-500'
        >
          Senators List
        </Link>
        <Link
          href='/about'
          className='text-blue-500 underline hover:text-red-500'
        >
          About Page
        </Link>
        <p>List Item 3</p>
        <p>List Item 4</p>
      </div>
    </div>
  );
}
