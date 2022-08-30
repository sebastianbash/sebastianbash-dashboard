import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// TODO: Fix the mobile and tablet ui.
export default function Header() {
  let navigate = useNavigate();
  const userLogout = useRef();
  const logOut = () => {
    window.localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  return (
    <div className="">
      <div className="brand">
        <p className="w-fit text-sm text-center bg-black px-4 py-1 mb-5 rounded-full text-white dark:text-black uppercase">
          Administrator
        </p>
        <h2 className="text-5xl text-black font-bold capitalize">dashboard</h2>
      </div>
      <div className="ul-side md:mt-10 ml-1">
        <ol className="hidden md:block relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-bold leading-none cursor-pointer active:text-black dark:text-gray-500">
              Projects
            </time>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none cursor-pointer text-gray-400 active:text-black dark:text-gray-500">
              Services
            </time>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none cursor-pointer text-gray-400 active:text-black dark:text-gray-500">
              Contact
            </time>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none cursor-pointer text-gray-400 active:text-black dark:text-gray-500">
              Account
            </time>
          </li>
        </ol>
      </div>
      <button
          ref={userLogout}
          type="button"
          onClick={logOut}
          className="text-[#FB3B3B] bg-white border border-[#CECECE] hover:bg-[#F5F5F5] focus:ring-2 focus:outline-none focus:ring-[#CECECE] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-all"
        >
          Log out
        </button>
    </div>
  );
}
