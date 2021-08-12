import React from 'react'
import ProductPrice from 'core/components/ProductPrice'
import { Product } from 'core/types/Product'

import './styles.scss'
import { Link } from 'react-router-dom'

type Props = {
    product: Product;
}

const Card = ( {product}: Props) => {
    return(
        <div className="card-base product-card-admin border-radius-10">
            <div className="row">
                <div className="col-2 text-center border-right py-3"> 
                    <img 
                        src={product.imgUrl} 
                        alt={product.name}
                        className="product-card-image-admin"
                    />
                </div>
                <div className="col-7 py-3"> 
                    <h3 className="product-card-name-admin">
                        {product.name}
                    </h3>
                    <ProductPrice price={product.price}/>
                    <div>
                        {product.categories.map(category => (
                            <span className="badge bg-pill bg-secondary me-2">
                                {category.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="col-3 pt-3">
                    <Link to={`/admin/products/${product.id}`}
                        type="button" 
                        className="btn btn-outline-secondary btn-block col-10 border-radius-10 mb-3 btn-edit"
                    >
                        EDITAR
                    </Link >
                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-block col-10 border-radius-10 button"
                    >
                        EXCLUIR
                    </button >
                </div>
            </div>
        </div>
    )
}

export default Card