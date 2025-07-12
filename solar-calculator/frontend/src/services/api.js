// Centralized place for API calls
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

export const getProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products/`);
  return response.json();
};

export const getFAQs = async (search = '') => {
  const response = await fetch(`${API_BASE_URL}/faqs/?search=${search}`);
  return response.json();
};

export const sendQuote = async (quoteData) => {
  const response = await fetch(`${API_BASE_URL}/quotes/send/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quoteData),
  });
  return response.json();
};
