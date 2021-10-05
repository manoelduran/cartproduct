import React, { useContext, useEffect } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { useCart } from '../../context/CartContext';
import { ProductsContext } from '../../context/ProductContext';
import { Container } from './styles';


export function Home() {
    const { products, fetchProducts } = useContext(ProductsContext);
    const { addProduct } = useCart();
    useEffect(() => {
        try {
            fetchProducts();
        } catch (error) {
            alert(error)
        }
    }, [])
    function handleAddProduct(id: number) {
        addProduct(id)
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