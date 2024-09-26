let cart = [];

const getCartItems = () => cart;

const addToCart = (product) => {
  cart.push(product);
};

const removeFromCart = (id) => {
  cart = cart.filter(item => item.id !== id);
};

export default { getCartItems, addToCart, removeFromCart };
