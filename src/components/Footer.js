import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='bg-slate-100 text-xs p-2 flex flex-row justify-between'>
      <p>© 2006 - {new Date().getFullYear()}</p>
      <Link href='https://github.com/Isaac-Tait/momsDemandActionConnecticut'>
        <Image
          src='/github-mark.png'
          alt='github logo'
          width={15}
          height={15}
        />
      </Link>
      <p>
        A division of
        <Link
          href='https://www.everytown.org/'
          className='hover:bg-blue-300 hover:text-red-500 p-1 text-blue-500'
        >
          Everytown Network
        </Link>
      </p>
    </div>
  );
}
