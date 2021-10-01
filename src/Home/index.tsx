import React, { useContext, useEffect } from 'react';

import { ProductCard } from '../components/ProductCard';
import { ProductsContext } from '../context/ProductContext';

export function Home() {
    const { products, fetchProducts } = useContext(ProductsContext);
    useEffect(() => {
        try {
            fetchProducts();
        } catch (error) {
            alert(error)
        }
    }, [])
    return (
        <>
        <h1>Ola</h1>
            {products.map(product => (
                <ProductCard key={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    score={product.score} />
            ))}
        </>
    );
}