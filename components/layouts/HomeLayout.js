import Header from '@components/Header';
import Footer from '@components/Footer';
import { Gradient } from '@lib/gradient';
import { useEffect } from 'react';

export default function HomeLayout({ children }) {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('.gradient-canvas');
    // setTimeout(() => gradient.pause(), 1000); // Pause gradient after 1 second solely for development because it fries my pc while it's running
  }, []);

  return (
    <div>
      <Header />
      <div className='relative -mt-20 h-60'>
        <canvas
          className='gradient-canvas absolute top-0'
          data-js-darken-top
          data-transition-in
        ></canvas>
      </div>
      <div className='container'>{children}</div>
      <Footer />
    </div>
  );
}
