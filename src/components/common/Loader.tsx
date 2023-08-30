import React from "react";

const LoaderItem: React.FC = () => (
  <div className="w-full">
    <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
      <div className="shadow p-4 rounded-lg bg-white loading">
        <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
          <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
            <div className="absolute inset-0 bg-black hover:opacity-80 opacity-100"></div>
          </div>

          <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none loading"></span>
        </div>

        <div className="mt-4">
          <p className="font-medium text-base md:text-lg text-gray-800 line-clamp-1 loading" />
          <p className="mt-2 text-sm text-gray-800 line-clamp-1 loading" />
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
          <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
            Loading...
          </p>
          <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
            Loading...
          </p>
        </div>

        <div className="grid grid-cols-2 mt-8">
          <div className="flex justify-end">
            <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl loading" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Loader: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
    <LoaderItem />
    <LoaderItem />
    <LoaderItem />
  </div>
);

export default Loader;
