const mongoose = require('mongoose')

const orderSchema = require('../Schema/orderSchema')


const Order = mongoose.model("order", orderSchema)

module.exports = Order