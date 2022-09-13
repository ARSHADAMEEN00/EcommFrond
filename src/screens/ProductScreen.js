import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating'
import products from '../products';

const ProductScreen = ({match}) => {
    const product = products.find(p => p._id === match.params.id);
  return (
    <div>
        <Link to='/' >Go Back</Link>
        <div style={{display: 'flex'}}>
            <div>
                <img  style={{ width: "400px", marginLeft: '50px' }}  src={product.image} alt="" />
            </div>

            <div>
                    <h2>{product.name}</h2> 
                    <Rating val={product.rating} text={`${product.numReviews} reviews`} />
                    <h2>{product.price}</h2>
                    <p>{product.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductScreen