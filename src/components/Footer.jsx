import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";



const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-red-200 ">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex  justify-center   flex-wrap md:text-left text-center order-first">

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <img
                src="https://img.freepik.com/free-vector/gradient-instagram-shop-logo-template_23-2149704603.jpg?t=st=1710172313~exp=1710175913~hmac=3bf74c11b0ecab4b8e02f5cdb76b16a601bb9764980fe4eedbab387170ee3d44&w=740"
                className="w-16 h-16      rounded-full"
                viewbox="0 0 24 24"
                alt="Logo"
              /> 
              <h2 className="title-font font-bold text-md mt-4 text-red-500 capitalize tracking-widest  mb-3">Chautaro Auto Link</h2>
             
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-md mb-3 ">Shop</h2>
              <nav className="list-none mb-10  ">
                <li>
                  <a href="/products" className="text-gray-600 hover:text-gray-800">Products</a>
                </li>
                <li>
                  <a href="/categories" className="text-gray-600 hover:text-gray-800">Categories</a>
                </li>
                <li>
                  <a href="/special-offers" className="text-gray-600 hover:text-gray-800">Special Offers</a>
                </li>
                <li>
                  <a href="/new-arrivals" className="text-gray-600 hover:text-gray-800">New Arrivals</a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-md mb-3">Customer Service</h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
                <li>
                  <a href="/shipping" className="text-gray-600 hover:text-gray-800">Shipping Information</a>
                </li>
                <li>
                  <a href="/returns" className="text-gray-600 hover:text-gray-800">Returns & Exchanges</a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-600 hover:text-gray-800">FAQs</a>
                </li>
              </nav>
            </div>

            

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-md mb-8">Follow Us</h2>
              <nav className="list-none mb-10 gap-8  flex ">
                <li>
                  <a href="https://www.facebook.com" className="text-gray-600 text-xl hover:text-gray-800"><FaFacebookF /></a>
                </li>
                <li>
                  <a href="https://www.twitter.com" className="text-gray-600 text-xl hover:text-gray-800"><FaTwitter /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com" className="text-gray-600 text-xl hover:text-gray-800"><IoLogoInstagram /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com" className="text-gray-600 text-xl hover:text-gray-800"><FaLinkedinIn /></a>
                </li>
              </nav>
            </div>

          </div>
        </div>
       
      </footer>
    </>
  );
};

export default Footer;
