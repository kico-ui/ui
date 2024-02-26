import React from "react"

const Navbar = () => {
  return (
    <div className="w-full border-b backdrop-blur">
      <div className="w-[90%] mx-auto flex h-14 items-center justify-between">
        <div className="hidden items-center justify-center md:flex">
          <h1 className="mr-4 font-bold tracking-wider">
            <a href="#">Kico-ui</a>
          </h1>
          <div className="flex items-center justify-center space-x-5">
            <a
              href="#"
              className="active:text-balck text-sm text-gray-600 transition-all hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="active:text-balck text-sm text-gray-600 transition-all hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#"
              className="active:text-balck text-sm text-gray-600 transition-all hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center md:hidden">
          <div className="flex items-center justify-center space-x-3">
            <button>
              <svg
                height="20px"
                width="20px"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5H11"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 12H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 19H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <h1 className="font-bold tracking-wider">
              <a href="#">Kico-ui</a>
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <div className="hidden items-center justify-between border border-gray-600 rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search here.."
              className="text-sm outline-none bg-transparent placeholder:text-sm"
            />
            <button className="rounded-[50%] bg-gray-900 hover:bg-gray-700 text-white size-6 flex items-center justify-center text-sm font-thin dark:bg-white dark:text-black dark:hover:bg-gray-200">
              S
            </button>
          </div>
          <button className="border border-black px-3 py-1 text-sm font-light tracking-wider text-black transition-all hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-800 dark:border-white dark:text-white">
            Login
          </button>
          <button className="bg-gray-900 border border-black dark:border-white px-3 py-1 text-sm font-light tracking-wider text-white transition-all hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
