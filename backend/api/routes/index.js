var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController');
  usersProductsCtrl = require('../controllers/usersProductsController');

//-------------------------------usersProducts Routes-----------------------------------
router.get('/usersProducts/getProducts', usersProductsCtrl.getProducts);
router.get('/usersProducts/getProduct/:usersProductsId', usersProductsCtrl.getProduct);

router.get(
  '/usersProducts/getProductsByUsername/:username',
  usersProductsCtrl.getProductsByUsername
);
router.get(
  '/usersProducts/getProductsByComponent/:componentNo',
  usersProductsCtrl.getProductsByComponent
);


router.post('/usersProducts/createProduct', usersProductsCtrl.createProduct);
router.patch('/usersProducts/updateProduct/:usersProductsId', usersProductsCtrl.updateProduct);
router.delete('/usersProducts/deleteProduct/:usersProductsId', usersProductsCtrl.deleteProduct);

//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', productCtrl.getProducts);

router.get('/product/getProduct/:productId', productCtrl.getProduct);


router.get(
  '/product/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);


router.post('/product/createProduct', productCtrl.createProduct);

router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);

module.exports = router;
