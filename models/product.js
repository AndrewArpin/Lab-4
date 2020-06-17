const mongoose = require('mongoose');

// You need to create a new schema and assign it the following
// constant
const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    Description:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('Product', ProductSchema);