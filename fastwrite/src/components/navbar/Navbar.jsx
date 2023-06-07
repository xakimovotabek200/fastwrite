import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <div className="bg-gray-50 ">
        <div className="container mx-auto flex justify-around items-center w-[90%]">
          <p className="text-gray-800 font-bold text-3xl pb-2">
            Turbo<span className="text-blue-600">Type</span>
          </p>
          <div className="hidden md:flex gap-6 mt-[15px]">
            <Link
              href={"/"}
              className="text-gray-700 text-[20px] pb-5 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="text-gray-700 text-[20px] pb-5 font-semibold hover:text-blue-600 cursor-pointer"
            >
              About
            </Link>
            <Link
              href={"/"}
              className="text-gray-700 text-[20px] pb-5 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Bog
            </Link>
            <Link
              href={"/"}
              className="text-gray-700 text-[20px] pb-5 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Contact
            </Link>
          </div>
          <div className="flex gap-4">
            <button class="mr-[30px] md:block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-8 rounded">
              Sign in
            </button>
            <svg
              className="mx-auto md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-menu-2"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
            <button className="hidden md:block uppercase mx-auto shadow bg-indigo-500 hover:bg-indigo-800 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-8 rounded">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
