import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { close, toggle } from "../redux/features/hamSlice";
import { FaCartPlus, FaHeart } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => {
    return state.hamburger.value;
  });
  const location = useLocation();

  // Scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav className="text-primary py-2 bg-white body-font topheader  sticky top-0 w-full  z-[99] shadow-xl  overflow-hidden ">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* logo and hamburger menu */}
          <div className="flex items-center  pt-2">
            <Link
              className="flex  font-medium items-center text-gray-900 mb-4 md:mb-0"
              to="/"
            >
              <img
                src="https://img.freepik.com/free-vector/gradient-instagram-shop-logo-template_23-2149704603.jpg?t=st=1710172313~exp=1710175913~hmac=3bf74c11b0ecab4b8e02f5cdb76b16a601bb9764980fe4eedbab387170ee3d44&w=740"
                className="w-14 h-14 mr-2  ml-2 text-red-500  rounded-full"
                viewbox="0 0 24 24"
                alt="Logo"
              />
              <p className="text-xl text-red-500 pr-1">CHAUTARO </p>
              <br />
              <p className="text-xl text-sec ">AUTO LINK</p>
            </Link>
          </div>

          <div className="block lg:hidden">
            <button
              onClick={() => {
                dispatch(toggle());
              }}
              className="text-red-900 focus:outline-none pe-3"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                ></path>
              </svg>
            </button>
          </div>

          {/* nav-items  mid  */}

          <div className="hidden lg:flex flex-grow justify-center font-medium  ">
            <Link
              to="/"
              activeClassName="active"
              className="mr-5 hover:text-third "
            >
              <div className="flex justify-center items-center gap-1 ">
                Home
              </div>
            </Link>
            <Link
              to="/product"
              activeClassName="active"
              className="mr-5 hover:text-third"
            >
              Products
            </Link>
            <Link
              to="/category"
              activeClassName="active"
              className="mr-5 hover:text-third"
            >
              Categories
            </Link>
            <Link
              to="/contact"
              activeClassName="active"
              className="mr-5 hover:text-third"
            >
              Contact
            </Link>
          </div>

          {/* nav-items  right  */}

          <div className="hidden lg:flex items-center ">
            <Link
              to="/cart"
              activeClassName="active"
              className="mr-5 hover:text-third"
            >
              <FaCartPlus className="text-xl"/>
            </Link>
            <Link
              to="/wishlist"
              activeClassName="active"
              className="mr-5 hover:text-third"
            >
              <FaHeart className="text-xl"/>
            </Link>
            <Link
              to="/login"
              activeClassName="active"
              className="mr-5 hover:text-third"
            >
              Login
            </Link>
            <Link
              to="/register"
              activeClassName="active"
              className="mr-5 hover:text-third"
            >
              register
            </Link>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-gray-300   text-red-500 lg:hidden py-5 mt-5 text-center font-medium`}
        >
          {/* Mobile menu content */}
          <Link
            to="/"
            className="block text-red-500 px-4 py-2 border-b border-white"
            onClick={() => {
              dispatch(close());
            }}
          >
            Home
          </Link>
          <Link
            to="/product"
            className="block text-red-500 px-4 py-2 border-b border-white"
            onClick={() => {
              dispatch(close());
            }}
          >
            Products
          </Link>
          <Link
            to="/category"
            className="block text-red-500 px-4 py-2 border-b border-white"
            onClick={() => {
              dispatch(close());
            }}
          >
            Categories
          </Link>
          <Link
            to="/contact"
            className="block text-red-500 px-4 py-2 border-b border-white"
            onClick={() => {
              dispatch(close());
            }}
          >
            Contact
          </Link>
         
          <Link
            to="/register"
            className="block text-red-500 px-4 py-2 border-b border-white"
            onClick={() => {
              dispatch(close());
            }}
          >
            Register
          </Link>
          <Link
            to="/login"
            className="block text-red-500 px-4 py-2 border-b border-white"
            onClick={() => {
              dispatch(close());
            }}
          >
            Login
          </Link>
          <Link
            to="/cart"
            className="block text-red-500 px-4 py-2 border-b border-white"
            onClick={() => {
              dispatch(close());
            }}
          >
           <div className="flex justify-center items-center gap-3">
           Cart<FaCartPlus className="text-xl"/> 
           </div>
          </Link>
          <Link
            to="/wishlist"
            className="block text-red-500 px-4 py-2 "
            onClick={() => {
              dispatch(close());
            }}
          >
           <div className="flex justify-center items-center  gap-3">
           wishlist<FaHeart  className="text-xl"/> 
           </div>
          </Link>
        </div>
      </nav>

      <style jsx>{`
        @media screen and (max-width: 640px) {
          .topheader {
            background-color: #f8fae5;
            padding: -5px, 0px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
