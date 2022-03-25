import React from 'react'
import "../../css/CheckoutForm/Checkout.css"
import Input from "../Input/input"

function Checkout(props) {
    return (
        <div> {props.showForm && <div className='checkout-form'>
            <span className='close-icon' onClick={() => props.setShowForm(false)}> &times; </span>
            <form onSubmit={props.submitOreder}>
                <Input
                    label="Name"
                    type="text"
                    onChange={props.handleChange}
                    name="name"
                />
                <Input
                    label="Email"
                    type="email"
                    onChange={props.handleChange}
                    name="email"
                />

                <div>
                    <button type='submit'>Checkout</button>
                </div>
            </form>
        </div>}
        </div>
    )
}
export default Checkout;
