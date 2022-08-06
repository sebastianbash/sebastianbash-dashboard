import React from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

export default function Layout({ children }) {
  return (
    <div className="layout-dashboard w-full flex flex-col lg:block min-h-screen h-screen p-4 md:p-8">
      <div className="flex flex-col mb-10 lg:flex-row lg:justify-center lg:h-[90%]">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
