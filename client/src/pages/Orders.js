import React, { useEffect } from 'react'
import { fetchOrders } from '../store/actions/order'
import { connect } from "react-redux"

function Orders(props) {

  useEffect(() => {
    props.fetchOrders()
  }, [])

  const { orders } = props
  return (
    <div className='orders'>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default connect((state) => {
  return {
    orders: state.order.orders
  }
}, { fetchOrders })(Orders);
