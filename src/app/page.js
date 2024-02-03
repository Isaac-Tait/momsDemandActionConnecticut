import Image from 'next/image';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
