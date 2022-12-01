import React from 'react'
;
import styles from './styles.module.css';
import productsData from '../data/product'
const Products = () => {
  return (
    <div className={styles.productsContainer}>
    {productsData.map((product , i)=>(
      <div key={i}>
        <img src={product.image} />
        <div>
          <br/>
          <p>{product.mainCategory}</p>
          <p>{product.name} - ${product.price}</p>
          <br/>
        </div>
        <button onClick={() => console.log(product)}>Add to Cart</button>
      </div>
    ))}
    </div>
  )
}

export default Products
