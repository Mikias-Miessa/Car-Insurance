"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {  useDispatch, useSelector } from 'react-redux';
import { logInUser, reset } from '@/features/user/userSlice';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { login } = useSelector((state) => state.user);
  
   useEffect(() => {
    if (login === 'success') {
       toast.success("Login Successful", {
        position: "top-center"
      });
      dispatch(reset())
    }
    if (login === 'failed') {
       toast.error("Login Failed !", {
        position: "top-center"
      });
      dispatch(reset())
}
     
  },[login])

  const handleBlur = (field) => {
    // Clear the specific error when the field is blurred
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!password) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const userData = {
      email: email,
      password: password
    }
    // Submit the form
    dispatch(logInUser(userData))
    // console.log('Email:', email);
    // console.log('Password:', password);

    // Reset form fields and errors
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <div id='login' className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`${
                errors.email ? 'border-red-500' : ''
              } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur('email')}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`${
                errors.password ? 'border-red-500' : ''
              } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handleBlur('password')}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
            disabled={login === 'pending'}
          >
            {login === 'pending'?'Loading...':'Login'}
          </button>
        </form>
        <div className="mt-2 flex justify-between w-full max-w-md mx-auto">
        <Link href="/register" className="text-blue-500 text-sm hover:underline">
            Don&rsquo;t have an account?
        </Link>

        <Link href="/forget-password" className="text-blue-500 text-sm hover:underline">
          Forgot password?
        </Link>
      </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
