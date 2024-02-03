"use client"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProfile, loadUser } from '@/features/user/userSlice';
const MyForm = () => {

  const dispatch = useDispatch()
  const { profile } = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(loadUser());
  },[profile])

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (firstName.trim() === '') {
      newErrors.firstName = 'Please enter your first name';
      valid = false;
    }

    if (lastName.trim() === '') {
      newErrors.lastName = 'Please enter your last name';
      valid = false;
    }

    if (phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Please enter your phone number';
      valid = false;
    }

    if (selectedOption.trim() === '') {
      newErrors.selectedOption = 'Please select an option';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'phoneNumber') {
      setPhoneNumber(value);
    } else if (name === 'selectOption') {
      setSelectedOption(value);
    } else if (name === 'image') {
      setImage(e.target.files[0]);
    }
  };

  const handleBlur = (fieldName) => {
    const newErrors = { ...errors };
    if (fieldName in newErrors) {
      delete newErrors[fieldName];
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform form submission logic here
       const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('phoneNumber', phoneNumber);
      formData.append('selectedOption', selectedOption);
      formData.append('image', image);

      dispatch(addProfile(formData));

     
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setSelectedOption('');
      setImage(null);
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center md:mt-10 mt-0 px-5 md:px-0">
      {profile === null ?
    (<form className="max-w-md mx-auto p-8 bg-white rounded shadow my-10">
        <h2 className="text-2xl mb-4 text-center">Build profile</h2>
        <div className="mb-4">
          <label className="block mb-2 text-gray-800" htmlFor="firstName">
            First Name
          </label>
          <input
            className={`w-full px-3 py-2 border rounded ${
              errors.firstName ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:border-indigo-500`}
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            onBlur={() => handleBlur('firstName')}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-800" htmlFor="lastName">
            Last Name
          </label>
          <input
            className={`w-full px-3 py-2 border rounded ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:border-indigo-500`}
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            onBlur={() => handleBlur('lastName')}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-800" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className={`w-full px-3 py-2 border rounded ${
              errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:border-indigo-500`}
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleInputChange}
            onBlur={() => handleBlur('phoneNumber')}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-800" htmlFor="selectOption">
            Select Insurance
          </label>
          <select
            className={`w-full px-3 py-2 border rounded ${
              errors.selectedOption ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:border-indigo-500`}
            id="selectOption"
            name="selectOption"
            value={selectedOption}
            onChange={handleInputChange}
            onBlur={() => handleBlur('selectedOption')}
          >
            <option value="">-- Select --</option>
            <option value="option1">Africa Insurance</option>
            <option value="option2">Awash Insurance</option>
            <option value="option3">Nile Insurance</option>
          </select>
          {errors.selectedOption && (
            <p className="text-red-500 text-xs mt-1">{errors.selectedOption}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-800" htmlFor="image">
            Image
          </label>
          <input
            className={`w-full ${
              errors.image ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:border-indigo-500`}
            type="file"
            id="image"
            name="image"
            onChange={handleInputChange}
            onBlur={() => handleBlur('image')}
          />
          {errors.image && (
            <p className="text-red-500 text-xs mt-1">{errors.image}</p>
          )}
        </div>
        <div className="mt-6">
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </div>
        </form>) : (
          <div className='flex flex-col gap-4 font-semibold text-xl justify-center items-center text-black '>
            <p>{ profile.firstName}</p>
            <p>{ profile.lastName}</p>
            <p>{ profile.phone}</p>
            <p>{ profile.insurance}</p>
          </div>
      )  
    }
      
    </div>
  );
};

export default MyForm;