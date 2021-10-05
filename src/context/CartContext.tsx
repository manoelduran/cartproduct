import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ReactNode } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';


interface CartProviderProps {
    children: ReactNode;
};

interface UpdateProductAmount {
    productId: number;
    amount: number;
}

interface ICartContext {
    cart: Product[];
    addProduct: (productId: number) => Promise<void>;
    removeProduct: (productId: number) => void;
    updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
};

const CartContext = createContext<ICartContext>({} as ICartContext)

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Product[]>(() => {
        const cartStorage = localStorage.getItem('@VenomStorage:cart');
        if (cartStorage) {
            return JSON.parse(cartStorage);
        } else {
            return []
        };
    });
    const prevCartRef = useRef<Product[]>();
    useEffect(() => {
        prevCartRef.current = cart;
    })
    const cartPreviousValue = prevCartRef.current ?? cart;
    useEffect(() => {
        if (cartPreviousValue !== cart) {
            localStorage.setItem('@VenomStorage:cart', JSON.stringify(cart))
        }
    }, [cart, cartPreviousValue]);
    const addProduct = async (productId: number) => {
        try {
            const updatedCart = [...cart];
            const productExists = updatedCart.find(product => product.id === productId);
            const currentAmount = productExists ? productExists.amount : 0;
            const amount = currentAmount + 1;
            if (productExists) {
                productExists.amount = amount;
            } else {
                const product = await api.get(`/products/${productId}`);
                const newProduct = {
                    ...product.data,
                    amount: 1
                }
                updatedCart.push(newProduct);
            }
            setCart(updatedCart)
        } catch {
            toast.error('Erro na adição do produto');
        }
    };
    const removeProduct = (productId: number) => {
        try {
            const updatedCart = [...cart];
            const productIndex = updatedCart.findIndex(product => product.id === productId);
            if (productIndex >= 0) {
                updatedCart.splice(productIndex, 1);
                setCart(updatedCart);
            } else {
                throw Error();
            }
        } catch {
            toast.error('Erro na remoção do produto');
        }
    };
    const updateProductAmount = async ({
        productId,
        amount,
    }: UpdateProductAmount) => {
        try {
            if (amount <= 0) {
                return;
            }
            const updatedCart = [...cart];
            const productExist = updatedCart.find(product => product.id === productId);
            if (productExist) {
                productExist.amount = amount;
                setCart(updatedCart);
            } else {
                throw Error();
            }
        } catch {
            toast.error('Erro na alteração de quantidade do produto');
        }
    };
    return (
        <CartContext.Provider value={{ cart, addProduct, removeProduct, updateProductAmount }}>
            {children}
        </CartContext.Provider>
    )
};

export function useCart(): ICartContext {
    const context = useContext(CartContext);

    return context;
}
