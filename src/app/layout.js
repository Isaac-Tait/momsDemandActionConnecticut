import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Connecticut Chapter of Moms Demand Action',
  description:
    'A resource for members and those looking to become members or get involved with the Connecticut Chapter of Moms Demand Action',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
