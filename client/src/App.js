import React from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';
import './App.css';

// Import ItemProvider to wrap the app with context
import { ItemProvider } from './context/ItemContext';

const App = () => {
  return (
    // Wrap the entire app with ItemProvider to provide context to all child components
    <ItemProvider>
      <Header />
      <ProductList />
    </ItemProvider>
  );
};

export default App;
