
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
export function Header(): JSX.Element {

    return (
        <Container>
            <Link to="/">
                <img src="venom.png"  width="150px" height="150px" alt="Rocketshoes" />
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>
                        Meu Carrinho
                    </strong>
                    <span>a</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>

    );
}