import React from 'react'
import Modal from 'react-modal'

function OrderModal(props) {
    const { order, clsoeModel, cartItems } = props;
    return (
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
                        <td>{cartItems.reduce((a, p) => {
                            return a + p.price
                        }, 0)}</td>
                    </tr>
                    <tr>
                        <td>
                            Selected Items
                        </td>
                    </tr>
                    <tr>
                        <td>{cartItems.map(p => {
                            <div className='cart-data'>
                                <p>Number of this product: {p.qty}</p>
                                <p>Title of this product: {p.title}</p>
                            </div>
                        })}</td>
                    </tr>
                </table>
            </div>
        </Modal>
    )
}

export default OrderModal;
