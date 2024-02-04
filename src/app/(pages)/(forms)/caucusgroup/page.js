import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CaucusGroup() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex justify-center py-2'>
        <iframe
          src='https://drive.google.com/file/d/10amS8EmehfNd-E-KTYy7jilSQgC8sXv-/view?usp=sharing'
          width='640'
          height='718'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
        >
          Loading…
        </iframe>
      </div>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
