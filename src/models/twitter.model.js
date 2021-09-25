'use strict';

var dbConn = require('./../../config/db.config');

//Twitter object create
var Twitter = function(twitter){
  this.name       = twitter.name;
  this.username   = twitter.username;
  this.text       = twitter.text;
  this.date       = twitter.date;
  this.image      = twitter.image;
  this.profile_image = twitter.profile_image;
  this.location = twitter.location;
};

Twitter.create = function (data, result) {
dbConn.query("INSERT INTO tabel_twitter set ?", data, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};

Twitter.findById = function (id, result) {
dbConn.query("Select * from tabel_twitter where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

Twitter.findAll = function (result) {
dbConn.query("Select * from tabel_twitter", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('twitter : ', res);
  result(null, res);
}
});
};

Twitter.update = function(id, twitter, result){
dbConn.query("UPDATE tabel_twitter SET name=?,username=?,text=?,date=?,image=?,profile_image=?,location=? WHERE id = ?", [twitter.name,twitter.username,twitter.text,twitter.date,twitter.image,twitter.profile_image,twitter.location,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Twitter.delete = function(id, result){
dbConn.query("DELETE FROM tabel_twitter WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

module.exports= Twitter;