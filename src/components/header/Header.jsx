import React from 'react';

// TODO: Fix the mobile and tablet ui.
export default function Header() {
  return (
    <div className="md:w-1/4">
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
            <time className="mb-1 text-sm font-normal leading-none cursor-pointer active:text-black dark:text-gray-500">
              Lorem
            </time>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none cursor-pointer text-gray-400 active:text-black dark:text-gray-500">
              Lorem
            </time>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none cursor-pointer text-gray-400 active:text-black dark:text-gray-500">
              Lorem
            </time>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none cursor-pointer text-gray-400 active:text-black dark:text-gray-500">
              Lorem
            </time>
          </li>
        </ol>
      </div>
    </div>
  );
}
