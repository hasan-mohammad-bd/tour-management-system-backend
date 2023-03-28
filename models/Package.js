const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Please provide a name for this package'],
        trim: true, 
        unique: [true, 'Name must be unique'], 
        minLength: [3, 'Name must be at least 3 characters'],
        maxLength: [100, 'Name is too large, max length is 100 characters']
    },
    description: {
        type: String, 
        required: true
    },
    price: {
        type: Number, 
        required: true,
        min: [0, "Price can't be negative"]
    },
    categories: [
        {
            name: {
                type: String,
                required: true
            },
            _id: mongoose.Schema.Types.ObjectId
        }
    ],
    viewCount: { type: Number, default: 0 }
    

})

//model

const Package = mongoose.model('Package', packageSchema)

module.exports = Package