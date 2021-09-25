'use strict';
var dbConn = require('./../../config/db.config');
const Twitter = require('./twitter.model');
//Employee object create
var Employee = function(employee){
  this.first_name     = employee.first_name;
  this.last_name      = employee.last_name;
  this.email          = employee.email;
  this.phone          = employee.phone;
  this.organization   = employee.organization;
  this.designation    = employee.designation;
  this.salary         = employee.salary;
  this.logo           = employee.logo;
  // this.is_deleted     = employee.is_deleted;
  // this.status         = employee.status ? employee.status : 1;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};
Employee.create = function (newEmp, result) {
dbConn.query("INSERT INTO tabel_employee set ?", newEmp, function (err, res) {
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
Employee.findById = function (id, result) {
dbConn.query("Select * from tabel_employee where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Employee.findAll = function (result) {
dbConn.query("Select * from tabel_employee", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('employees : ', res);
  result(null, res);
}
});
};
Employee.update = function(id, employee, result){
dbConn.query("UPDATE tabel_employee SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=?,logo=? WHERE id = ?", [employee.first_name,employee.last_name,employee.email,employee.phone,employee.organization,employee.designation,employee.salary,employee.logo,id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Employee.delete = function(id, result){
dbConn.query("DELETE FROM tabel_employee WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Employee;