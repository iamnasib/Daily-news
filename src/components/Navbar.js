import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const toggleNavbar = () => {
    document.querySelector("#navbar-default").classList.toggle("hidden");
  };

  let { title } = props;
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo512.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {title}
          </span>
        </Link>
        <input
          type="checkbox"
          onClick={props.toggleDarkMode}
          id="react-option"
          value=""
          className="hidden peer"
          required=""
        />
        <label
          htmlFor="react-option"
          className="inline-flex items-center justify-between w-fit text-gray-500 cursor-pointer hover:text-gray-700 
          dark:peer-checked:text-gray-300 peer-checked:text-gray-900 dark:text-gray-400">
          <div className="block">
            {props.darkMode ? (
              <svg width="30" height="30" id="light-icon">
                <circle
                  cx="15"
                  cy="15"
                  r="6"
                  fill={`${props.darkMode === true ? "white" : "CurrentColor"}`}
                />

                <line
                  id="ray"
                  stroke={`${
                    props.darkMode === true ? "white" : "CurrentColor"
                  }`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  x1="15"
                  y1="1"
                  x2="15"
                  y2="4"></line>

                <use href="#ray" transform="rotate(45 15 15)" />
                <use href="#ray" transform="rotate(90 15 15)" />
                <use href="#ray" transform="rotate(135 15 15)" />
                <use href="#ray" transform="rotate(180 15 15)" />
                <use href="#ray" transform="rotate(225 15 15)" />
                <use href="#ray" transform="rotate(270 15 15)" />
                <use href="#ray" transform="rotate(315 15 15)" />
              </svg>
            ) : (
              <svg width="30" height="30" id="dark-icon">
                <path
                  fill={`${props.darkMode === true ? "CurrentColor" : "black"}`}
                  d="
                M 23, 5
                A 12 12 0 1 0 23, 25
                A 12 12 0 0 1 23, 5"
                />
              </svg>
            )}
          </div>
        </label>
        <button
          data-collapse-toggle="navbar-default"
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
          hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
          dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row 
          md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
                md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page">
                General
              </Link>
            </li>

            <li>
              <Link
                to="/business"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
                md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Business
              </Link>
            </li>
            <li>
              <Link
                to="/entertainment"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
                md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Entertainment
              </Link>
            </li>

            <li>
              <Link
                to="/health"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
                md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Health
              </Link>
            </li>
            <li>
              <Link
                to="/science"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
                md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Science
              </Link>
            </li>
            <li>
              <Link
                to="/sports"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
                md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Sports
              </Link>
            </li>
            <li>
              <Link
                to="/technology"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
                md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
