"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {

  // State variables for form handling
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: '',
    email: '',
    message: '',
    phoneNumber: '',
    subject: '',
  });
  const [errors, setErrors] = useState({});

  // Handler for input value changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler for input blur (validation)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    // Basic validation for empty fields and email format
    if (!value.trim()) {
      newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      newErrors[name] = 'Invalid email address';
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
  };

  // Validation for the entire form
  const validateForm = () => {
  let isValid = true;
  const newErrors = {};

  // Check each required field for emptiness and email format
  ['name', 'email', 'phoneNumber', 'subject', 'message'].forEach((field) => {
    if (!query[field].trim()) {
      newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      isValid = false;
    }
  });

  if (!query.email.trim()) {
    newErrors.email = 'Email is required';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(query.email)) {
    newErrors.email = 'Invalid email address';
    isValid = false;
  }

  // Phone number validation
  const phoneNumberPattern = /^\d{10}$/; // Adjust the pattern based on your validation rules
  if (!query.phoneNumber.trim()) {
    newErrors.phoneNumber = 'Phone number is required';
    isValid = false;
  } else if (!phoneNumberPattern.test(query.phoneNumber.replace(/\D/g, ''))) {
    newErrors.phoneNumber = 'Invalid phone number';
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
};


  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    if (!validateForm()) return;

    setLoading(true);

   const formData = new FormData();

// Manually append key-value pairs in the desired order

formData.append('name', query.name);
formData.append('email', query.email);
formData.append('phoneNumber', query.phoneNumber);
formData.append('subject', query.subject);
formData.append('message', query.message);

// Log the contents of the FormData object
for (const pair of formData.entries()) {
  console.log(pair[0], pair[1]);
}
    // Sending form data to a server (replace '#' with actual endpoint)
    axios
      .post('https://getform.io/f/2026ca1a-adcd-4e28-86c1-3287386b2d6d', formData, {
        headers: { Accept: 'application/json' },
      })
      .then(function (response) {
        // Handling successful form submission
        setFormStatus(true);
        setQuery({
          name: '',
          email: '',
          message: '',
          phoneNumber: '',
          subject: '',
        });
        setLoading(false);
      })
      .catch(function (error) {
        // Handling form submission error
        
        setLoading(false);
      });
  };
  return (
    <div id='contact' className="min-h-screen bg-[url('/assets/contact_us.svg')] bg-no-repeat bg-right">
      <div className='grid lg:grid-cols-4'>
        <div className='lg:col-span-2 flex flex-col justify-center ml-10  mr-10 mt-10 md:mt-16'>
        
        <h1 className="text-center font-bold text-4xl mt-20">
        Contact Us
        </h1>
        <div className='flex justify-center mt-1 mb-10'>
            <hr className='bg-sky-500 h-1 w-16'/>
          </div>
          <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/2">
              {/* Input fields for name, company name, email, phone, subject, and message */}
            <input
              type="text"
              name="name"
              value={query.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your Full Name"
              className={`p-2 mb-4 bg-sky-200 shadow-md rounded-md text-black focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-sky-400'
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

           

            <input
              type="email"
              name="email"
              value={query.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your Email"
              className={`mb-4 p-2 bg-sky-200 shadow-md rounded-md text-black focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-sky-400'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="tel"
              name="phoneNumber"
              value={query.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your Phone Number"
              className={`p-2 mb-4 bg-sky-200 shadow-md rounded-md text-black focus:outline-none ${
                errors.phoneNumber ? 'border-red-500' : 'border-sky-400'
              }`}
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}

            <input
              type="text"
              name="subject"
              value={query.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your Subject"
              className={`p-2 mb-4 bg-sky-200 shadow-md rounded-md text-black focus:outline-none ${
                errors.subject ? 'border-red-500' : 'border-sky-400'
              }`}
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}

            <textarea
              name="message"
              rows="10"
              value={query.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your Message"
              className={`p-2 bg-sky-200 shadow-md rounded-md text-black focus:outline-none ${
                errors.message ? 'border-red-500' : 'border-sky-400'
              }`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

             <button
      type="submit"
      className="text-white bg-gradient-to-r from-sky-400 to-sky  to-sky-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
      disabled={loading} // Disable the button when loading is true
   
    >
      {loading ? 'Sending...' : "Let's talk"}
    </button>

            {formStatus && (
              <div className="mt-4 p-4 bg-green-500 text-white rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="inline-block">Message sent successfully!</p>
              </div>
            )}
          </form>
      </div>
        
      
        </div>
        <div className=''></div>
        
      </div>
    </div>
  )
}

export default Contact
