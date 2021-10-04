import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './context/ProductContext';
import GlobalStyles from './styles/global';
import { Header } from './components/Header';
import Routes from './routes';



const App = (): JSX.Element => (
  <BrowserRouter>
    <ProductsProvider>
    <GlobalStyles />
    <Header />
      <Routes />
    </ProductsProvider>
  </BrowserRouter>
);

export default App;