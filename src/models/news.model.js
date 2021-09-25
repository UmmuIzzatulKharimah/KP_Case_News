'use strict';

var dbConn = require('./../../config/db.config');

//News object create
var News = function(news){
  this.title_news      = news.title_news;
  this.media_name      = news.media_name;
  this.date            = news.date;
  this.content_text    = news.content_text;
  this.link_image      = news.link_image;
  this.category        = news.category;
  this.description       = news.description;
  this.create_date     = new Date();
  this.update_date     = new Date();;
};

News.create = function (data, result) {
dbConn.query("INSERT INTO tabel_news set ?", data, function (err, res) {
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

News.findById = function (id, result) {
dbConn.query("Select * from tabel_news where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

News.findAll = function (result) {
dbConn.query("Select * from tabel_news", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('news : ', res);
  result(null, res);
}
});
};

News.update = function(id, news, result){
dbConn.query("UPDATE tabel_news SET title_news=?,media_name=?,date=?,category=?,description=?,content_text=?,link_image=? WHERE id = ?", [news.title_news,news.media_name,news.date,news.category,news.description,news.content_text,news.link_image, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

News.delete = function(id, result){
dbConn.query("DELETE FROM tabel_news WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

module.exports= News;