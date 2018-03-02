var mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  usersProducts = mongoose.model('usersProducts');

module.exports.getProduct = function(req, res, next) {
  if (!Validations.isObjectId(req.params.usersProductsId)) {
    return res.status(422).json({
      err: null,
      msg: 'productId parameter must be a valid ObjectId.',
      data: null
    });
  }
  usersProducts.findById(req.params.usersProductsId).exec(function(err, product) {
    if (err) {
      return next(err);
    }
    if (!product) {
      return res
        .status(404)
        .json({ err: null, msg: 'Product not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Product retrieved successfully.',
      data: product
    });
  });
};

module.exports.getProducts = function(req, res, next) {
  usersProducts.find({}).exec(function(err, products) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg: 'Products retrieved successfully.',
      data: products
    });
  });
};

module.exports.getProductsBelowPrice = function(req, res, next) {
  if (!Validations.isNumber(req.params.price)) {
    return res.status(422).json({
      err: null,
      msg: 'price parameter must be a valid number.',
      data: null
    });
  }
  usersProducts.find({
    price: {
      $lt: req.params.price
    }
  }).exec(function(err, products) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      err: null,
      msg:
        'Products priced below ' +
        req.params.price +
        ' retrieved successfully.',
      data: products
    });
  });
};
module.exports.getProductsByUsername = function(req, res, next) {
    if (!Validations.isString(req.params.username)) {
      return res.status(422).json({
        err: null,
        msg: 'username parameter must be a valid string.',
        data: null
      });
    }
    usersProducts.find({
      username:  req.params.username
      
    }).exec(function(err, products) {
      if (err) {
        return next(err);
      }
      res.status(200).json({
        err: null,
        msg:
          'Products with name ' +
          req.params.username +
          ' retrieved successfully.',
        data: products
      });
    });
  };
  module.exports.getProductsByComponent = function(req, res, next) {
    if (!Validations.isNumber(req.params.componentNo)) {
      return res.status(422).json({
        err: null,
        msg: 'username parameter must be a valid Number.',
        data: null
      });
    }
    usersProducts.find({
        componentNo:  req.params.componentNo
      
    }).exec(function(err, products) {
      if (err) {
        return next(err);
      }
      res.status(200).json({
        err: null,
        msg:
          'Products with componentNo ' +
          req.params.componentNo +
          ' retrieved successfully.',
        data: products
      });
    });
  };

module.exports.createProduct = function(req, res, next) {
  var valid =
    req.body.name &&
    Validations.isString(req.body.name) &&
    req.body.price &&
    Validations.isNumber(req.body.price)&&
    req.body.username &&
    Validations.isString(req.body.username) &&
    req.body.componentNo &&
    Validations.isNumber(req.body.componentNo) ;
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: ' name(String) and price(Number) and username(String) and componentNo(Numbers) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  delete req.body.updatedAt;

  usersProducts.create(req.body, function(err, product) {
    if (err) {
      return next(err);
    }
    res.status(201).json({
      err: null,
      msg: 'Product was created successfully.',
      data: product
    });
  });
};

module.exports.updateProduct = function(req, res, next) {
  if (!Validations.isObjectId(req.params.productId)) {
    return res.status(422).json({
      err: null,
      msg: 'productId parameter must be a valid ObjectId.',
      data: null
    });
  }
  var valid =
    req.body.name &&
    Validations.isString(req.body.name) &&
    req.body.price &&
    Validations.isNumber(req.body.price);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'name(String) and price(Number) are required fields.',
      data: null
    });
  }
  // Security Check
  delete req.body.createdAt;
  req.body.updatedAt = moment().toDate();

  usersProducts.findByIdAndUpdate(
    req.params.productId,
    {
      $set: req.body
    },
    { new: true }
  ).exec(function(err, updatedProduct) {
    if (err) {
      return next(err);
    }
    if (!updatedProduct) {
      return res
        .status(404)
        .json({ err: null, msg: 'Product not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Product was updated successfully.',
      data: updatedProduct
    });
  });
};

module.exports.deleteProduct = function(req, res, next) {
  if (!Validations.isObjectId(req.params.productId)) {
    return res.status(422).json({
      err: null,
      msg: 'productId parameter must be a valid ObjectId.',
      data: null
    });
  }
  usersProducts.findByIdAndRemove(req.params.productId).exec(function(
    err,
    deletedProduct
  ) {
    if (err) {
      return next(err);
    }
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ err: null, msg: 'Product not found.', data: null });
    }
    res.status(200).json({
      err: null,
      msg: 'Product was deleted successfully.',
      data: deletedProduct
    });
  });
};
