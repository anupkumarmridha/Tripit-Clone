import React, { ReactNode } from 'react'
import Footer from '../Footer/Footer'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Navbar from '../Main/Navbar'

const MainLayout:React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ErrorBoundary>
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <main className="flex-grow p-0 md:p-4 mt-16">
      {children}
      </main>
      <Footer />
    </div>
    </ErrorBoundary>
  )
}

export default MainLayout