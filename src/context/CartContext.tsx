import React, { useState } from 'react';
import { ReactNode } from 'react';


interface CartProviderProps {
    children: ReactNode;
};

interface UpdateProductAmount {
    productId: number;
    amount: number;
}

interface ICartContext {
    products: Product[];
    addProduct: (productId: number) => Promise<void>;
    removeProduct: (productId: number) => void;
    updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
};