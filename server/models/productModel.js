const mongoose = require('mongoose')

const productSchema = require('../Schema/productSchema')


const Product = mongoose.model("product", productSchema)

module.exports = Product