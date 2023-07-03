import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
    products: {
        type: [{
            _id: false,
            product: mongoose.isObject,
            quantity: number
        }],
        default: []
    }
})

mongoose.set('strictQuery', false)
const cartModel = mongoose.model('carts', cartSchema)

export default cartModel