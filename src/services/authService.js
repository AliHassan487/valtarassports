const authService = {
    async login(email, password) {
      const response = await fetch('/api/login', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error('Failed to login');
      }
      return await response.json(); // Assuming the response contains user data
    },
  
    async signup(email, password) {
      const response = await fetch('/api/signup', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error('Failed to signup');
      }
      return await response.json(); // Assuming the response contains user data
    },
  };
  
  export default authService;
  