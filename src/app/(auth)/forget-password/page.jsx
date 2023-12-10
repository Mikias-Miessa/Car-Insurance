"use client"
import { useState } from 'react';
import Link from 'next/link';

const forgetPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

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

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit the form
    console.log('Email:', email);

    // Reset form fields and errors
    setEmail('');
    setErrors({});
  };

  return (
    <div id='forget' className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Forgot Password</h2>
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
        <Link href="/register" className="block text-blue-500 mt-2 text-base text-center hover:underline">
          Not registered yet? Register now
        </Link>
      </div>
    </div>
  );
};

export default forgetPassword;
