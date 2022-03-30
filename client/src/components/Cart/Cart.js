import React, { useState } from 'react'
import "../../css/Cart/Cart.css"
import Checkout from '../CheckoutForm/Checkout'
import Bounce from 'react-reveal/Bounce'
import { connect } from "react-redux"
import { removeCart } from '../../store/actions/cart'
import Modal from 'react-modal'

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
        setOrder(order);
    }
    const clsoeModel = () => {
setOrder(false)
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
            {/*Modal */}
            <Modal isOpen={order} onRequestClose={clsoeModel}>
                <div className='order-info'>
                <span className='close-icone' onClick={clsoeModel}>&times;</span>
                    <p className='alert-sucsses'>order done</p>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>{order.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{order.email}</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>{props.cartItems.reduce((a, p) => {
                                return a + p.price
                            }, 0)}</td>
                        </tr>
                        <tr>
                            <td>
                                Selected Items
                            </td>
                        </tr>
                        <tr>
                            <td>{props.cartItems.map(p => {
                                <div className='cart-data'>
                                    <p>Number of this product: {p.qty}</p>
                                    <p>Title of this product: {p.title}</p>
                                </div>
                            })}</td>
                        </tr>
                    </table>
                </div>
            </Modal>

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
        cartItems: state.cart.cartItems
    }
}, { removeCart })(Cart);
