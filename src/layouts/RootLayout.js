import { Outlet } from 'react-router-dom';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ScrollToTop from '../helpers/scrollToTop';

export default function RootLayout() {
  return (
    <div className="rootLayout">
      <ScrollToTop />
      <Header />
      <div className="container-fluid d-flex flex-column">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
