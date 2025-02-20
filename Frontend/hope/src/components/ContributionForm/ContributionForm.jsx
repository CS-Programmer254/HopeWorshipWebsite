import React, { useState, useEffect } from "react";

const ContributionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    admissionNumber: "",
    course: "",
    amount: "",
  });

  const [contributions, setContributions] = useState([]);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Load contributions from localStorage when the component mounts
  useEffect(() => {
    const savedContributions = localStorage.getItem("contributions");
    if (savedContributions) {
      setContributions(JSON.parse(savedContributions));
    }
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simulate payment process and add to contributions list
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add contribution to the list if all fields are filled
    if (formData.firstName && formData.admissionNumber && formData.course && formData.amount) {
      const newContributions = [...contributions, formData];
      setContributions(newContributions);
      localStorage.setItem("contributions", JSON.stringify(newContributions)); // Save to localStorage
      setFormData({ firstName: "", admissionNumber: "", course: "", amount: "" }); // Clear form
      setPaymentSuccess(true);
      setTimeout(() => setPaymentSuccess(false), 3000); // Hide success message after 3 seconds
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Contribution Form */}
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-center mb-6">MUCISA Contribution</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Admission Number</label>
            <input
              type="text"
              name="admissionNumber"
              value={formData.admissionNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your admission number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your course"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter contribution amount"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md font-semibold hover:bg-blue-600 transition"
          >
            Pay Contribution
          </button>
        </form>

        {/* Success message */}
        {paymentSuccess && (
          <div className="mt-6 flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <span className="text-lg font-semibold text-green-600">
              Payment Successful!
            </span>
          </div>
        )}
      </div>

      {/* Contributions Table */}
      {contributions.length > 0 && (
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">List of Contributions</h3>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2">First Name</th>
                  <th className="px-4 py-2">Admission Number</th>
                  <th className="px-4 py-2">Course</th>
                  <th className="px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {contributions.map((contribution, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{contribution.firstName}</td>
                    <td className="px-4 py-2">{contribution.admissionNumber}</td>
                    <td className="px-4 py-2">{contribution.course}</td>
                    <td className="px-4 py-2">{contribution.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContributionForm;
