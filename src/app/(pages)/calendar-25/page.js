import Link from 'next/link';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function About() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <h1 className='mx-auto font-semibold text-2xl text-blue-500'>
        <Link
          href='/calendar-24'
          className='text-blue-700 hover:text-blue-500 hover:underline'
        >
          2024 Calendar
        </Link>{' '}
        - 2025 Calendar
      </h1>
      <iframe
        className='h-screen'
        src='https://docs.google.com/spreadsheets/d/e/2PACX-1vR4ff_UexMT3AOlLSqaNEPYlGZVoI7qn8HFPuEV8q1-CiFp00UTId7Al0_oykxYm227k9Jcheo2xt46/pubhtml?widget=true&amp;headers=false'
      ></iframe>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
