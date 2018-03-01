const express = require('express'),
  router = express.Router(),
  asyncMiddleware = require('express-async-handler'),
  productCtrl = require('../controllers/ProductController');
  userCtrl = require('../controllers/UserController');

//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', asyncMiddleware(productCtrl.getProducts));
router.get('/product/getProduct/:productId', asyncMiddleware(productCtrl.getProduct));
router.get(
  '/product/getProductsBelowPrice/:price',
  asyncMiddleware(productCtrl.getProductsBelowPrice)
);
router.post('/product/createProduct', asyncMiddleware(productCtrl.createProduct));
router.patch('/product/updateProduct/:productId', asyncMiddleware(productCtrl.updateProduct));
router.delete('/product/deleteProduct/:productId', asyncMiddleware(productCtrl.deleteProduct));

module.exports = router;

//-------------------------------User Routes-----------------------------------
router.get('/user/getUsers', asyncMiddleware(userCtrl.getUsers));
router.get('/user/getUser/:userId', asyncMiddleware(userCtrl.getUser));
router.post('/user/createUser', asyncMiddleware(userCtrl.createUser));
router.post('/user/authenticate', asyncMiddleware(userCtrl.authenticate));