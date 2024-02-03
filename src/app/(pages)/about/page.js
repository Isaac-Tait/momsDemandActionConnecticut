import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function About() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <h1 className='flex flex-1 justify-center items-center'>
        This is the&nbsp;
        <span className='font-semibold'>About Page&nbsp;</span>
        for the Connecticut Chapter of Moms Demand Action.
      </h1>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
