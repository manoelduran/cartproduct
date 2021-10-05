import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './context/ProductContext';
import GlobalStyles from './styles/global';
import { Header } from './components/Header';
import Routes from './routes';
import { CartProvider } from './context/CartContext';



const App = (): JSX.Element => (
  <BrowserRouter>
    <ProductsProvider>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <Routes />
      </CartProvider>
    </ProductsProvider>
  </BrowserRouter>
);

export default App;