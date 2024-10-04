import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { ReactNode } from 'react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow p-0 md:p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
