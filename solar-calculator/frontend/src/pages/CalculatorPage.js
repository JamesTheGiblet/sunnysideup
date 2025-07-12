import React from 'react';
import InputForm from '../components/InputForm';
import ResultsDisplay from '../components/ResultsDisplay';
import FAQModal from '../components/FAQModal';
import QuotePreview from '../components/QuotePreview';

function CalculatorPage() {
  // State management for calculator inputs and results
  const [showFAQ, setShowFAQ] = React.useState(false);
  const [showPreview, setShowPreview] = React.useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Solar Panel Calculator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InputForm />
        <ResultsDisplay />
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowFAQ(true)}>
          Open FAQ
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowPreview(true)}>
          Preview Quote
        </button>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Send Quote
        </button>
      </div>
      {showFAQ && <FAQModal onClose={() => setShowFAQ(false)} />}
      {showPreview && <QuotePreview onClose={() => setShowPreview(false)} />}
    </div>
  );
}

export default CalculatorPage;