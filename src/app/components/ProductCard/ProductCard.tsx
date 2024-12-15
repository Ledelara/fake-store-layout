import './ProductCard.css';
import { Product } from "../../interface/interface";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="card">
            <img src={product.image} alt={product.title} />
            <div className="card-body">
                <h3 className='card-title'>{product.title}</h3>
                <p className='card-price'>R$ {product.price.toFixed(2)}</p>
            </div>
        </div>
    );
}