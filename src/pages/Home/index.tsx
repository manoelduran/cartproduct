import React, { useContext, useEffect, useState } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { useCart } from '../../context/CartContext';
import { ProductsContext } from '../../context/ProductContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/format';
import { Container } from './styles';


export function Home() {
    const { products, fetchProducts, orderBy } = useContext(ProductsContext);
    const [sortedBy, setSortedBy] = useState('')
    const [isAsc, setIsAsc] = useState(false)
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
            <button onClick={() => orderBy('score', !isAsc)}>
                Score {sortedBy === 'score' }
            </button>
            <button onClick={() => orderBy('name', !isAsc)}>
                Name {sortedBy === 'name' }
            </button>
            <button onClick={() => orderBy('price', !isAsc)}>
                Price
            </button>
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