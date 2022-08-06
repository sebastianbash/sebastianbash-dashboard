import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

export default function Dashboard() {
  let navigate = useNavigate();
  const userLogout = useRef();
  const logOut = () => {
    window.localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  return (
    <Layout>
      <div className="main-side w-full lg:w-3/4 bg-gray-300 rounded-[20px] mt-8 px-4 py-2 md:mt-0 md:px-10 md:py-6">
        <div className="">Dashboard</div>
        <button
          ref={userLogout}
          type="button"
          onClick={logOut}
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Log out
        </button>
      </div>
    </Layout>
  );
}
