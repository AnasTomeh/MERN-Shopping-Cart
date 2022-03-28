import React, { useState, useEffect } from 'react'
import "../../css/Products/Products.css"
import ProductModel from './productModel'
import Bounce from 'react-reveal/Bounce'
import {connect} from 'react-redux'
import { fetchProducts } from '../../store/actions/products'

//import Modal from "react-modal"
function Products(props) {
  const [product, setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product)
  }
  const closeModel = () => {
    setProduct(false)
  }

useEffect(()=>{
  props.fetchProducts()
}, [])

  return (
    <Bounce left cascade>
      <div className="product-wrapper">
      
      {props.products && props.product.lenght? props.products.map(product => (
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

      )):"Loading"}
        <ProductModel product={product} closeModel={closeModel} />

      </div>
    </Bounce>
  )
}

export default connect((state)=>{
  return {
    products: state.products.products
  }
}, {fetchProducts})(Products);
