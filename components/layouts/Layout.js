import Header from '@components/Header';
import Footer from '@components/Footer';

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
