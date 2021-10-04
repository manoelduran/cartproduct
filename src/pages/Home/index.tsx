import React, { useContext, useEffect } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { ProductsContext } from '../../context/ProductContext';
import { Container } from './styles';


export function Home() {
    const { products, fetchProducts } = useContext(ProductsContext);
    useEffect(() => {
        try {
            fetchProducts();
        } catch (error) {
            alert(error)
        }
    }, [])
    function handleAddProduct(id: number) {

    }
    return (
        < Container>
            {products.map(product => (
                <ProductCard key={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    score={product.score}
                    onClick={() => handleAddProduct(product.id)} />
            ))}
        </ Container>
    );
}