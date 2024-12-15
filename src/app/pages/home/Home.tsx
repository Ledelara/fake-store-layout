'use client'

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/api";
import { Product } from "../../interface/interface";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loading from "../../components/Status/Loading/Loading";
import Error from "../../components/Status/Error/Error";

export default function Home() {
    const { data, isLoading, isError } = useQuery({ 
        queryKey: ['products'], 
        queryFn: getProducts,
    });

    return (
        <div className="Home">
            <h1>Produtos</h1>
            <ul>
                {isLoading && (
                    <Loading 
                        message="Carregando..." 
                        isLoading={isLoading} 
                    />
                )}
                {isError && (
                    <Error 
                        message="Erro ao carregar produtos" 
                        isError={isError} 
                    />
                )}
                {data?.map((product: Product) => (
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
