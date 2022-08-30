import React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function Project() {
  return (
    <div className="w-full h-full bg-gray-200 rounded-[20px] mt-8 px-4 py-2 md:mt-0 md:px-8 md:py-6">
      <div className="projects-wrapper w-full h-full">
        <div className="projects-navigation w-full h-1/5">
          <div className="cursor-pointer w-fit flex space-x-2">
            <span className="text-2xl pt-[2px]"><HiArrowNarrowLeft /></span>
            <span className="text-xl">Back</span>
          </div>
        </div>
        <div className="projects-container w-full h-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          <div className="project-card bg-white dark:bg-black col-span-1 flex flex-col justify-between rounded-lg p-4">
            <div className="project-identifier flex justify-between items-center">
              <h3 className="id text-black dark:text-white text-xl font-bold">
                001
              </h3>
              <div className="date text-black dark:text-white text-lg font-normal">
                Today | 19:30
              </div>
            </div>
            <div className="project-title">
              <h3 className="project-title text-black dark:text-white text-lg font-normal">
                SebastianBash.com
              </h3>
            </div>
            <div className="project-link">
              <button className="w-full text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 transition-all">
                View Project
              </button>
            </div>
          </div>
          <div className="project-card bg-white dark:bg-black col-span-1 flex flex-col justify-between rounded-lg p-4">
            <div className="project-identifier flex justify-between items-center">
              <h3 className="id text-black dark:text-white text-xl font-bold">
                001
              </h3>
              <div className="date text-black dark:text-white text-lg font-normal">
                Today | 19:30
              </div>
            </div>
            <div className="project-title">
              <h3 className="project-title text-black dark:text-white text-lg font-normal">
                SebastianBash.com
              </h3>
            </div>
            <div className="project-link">
              <button className="w-full text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 transition-all">
                View Project
              </button>
            </div>
          </div>
          <div className="project-card bg-white dark:bg-black col-span-1 flex flex-col justify-between rounded-lg p-4">
            <div className="project-identifier flex justify-between items-center">
              <h3 className="id text-black dark:text-white text-xl font-bold">
                001
              </h3>
              <div className="date text-black dark:text-white text-lg font-normal">
                Today | 19:30
              </div>
            </div>
            <div className="project-title">
              <h3 className="project-title text-black dark:text-white text-lg font-normal">
                SebastianBash.com
              </h3>
            </div>
            <div className="project-link">
              <button className="w-full text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 transition-all">
                View Project
              </button>
            </div>
          </div>
          <div className="project-card bg-white dark:bg-black col-span-1 flex flex-col justify-between rounded-lg p-4">
            <div className="project-identifier flex justify-between items-center">
              <h3 className="id text-black dark:text-white text-xl font-bold">
                001
              </h3>
              <div className="date text-black dark:text-white text-lg font-normal">
                Today | 19:30
              </div>
            </div>
            <div className="project-title">
              <h3 className="project-title text-black dark:text-white text-lg font-normal">
                SebastianBash.com
              </h3>
            </div>
            <div className="project-link">
              <button className="w-full text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 transition-all">
                View Project
              </button>
            </div>
          </div>
          <div className="project-card bg-white dark:bg-black col-span-1 flex flex-col justify-between rounded-lg p-4">
            <div className="project-identifier flex justify-between items-center">
              <h3 className="id text-black dark:text-white text-xl font-bold">
                001
              </h3>
              <div className="date text-black dark:text-white text-lg font-normal">
                Today | 19:30
              </div>
            </div>
            <div className="project-title">
              <h3 className="project-title text-black dark:text-white text-lg font-normal">
                SebastianBash.com
              </h3>
            </div>
            <div className="project-link">
              <button className="w-full text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 transition-all">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
