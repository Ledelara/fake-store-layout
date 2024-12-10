import { Product } from "../../interface/interface";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="card">
            <img src={product.image} alt={product.title} />
            <div className="card-body">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
            </div>
        </div>
    );

}