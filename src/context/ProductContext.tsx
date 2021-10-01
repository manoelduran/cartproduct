import React, { useState } from 'react';
import { ReactNode } from 'react';
import * as api from '../services/api';

interface ProductsProviderProps {
  children: ReactNode;
};

interface IProductsContext {
  products: Product[];
  setProducts: (products: Product[]) => void;
  fetchProducts: () => Promise<void>;
};

export const ProductsContext = React.createContext<IProductsContext>({} as IProductsContext);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);


  const fetchProducts = async () => {
    const products = await api.searchProducts()
    setProducts(products);
  }
  return (
    <ProductsContext.Provider value={{ products, setProducts, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}