import {
    MdDelete,
    MdAddCircleOutline,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/format';
import { Container, ProductTable, Total } from './styles';
export function Cart(): JSX.Element {
    const { cart, removeProduct, updateProductAmount } = useCart();
    const cartFormatted = cart.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        subTotal: formatPrice(product.price * product.amount),
    }))
    const total = formatPrice(cart.reduce((sumTotal, product) => {
        return sumTotal + (product.price * product.amount);
    }, 0)
    )
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
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
                                <span>{product.price}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        disabled={product.amount <= 1}
                                        onClick={() => { }}
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
                                        onClick={() => { }}
                                    >
                                        <MdAddCircleOutline size={20} />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subTotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => { }}
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