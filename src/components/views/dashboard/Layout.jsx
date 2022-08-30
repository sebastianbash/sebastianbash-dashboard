import React from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

export default function Layout({ children }) {
  return (
    // <div className="layout-dashboard w-full min-h-screen h-full flex flex-col lg:block p-4 md:p-8">
    <div className="layout-dashboard w-full min-h-screen h-full grid grid-cols-12 grid-rows-6 p-4 md:p-8">
      <div className="header col-span-4 row-span-6 flex flex-col justify-between">
        <Header />
        <Footer />
      </div>
      <div className="main col-span-8 row-span-6">
        {children}
      </div>
    </div>
  )
}
