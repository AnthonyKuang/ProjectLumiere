import Header from '@components/Header';
import Footer from '@components/Footer';

export default function PageLayout() {
  return (
    <div>
      <Header />
      <main className='max-w-7xl mx-auto px-20'>{children}</main>
      <Footer />
    </div>
  );
}
