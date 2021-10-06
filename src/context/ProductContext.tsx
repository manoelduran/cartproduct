import React, { useState } from 'react';
import { ReactNode } from 'react';
import * as api from '../services/api';
import { formatPrice } from '../utils/format';

interface ProductsProviderProps {
  children: ReactNode;
};

interface IProductsContext {
  products: Product[];
  setProducts: (products: Product[]) => void;
  fetchProducts: () => Promise<void>;
  orderBy: (by: string, asc: boolean) => Promise<void>;
};

export const ProductsContext = React.createContext<IProductsContext>({} as IProductsContext);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortedBy, setSortedBy] = useState('')
  const [isAsc, setIsAsc] = useState(false)


  const fetchProducts = async () => {
    const products = await api.searchProducts()
    setProducts(products);
  }


  const orderBy = async(by: string, asc: boolean) => {
    if (by === sortedBy) {
        setIsAsc(!isAsc)
    } else {
        setIsAsc(true)
        setSortedBy(by)
    }
   await api.searchByOrder(by, asc).then(data => {
    let orderedNFormatted = data.map((item: Product) => {
      return {
          ...item,
          priceFormatted: formatPrice(item.price)
      }
  })
  setProducts(orderedNFormatted)
   })
}


  return (
    <ProductsContext.Provider value={{ orderBy, products, setProducts, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}