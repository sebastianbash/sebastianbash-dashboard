import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    let navigate = useNavigate();
    const userLogout = useRef();
    const logOut = () => {
        window.localStorage.removeItem('user');
        navigate('/login', { replace: true });
    };

  return (
    <>
        <div className="">Dashboard</div>
        <button ref={userLogout} type="button" onClick={logOut} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Log out</button>
    </>
  )
}
