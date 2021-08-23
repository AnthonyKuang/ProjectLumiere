import Header from '@components/Header';
import Footer from '@components/Footer';
import { Gradient } from '@lib/gradient';
import { useEffect } from 'react';

export default function HomeLayout({ children }) {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('.gradient-canvas');
  }, []);

  return (
    <div>
      <div className='relative h-96'>
        <Header />
        <canvas
          className='gradient-canvas absolute top-0'
          data-js-darken-top
          data-transition-in
        ></canvas>
      </div>
      <main className='max-w-7xl mx-auto px-20'>{children}</main>
      <Footer />
    </div>
  );
}
