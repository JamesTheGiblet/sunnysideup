import React from 'react';
// This component will contain all input fields for roof dimensions, customer info etc.
// It will also feature the '?' interactive hints.
function InputForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Input Details</h2>
      {/* Example Input Field */}
      <div className="mb-4">
        <label htmlFor="roofLength" className="block text-gray-700 text-sm font-bold mb-2">
          Roof Length (meters)
          <span className="ml-2 text-gray-500 cursor-help" title="Enter the usable length of your roof section.">?</span>
        </label>
        <input type="number" id="roofLength" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="e.g., 10" />
      </div>
      {/* More input fields will go here */}
    </div>
  );
}
export default InputForm;