'use client'

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services/api";
import { Product } from "../../interface/interface";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Home() {
    const { data, isLoading, isError } = useQuery({ 
        queryKey: ['products'], 
        queryFn: getProducts,
    });

    return (
        <div className="Home">
            <h1>Produtos</h1>
            <ul>
                {isLoading && <p>Carregando...</p>}
                {isError && <p>Ocorreu um erro</p>}
                {data?.map((product: Product) => (
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
