import Link from 'next/link';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function About() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <h1 className='mx-auto font-semibold text-2xl text-blue-500'>
        2024 Calendar -{' '}
        <Link
          href='/calendar-25'
          className='text-blue-700 hover:text-blue-500 hover:underline'
        >
          2025 Calendar
        </Link>
      </h1>

      <iframe
        className='h-screen'
        src='https://docs.google.com/spreadsheets/d/e/2PACX-1vTk2tAGx5mUXtEV-l1DQ6EqJPQTGriqlgJIN8H3qI6LgRJP68upx1vDqOawoPNrY-LiFJxoUgZk3Yo0/pubhtml?widget=true&amp;headers=false'
      ></iframe>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
