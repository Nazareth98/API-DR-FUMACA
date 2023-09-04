export const formatPhoneNumber = (input) => {
  const cleaned = ("" + input).replace(/\D/g, ""); // Remove caracteres não numéricos
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/); // Separação DDD + 8 dígitos
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`; // Formato (DD) 12345-6789
  }
  return input;
};

export const formatCpf = (input) => {
  const cleaned = ("" + input).replace(/\D/g, ""); // Remove caracteres não numéricos
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/); // Separação em blocos de 3 dígitos
  if (match) {
    return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`; // Formato 123.456.789-01
  }
  return input;
};

export const formatString = (string) => {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const addToCart = (productId) => {
  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = currentCart.find((item) => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    currentCart.push({ id: productId, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(currentCart));
};

export const getCartItems = () => {
  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
  return currentCart;
};

export const removeFromCart = (productId) => {
  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

  const productIndex = currentCart.findIndex((item) => item.id === productId);

  if (productIndex !== -1) {
    currentCart.splice(productIndex, 1);

    localStorage.setItem("cart", JSON.stringify(currentCart));
  }
};

export const editCartItemQuantity = (productId, newQuantity) => {
  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = currentCart.find((item) => item.id === productId);

  if (product && newQuantity >= 0) {
    product.quantity = newQuantity;

    localStorage.setItem("cart", JSON.stringify(currentCart));
  }
};
