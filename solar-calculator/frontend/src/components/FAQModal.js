import React from 'react';
// This component will display the FAQ search and expandable answers.
function FAQModal({ onClose }) {
  const faqs = [
    { id: 1, question: 'How long do solar panels last?', answer: 'Most solar panels come with a 25-year performance warranty, but can last 30+ years.', category: 'Technical' },
    { id: 2, question: 'What is the Smart Export Guarantee (SEG)?', answer: 'The SEG is a UK government scheme that pays you for excess electricity exported to the grid.', category: 'Financial' },
    // More FAQs will be fetched from backend
  ];
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeFAQ, setActiveFAQ] = React.useState(null);

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl">&times;</button>
        </div>
        <input 
          type="text" 
          placeholder="Search FAQs..." 
          className="w-full p-2 border rounded mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map(faq => (
              <div key={faq.id} className="border-b py-2">
                <button 
                  className="w-full text-left font-medium text-lg flex justify-between items-center"
                  onClick={() => setActiveFAQ(activeFAQ === faq.id ? null : faq.id)}
                >
                  {faq.question}
                  <span>{activeFAQ === faq.id ? '-' : '+'}</span>
                </button>
                {activeFAQ === faq.id && (
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No FAQs found for your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default FAQModal;