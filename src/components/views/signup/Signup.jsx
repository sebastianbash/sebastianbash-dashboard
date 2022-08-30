import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import SignupForm from '../../signupForm/SignupForm';
import moonImg from '../../../assets/img/pure-moon.webp';

export default function Login({ type }) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useLocalStorage('user', '');
  const [isPwdEquals, setIsPwdEquals] = useState(false);
  let navigate = useNavigate();

  let signupForm = useRef();
  let firstName = useRef();
  let lastName = useRef();
  let email = useRef();
  let password = useRef();
  let rePassword = useRef();

  const redirectToDashboard = (token) => {
    setUser(token);
    setIsLogged(true);
    navigate('/dashboard', { replace: true });
  };
  const invalidateRedirect = () => {
    setIsLogged(false);
    navigate('/login', { replace: true });
  };

  const validatePasswords = (pwd, rePwd) => {
    if(pwd === rePwd) {
      setIsPwdEquals(true);
      return pwd;
    } else {
      setIsPwdEquals(false);
      throw('Passwords not match!');
    }
  }

  useEffect(() => {
    let form = signupForm.current;
    let credentials = {};
    async function postSignup(e) {
      e.preventDefault();
      // if (email.current !== '' || password.current !== '') return;
      credentials = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        password: validatePasswords(password.current.value, rePassword.current.value)
      };
      
      if(isPwdEquals){
        try {
          const res = await axios.post(
            import.meta.env.VITE_API_URL_SIGNUP,
            JSON.stringify(credentials)
          );
          console.log(res.data);
        } catch (error) {
          setIsLogged(false);
          console.log(error);
        }
      }
    }
    form.addEventListener('submit', postSignup);

    return () => {
      form.removeEventListener('submit', postSignup);
    };
  }, []);

  return (
    <div className="w-full h-screen p-4 md:p-8 relative flex flex-row justify-between">
      <div className="mid-left w-full md:w-1/2">
        <h1 className="capitalize text-4xl font-bold">Dashboard</h1>
      </div>
      <div className="mid-right md:w-1/2 hidden md:block">
        <img src={moonImg} alt="Image Login" className="fixed md:-top-1/4 lg:-top-1/3 lg:-right-36 lg:w-2/4" />
      </div>
      {/* <div className="form-center md:bg-white w-full md:w-2/3 lg:w-1/3 p-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:border rounded md:shadow-xl">
        <p className="text-4xl text-center md:text-xl font-bold mb-4 capitalize">Signup</p>
        <form ref={loginForm}>
          <div className="mb-6">
            <div class="relative">
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
          <div class="relative">
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
                New Password
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Login
          </button>
          <div className="link-signup">
            <span className="text-sm text-gray-600">
              Have an account?{' '}
              <Link
                to="/signup"
                className="capitalize text-black cursor-pointer underline"
              >
                Login!
              </Link>
            </span>
          </div>
        </form>
      </div> */}
      <SignupForm form={signupForm} firstName={firstName} lastName={lastName} email={email} password={password} rePassword={rePassword} />
    </div>
  );
}
