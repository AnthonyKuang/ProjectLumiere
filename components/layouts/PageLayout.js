import Header from '@components/Header';
import Footer from '@components/Footer';

export default function PageLayout() {
  return (
    <div>
      <Header />
      <div className='max-w-7xl mx-auto px-20'>{children}</div>
      <Footer />
    </div>
  );
}
