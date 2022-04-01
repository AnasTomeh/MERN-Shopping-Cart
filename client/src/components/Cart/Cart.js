import React, { useState } from 'react'
import "../../css/Cart/Cart.css"
import Checkout from '../CheckoutForm/Checkout'
import Bounce from 'react-reveal/Bounce'
import { connect } from "react-redux"
import { removeCart } from '../../store/actions/cart'
import Modal from 'react-modal'
import OrderModal from './OrderModal'
import {createOrder, clearOrder} from '../../store/actions/order'

function Cart(props) {
    const [showForm, setShowForm] = useState(false)
    const [order, setOrder] = useState(false)
    const [value, setValue] = useState("")


    const submitOreder = (e) => {
        e.preventDefault();
        const order = {
            name: value.name,
            email: value.email
        }
        props.createOrder(order);
    }
    const clsoeModel = () => {
        props.clearOrder()
        setShowForm(false)
    }

    const handleChange = (e) => {
        console.log(e.target.name)
        setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    return (

        <div className='cart-warpper'>
            <div className='cart-title'>{props.cartItems.length === 0 ? "Cart Empty" :
                <p>There is {props.cartItems.length} in Cart
                </p>}</div>

            <OrderModal cartItems={props.cartItems} order={props.order} clsoeModel={clsoeModel} />
            <Bounce bottom cascade>
                <div className='cart-items'>
                    {props.cartItems.map(item => (
                        <div className='cart-item' key={item.id}>
                            <img src={item.imageUrl} alt="" />
                            <div className='cart-info'>
                                <div>
                                    <p>{item.title}</p>
                                    <p>{item.qty}</p>
                                    <p>${item.price}</p>
                                </div>
                                <button onClick={() => props.removeCart(item)}>
                                    Remove
                                </button>

                            </div>

                        </div>
                    ))
                    }
                </div>
            </Bounce>
            {props.cartItems.length !== 0 && <div className='cart-footer'>
                <div className='total'>Total:{props.cartItems.reduce((acc, p) => {
                    return acc + p.price
                }, 0)}$ </div>
                <button onClick={() => { setShowForm(true) }}>select products</button>
            </div>}
            {/*Checkout Form */}
            <Checkout showForm={showForm}
                submitOreder={submitOreder}
                setShowForm={setShowForm}
                handleChange={handleChange} />
        </div>


    )
}

export default connect((state) => {
    return {
        order: state.order.order,
        cartItems: state.cart.cartItems
    }
}, { removeCart, createOrder, clearOrder })(Cart);
