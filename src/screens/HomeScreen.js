import React from 'react'
import products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <div style={{margin: '20px'}} className='flex-r'>
        {products.map(product => {
            return <div>
                <Product product={product} />
            </div>
        })}
    </div>
  )
}

export default HomeScreen