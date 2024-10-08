// src/services/fakeStoreService.js
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    console.log(response.data); // Log the response to check the structure
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
