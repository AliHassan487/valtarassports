// src/services/productService.js
const API_URL = 'https://fakestoreapi.com/products';

const productService = {
  // Fetch all products
  getProducts: async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  },

  // Fetch product by id
  getProductById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product details');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching product details:', error);
      return null;
    }
  },
};

export default productService;
