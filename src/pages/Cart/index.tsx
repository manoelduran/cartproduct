import {
    MdDelete,
    MdAddCircleOutline,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/format';
import { Container, ProductTable, Total } from './styles';
export function Cart(): JSX.Element {
    let frete = 10
    const { cart, removeProduct, updateProductAmount } = useCart();
    const cartFormatted = cart.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        frete: formatPrice(10 * product.amount),
        subTotal: formatPrice((product.price * product.amount) + (frete * product.amount))
    }))
    const total = formatPrice(cart.reduce((sumTotal, product) => {

        return sumTotal + (product.price * product.amount) + (frete * product.amount);
    }, 0)
    )

    function handleProductIncrement(product: Product) {
        updateProductAmount({ productId: product.id, amount: product.amount + 1 });
    }

    function handleProductDecrement(product: Product) {
        updateProductAmount({ productId: product.id, amount: product.amount - 1 });
    }

    function handleRemoveProduct(productId: number) {
        removeProduct(productId);
    }

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>FRETE</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cartFormatted.map(product => (
                        <tr key={product.id}>
                            <td>
                                <img src={product.image} alt={product.name} />
                            </td>
                            <td>
                                <strong>{product.name}</strong>
                                <span>R$ {product.price}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        disabled={product.amount <= 1}
                                        onClick={() => handleProductDecrement(product)}
                                    >
                                        <MdRemoveCircleOutline size={20} />
                                    </button>
                                    <input
                                        type="text"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleProductIncrement(product)}
                                    >
                                        <MdAddCircleOutline size={20} />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.frete}</strong>
                            </td>
                            <td>
                                <strong>{product.subTotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveProduct(product.id)}
                                >
                                    <MdDelete size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">Finalizar pedido</button>
                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}