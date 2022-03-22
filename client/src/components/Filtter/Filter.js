import React from 'react'
import '../../css/Filtter/Filter.css'

function Filter(props) {
  return (
    <div className="Filter-wrapper">
      <h2 className="Filter-title">Filter</h2>
      <div className='num-of-products'>Number of Products 4</div>
      <div className='filter-by-size'>
        <span>Filter</span>
        <select className='filter-select' onChange={props.handelFilterBySize} value={props.size}>
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
        <select className='filter-select' value={props.sort} onChange={props.handelFilterByOrder}>
          <option value="Latest">Latest</option>
          <option value="Lowest">Lower</option>
          <option value="Highest">Highest</option>

        </select>
      </div>
    </div>
  )
}

export default Filter;
