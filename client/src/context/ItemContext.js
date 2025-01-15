// src/context/ItemContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for managing items
const ItemContext = createContext();

// Create a custom hook to use the ItemContext
export const useItemContext = () => useContext(ItemContext);

// Create a provider component that will wrap your app
export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Context value to share across the app
  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
};
