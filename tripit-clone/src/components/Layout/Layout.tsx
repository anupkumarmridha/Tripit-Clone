import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { ReactNode } from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ErrorBoundary>

    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow p-0 md:p-4">
        {children}
      </main>
      <Footer />
    </div>
    </ErrorBoundary>
  );
};

export default Layout;
