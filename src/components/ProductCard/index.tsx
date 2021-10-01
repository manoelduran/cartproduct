
interface ProductCardProps {
    name: string;
    price: number;
    score: number;
    image: string;
}
export function ProductCard({ image, name, price, score }: ProductCardProps) {
    return (
        <>
            <img src={image} alt={name} />
            <span>{price}</span>
            <span>{score}</span>
        </>
    );
}