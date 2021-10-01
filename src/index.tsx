import React from 'react';
import ReactDOM from 'react-dom';
import { ProductsProvider } from './context/ProductContext';
import { Home } from './Home';

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <Home />
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
