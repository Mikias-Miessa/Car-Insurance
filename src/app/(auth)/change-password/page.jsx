'use client';
import { useState } from 'react';

const page = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleBlur = (field) => {
    // Clear the specific error when the field is blurred
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!oldPassword) {
      validationErrors.oldPassword = 'Old Password is required';
    }
    if (!newPassword) {
      validationErrors.newPassword = 'New Password is required';
    }
    if (!confirmPassword) {
      validationErrors.confirmPassword = 'Confirm Password is required';
    }
    if (newPassword !== confirmPassword) {
        validationErrors.confirmPassword = 'Passwords do not match';
      }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const userData = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    // Submit the form

    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);

    // Reset form fields and errors
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setErrors({});
  };

  return (
    <div
      id='login'
      className='min-h-screen flex items-center justify-center bg-gray-100'
    >
      <div className='bg-white p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>
          Change Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='oldPassword'
            >
              Old Password
            </label>
            <input
              className={`${
                errors.oldPassword ? 'border-red-500' : ''
              } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id='oldPassword'
              type='password'
              placeholder='Old Password'
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              onBlur={() => handleBlur('oldPassword')}
            />
            {errors.oldPassword && (
              <p className='text-red-500 text-xs italic'>
                {errors.oldPassword}
              </p>
            )}
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='newPassword'
            >
              New Password
            </label>
            <input
              className={`${
                errors.newPassword ? 'border-red-500' : ''
              } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id='newPassword'
              type='password'
              placeholder='New Password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              onBlur={() => handleBlur('newPassword')}
            />
            {errors.newPassword && (
              <p className='text-red-500 text-xs italic'>
                {errors.newPassword}
              </p>
            )}
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='confirmPassword'
            >
              Confirm Password
            </label>
            <input
              className={`${
                errors.confirmPassword ? 'border-red-500' : ''
              } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id='confirmPassword'
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={() => handleBlur('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className='text-red-500 text-xs italic'>
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none'
          >
            Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
