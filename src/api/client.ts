
/**
 * API client for connecting to the Flask backend
 */

// Base URL for the Flask backend - update this to your actual backend URL when deployed
const API_BASE_URL = 'http://localhost:5000';

/**
 * Generic fetch function to make API requests to the Flask backend
 */
export const fetchFromAPI = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || `API error: ${response.status}`);
  }

  return await response.json();
};

/**
 * Example API functions for specific endpoints
 */
export const api = {
  // Example function to get data from the backend
  getData: () => fetchFromAPI<any>('/api/data'),
  
  // Example function to send data to the backend
  sendData: (data: any) => fetchFromAPI<any>('/api/data', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  // Add more API functions as needed for your application
};
