'use client';
import Head from 'next/head';

//import { useUser } from '@auth0/nextjs-auth0/client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  /*   const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className='flex flex-col min-h-screen'>
        <Head>
          <title>Moms Demand Action Connecticut Chapter</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <h3>
          Welcome {user.name}!{' '}
          <a
            href='/api/auth/logout'
            className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium w-20 text-center'
          >
            Logout
          </a>
        </h3>
        <div className='mt-auto'>
          <Footer />
        </div>
      </div>
    );
  } */

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Moms Demand Action Connecticut Chapter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {/* <a
        href='/api/auth/login'
        className='text-blue-500 underline p-1 hover:text-red-500 hover:bg-blue-300 hover:rounded-md font-medium w-20 text-center'
      >
        Login
      </a> */}
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
