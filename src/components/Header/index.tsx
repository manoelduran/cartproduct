
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import { useCart } from '../../context/CartContext';
export function Header(): JSX.Element {
    const { cart } = useCart();
    const cartSize = cart.length
    return (
        <Container>
            <Link to="/">
                <img src="venom.png" width="150px" height="150px" alt="Rocketshoes" />
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>
                        Meu Carrinho
                    </strong>
                    <span>
                        {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
                    </span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>

    );
}