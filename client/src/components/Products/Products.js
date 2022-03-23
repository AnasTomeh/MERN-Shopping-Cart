import React, { useState } from 'react'
import "../../css/Products/Products.css"
import ProductModel from './productModel'

//import Modal from "react-modal"
function Products(props) {
  const [product, setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product)
  }
  const closeModel = () => {
    setProduct(false)
  }


  return (
    <div className="product-wrapper">{props.products.map(product => (
      <div className='product-item' key={product.id}>

        <a href='#' onClick={() => openModal(product)}>
          <img src={product.imageUrl} alt={product.title} />
        </a>
        <div className='product-desc'>
          <p>{product.title}</p>
          <span>{product.price}</span>
        </div>
        <button onClick={() => props.addToCart(product)}>Add to Cart</button>

      </div>

    ))}
      <ProductModel product={product} closeModel={closeModel} />

    </div>
  )
}

export default Products;
