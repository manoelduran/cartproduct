import { Container, IconDiv } from './styles';
import { AiFillStar } from "react-icons/ai";

interface ProductCardProps {
    name: string;
    price: number;
    score: number;
    image: string;
    onClick: () => void;
}
export function ProductCard({ image, name, price, score, onClick }: ProductCardProps) {

    return (
        <Container>
            <IconDiv>
                <AiFillStar size={20} color="#FFD700" />
                <span>  {score}</span>
            </IconDiv>
            <img src={image} alt={name} />
            <strong>{name}</strong>
            <span> R$ {price}</span>
            <button type="button" onClick={onClick}>Adicionar ao carrinho</button>
        </Container>
    );
}