import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm({ _callback, form, email, password }) {
  return (
    <div className="form-center md:bg-white w-full md:w-2/3 lg:w-1/3 p-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:border rounded md:shadow-xl">
        <p className="text-4xl text-center md:text-xl font-bold mb-4 capitalize">Login</p>
        <form ref={form}>
          <div className="mb-6">
            <div className="relative">
              <input
                type="email"
                id="floating_email"
                ref={email}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Your Email
              </label>
            </div>
          </div>
          <div className="mb-6">
            <div className="relative">
              <input
                type="password"
                id="floating_password"
                ref={password}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_password"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Your Password
              </label>
            </div>
          </div>
          <button
            type="submit"
            id="btnLogin"
            className="w-full text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Login
          </button>
          <div className="link-signup">
            <span className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="capitalize text-black cursor-pointer underline"
              >
                Create Account
              </Link>
            </span>
          </div>
          <div className="link-forgot-password text-center">
            <span className="text-sm font-bold capitalize"><Link to="/forgot-password">Forgot Password?</Link></span>
          </div>
        </form>
      </div>
  )
}
