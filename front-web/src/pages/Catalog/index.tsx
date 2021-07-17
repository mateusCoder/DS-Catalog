import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import './styles.scss';
import { makeRequest } from 'core/utils/request';
import { ProductsReponse } from 'core/types/Product';
import { useState } from 'react';

const Catalog = () => {
    const [productsResponse, setProductsResponse] = useState<ProductsReponse>();

    console.log(productsResponse);

    useEffect(() => {
        const params = {
            page: 0,
            linesPerPage: 12
        }

        makeRequest({url: '/products', params})
            .then(response => setProductsResponse(response.data));
    }, []);

    return (
        <div className="catalog-container">
            <h1 className="catalog-title">
                Catálogo de produtos
            </h1>
            <div className="catalog-products">
                {productsResponse?.content.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <ProductCard product={product}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Catalog