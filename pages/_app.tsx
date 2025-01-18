import Navbar from '@/components/layouts/navbar.component';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import 'swiper/css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
