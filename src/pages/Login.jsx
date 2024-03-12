import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      // Simulating login logic
      const response = await axios.post('/api/login', formData);
      if (response.data.success) {
        // Show success notification if login is successful
        toast.success('Login successful!');
      } else {
        // Show error notification if login fails
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error.message);
      toast.error('Login failed. Please try again later.');
    }
  };
  const location = useLocation();
  // Scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
 <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8  ">
 
  <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
    <img className="mx-auto h-12 w-auto rounded-full" src="https://img.freepik.com/free-vector/gradient-instagram-shop-logo-template_23-2149704603.jpg?t=st=1710172313~exp=1710175913~hmac=3bf74c11b0ecab4b8e02f5cdb76b16a601bb9764980fe4eedbab387170ee3d44&w=740" alt="Your Company" />
    <h2 className="mt-4 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>
  <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" value={formData.email}
                onChange={handleChange} placeholder='Enter your valid email' type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password"  value={formData.passowrd}
                onChange={handleChange} placeholder='Enter your Password' type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900">Sign in</button>
      </div>
    </form>
    <p className="mt-4 text-center  text-sm text-gray-500">
      Not a member?
      <Link to="/register" className="font-semibold leading-6  text-indigo-600 hover:text-indigo-500">Register Now</Link>
    </p>
  </div>
  </div>


    </>
  )
}

export default Login
