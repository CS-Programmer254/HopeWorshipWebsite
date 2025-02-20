import { useState } from 'react';
import axios from 'axios';

export default function GiveForm() {
  // State for form fields as an array
  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    telephone: '',
    offeringType: '',
    offeringAmount: '',
  });

  // State for handling form submission status
  const [status, setStatus] = useState('');

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields(prevFields => ({
      ...prevFields,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make POST request to backend
      const response = await axios.post('http://localhost:5000/api/mpesa/initiate', formFields);

      // Handle success response
      setStatus('Donation successful!');
      console.log(response.data);
    } catch (error) {
      // Handle error response
      setStatus('Failed to process donation.');
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="flex-1 flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Give Offering</h1>
          <p className="mt-2 text-gray-400">Specify type of offering, tithe, love offering, project, other</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-blue-600 text-center">Donate With Love</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">First Name</label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  value={formFields.firstName}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter First Name"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">Last Name</label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  value={formFields.lastName}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter Last Name"
                />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-300">Telephone</label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  value={formFields.telephone}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter Telephone Number"
                />
              </div>
              <div>
                <label htmlFor="offeringType" className="block text-sm font-medium text-gray-300">Type Of Offering</label>
                <input
                  id="offeringType"
                  name="offeringType"
                  type="text"
                  value={formFields.offeringType}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Select type of offering"
                />
              </div>
              <div>
                <label htmlFor="offering-amount" className="block text-sm font-medium text-gray-300">Offering Amount</label>
                <input
                  id="offering-amount"
                  name="offeringAmount"
                  type="number"
                  value={formFields.offeringAmount}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Amount in (Ksh)"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Give
              </button>
            </div>
            {status && <p className="text-center text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
