const mongoose = require('mongoose'),
  moment = require('moment'),
  Validations = require('../utils/Validations'),
  User = mongoose.model('User');

module.exports.getUser = async (req, res) => {
  if (!Validations.isObjectId(req.params.userId)) {
    return res.status(422).json({
      err: null,
      msg: 'userId parameter must be a valid ObjectId.',
      data: null
    });
  }
  const user = await User.findById(req.params.userId).exec();
  if (!user) {
    return res
      .status(404)
      .json({ err: null, msg: 'User not found.', data: null });
  }
  res.status(200).json({
    err: null,
    msg: 'User retrieved successfully.',
    data: user
  });
};

module.exports.getUsers = async (req, res) => {
  const users = await User.find({}).exec();
  res.status(200).json({
    err: null,
    msg: 'Users retrieved successfully.',
    data: users
  });
};

module.exports.createUser = async (req, res) => {
  const valid =
    req.body.username &&
    Validations.isString(req.body.username) &&
    req.body.password &&
    Validations.isString(req.body.password) &&
    req.body.email &&
    Validations.isString(req.body.email);
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg: 'username(String) and password(String) and email(String) are required fields.',
      data: null
    });
  }


  const user = await User.create(req.body);
  res.status(201).json({
    err: null,
    msg: 'User was created successfully.',
    data: user
  });
};

module.exports.authenticate = async (req, res) =>{
   User.findOne({ "username": req.body.username })
    .exec(function (err, user) {
      if (err) {
        return (err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return (err);
      }
      else if (user.password == req.body.password ) {
        return res.status(200).json({
      err: null,
      msg: 'true',
      data: null
    });
      } else {
        return res.status(200).json({
      err: null,
      msg: 'false',
      data: null
    });
      }
    });
}