import React from 'react'
import Modal from "react-modal"

function ProductModel(props) {
    const { product, closeModel } = props

    return (
        <Modal isOpen={product} onRequestClose={closeModel}>
            <span onClick={closeModel} className="close-icone">&times;</span>
            <div className='product-info'>
                <img src={product.imageUrl} alt={product.title} />
                <p>{product.title}</p>
                <p>{product.desc}</p>
                <p>{product.price}$</p>
            </div>

        </Modal>
    )
}

export default ProductModel;
