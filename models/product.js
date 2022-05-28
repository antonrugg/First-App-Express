const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'No description provided'
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['beverages', 'bread', 'canned goods', 'dairy', 'dry goods',
               'frozen foods', 'meat', 'produce', 'cleaners', 'paper goods',
               'personal care', 'other'
              ],
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    discount: {
        type: Boolean,
        default: false
    }

  
});
//defining schema for product

const Product = mongoose.model('Product', productSchema);
//creating model for product

module.exports = Product;
