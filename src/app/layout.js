import { Inter } from 'next/font/google';
import './globals.css';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Connecticut Chapter of Moms Demand Action',
  description:
    'A resource for members and those looking to become members or get involved with the Connecticut Chapter of Moms Demand Action',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='heropattern-topography-indigo-200'>
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
