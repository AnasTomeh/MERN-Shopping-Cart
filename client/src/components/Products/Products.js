import React from 'react'
import "../../css/Products/Products.css"
function Products(props) {
  return (
    <div className="product-wrapper">{props.products.map(ele => (
      <div className='product-item' key={ele.id}>
        <div >
          <img src={ele.imageUrl} alt={ele.title} />
          <div className='product-desc'>
            <p>{ele.title}</p>
            <span>{ele.price}</span>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>

    ))}</div>
  )
}

export default Products;
