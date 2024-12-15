'use client'
import './BestSellers.css';
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services/api";
import Loading from "../../Status/Loading/Loading";
import Error from "../../Status/Error/Error";
import { Product } from "../../../interface/interface";
import ProductCard from "../../ProductCard/ProductCard";

export default function BestSellers () {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
    });

    return (
        <div className="BestSellers">
            <h1 className="BestSellers__title">Mais Vendidos</h1>
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
            <ul className='BestSellers__list'>
                {data?.map((product: Product) => (
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

