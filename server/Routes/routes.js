const express = require('express')
const Product = require('../models/productModel')
const router = express.Router()

router.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.send(products)
})

router.post('/api/products', async (req, res) => {
    const newProduct = new Product(req.body);
    const saveP = await newProduct.save();
    res.send(saveP)
})

router.delete('/api/product/:id', async (req, res) => {
    const deletProduct = await Product.findByIdAndDelete(req.params.id)
    res.send(deletProduct)
})



module.exports = router