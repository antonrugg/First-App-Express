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
        enum: ['old jewelry', 'vintage', 'clothes', 'porcelain', 'games',
               'vases', 'candies', 'clocks', 'plants', 'metal products',
               'sculptures', 'books', 'knives', 'bags', 'others'
              ],
        required: true,
        lowercase: true
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
