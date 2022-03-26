import React, { useState } from 'react'
import "../../css/Cart/Cart.css"
import Checkout from '../CheckoutForm/Checkout'
import Bounce from 'react-reveal/Bounce'
function Cart(props) {
    const [showForm, setShowForm] = useState(false)
    const [value, setValue] = useState("")

    const submitOreder = (e) => {
        e.preventDefault();
        const order = {
            name: value.name,
            email: value.email
        }
        console.log(order);
    }

    const handleChange = (e) => {
        console.log(e.target.name)
        setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    return (
        <Bounce>
            <div className='cart-warpper'>
                <div className='cart-title'>{props.cartItems.length === 0 ? "Cart Empty" :
                    <p>There is {props.cartItems.length} in Cart
                    </p>}</div>
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
                                <button onClick={() => props.removeFromCart(item)}>
                                    Remove
                                </button>

                            </div>

                        </div>
                    ))
                    }
                </div>
                {props.cartItems.length !== 0 && <div className='cart-footer'>
                    <div className='total'>Total:{props.cartItems.reduce((acc, p) => {
                        return acc + p.price
                    }, 0)}$ </div>
                    <button onClick={() => { setShowForm(true) }}>select products</button>
                </div>}
                {/*Checkout Form */}
                <Checkout showForm={showForm} submitOreder={submitOreder} setShowForm={setShowForm} handleChange={handleChange} />
            </div>
        </Bounce>

    )
}

export default Cart;
