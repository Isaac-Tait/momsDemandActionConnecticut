import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function LogOut() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <h1 className='font-semibold text-2xl text-blue-500'>
        Logout Page
      </h1>
      <p className='flex justify-center items-center text-xl font-medium'>
        You have been logged out.
      </p>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
