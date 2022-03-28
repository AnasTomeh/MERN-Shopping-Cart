import React from 'react'
import '../../css/Filtter/Filter.css'
import Filp from "react-reveal/Flip"
import { connect } from "react-redux"
import { filteredSize, filteredSort } from "../../store/actions/products"

function Filter(props) {
  return (
    <Filp left>
      {props.filterProducts && <div className="Filter-wrapper">
      <h2 className="Filter-title">Filter</h2>
      <div className='num-of-products'>Number of Products {props.filterProducts.length}</div>
      <div className='filter-by-size'>
        <span>Filter</span>
        <select className='filter-select' onChange={(e) => props.filteredSize(props.filterProducts, e.target.value)} value={props.size}>
          <option value="ALL">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className='filter-by-size'>
        <span>Order</span>
        <select className='filter-select' value={props.sort} onChange={(e) => props.filteredSort(props.products, e.target.value)}>
          <option value="Latest">Latest</option>
          <option value="Lowest">Lower</option>
          <option value="Highest">Highest</option>

        </select>
      </div>
    </div>}
    </Filp>
  )
}

export default connect((state) => {
  return {
    sort: state.products.sort,
    size: state.products.size,
    products: state.products.products,
    filterProducts: state.products.filterProducts,
  }
}, {
  filteredSize, filteredSort
})(Filter);
