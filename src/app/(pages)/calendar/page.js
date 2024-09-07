import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function About() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <h1 className='mx-auto font-semibold text-2xl text-blue-500'>
        2024 Calendar
      </h1>

      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
