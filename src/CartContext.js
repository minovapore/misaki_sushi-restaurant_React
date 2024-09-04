import React, { createContext, useState } from 'react';

// Crea il contesto del carrello
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Funzione per aggiungere un articolo al carrello
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem => 
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Funzione per aggiornare la quantità di un articolo nel carrello
  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map(cartItem =>
        cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
      )
    );
  };

  // Funzione per rimuovere un articolo dal carrello
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter(cartItem => cartItem.id !== itemId));
  };

  // Conta il numero totale di articoli nel carrello
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
