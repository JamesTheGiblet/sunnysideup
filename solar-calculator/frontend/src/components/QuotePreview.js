import React from 'react';
// This component will display a print-friendly preview of the quote.
function QuotePreview({ onClose }) {
  // In a real app, this would fetch the HTML/PDF preview from the backend
  // or render a client-side representation of the quote.
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Quote Preview</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl">&times;</button>
        </div>
        {/* This iframe would load the PDF or HTML preview from the backend */}
        <iframe 
          src="https://placehold.co/600x400/E0E0E0/333333?text=Your+Quote+Preview+Here"
          title="Quote Preview"
          className="w-full h-[60vh] border rounded"
        ></iframe>
        <p className="mt-4 text-center text-gray-600">This is a placeholder for your detailed quote preview.</p>
      </div>
    </div>
  );
}
export default QuotePreview;