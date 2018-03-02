var mongoose = require('mongoose');

var usersProductsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,

  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  componentNo: {
    type: Number,
    required: true,
    min: 0
  }
}
);

mongoose.model('usersProducts', usersProductsSchema);
