'use strict';
const Twitter = require('../models/twitter.model');

exports.findAll = function(req, res) {
Twitter.findAll(function(err, twitter) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', twitter);
  res.send(twitter);
});
};

exports.create = function(req, res) {
const new_twitter = new Twitter(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Twitter.create(new_twitter, function(err, twitter) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Twitter added successfully!",data:twitter});
});
}
};

exports.findById = function(req, res) {
Twitter.findById(req.params.id, function(err, twitter) {
  if (err)
  res.send(err);
  res.json(twitter);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Twitter.update(req.params.id, new Twitter(req.body), function(err, twitter) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Twitter successfully updated' });
});
}
};

exports.delete = function(req, res) {
Twitter.delete( req.params.id, function(err, twitter) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Twitter successfully deleted' });
});
};