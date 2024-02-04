import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Moms Demand Action Connecticut Chapter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
