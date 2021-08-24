import Header from '@components/Header';
import Footer from '@components/Footer';

export default function PageLayout() {
  return (
    <div>
      <Header />
      <div className='container'>{children}</div>
      <Footer />
    </div>
  );
}
