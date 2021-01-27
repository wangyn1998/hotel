var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig=require('../config/dbconfig.json');
var con = mysql.createConnection(dbconfig);
con.connect();
var login = false;
var manager;
// var editroom = '';

// 登录
router.get('/', function(req, res, next) {
  manager = '';
  login = false;
  console.log(manager,login);
  res.render('login', { title: 'login' });
});
//身份验证
router.post('/login', function(req, res, next) {
  var adminName = req.body.adminName;
  var adminPwd = req.body.adminPwd;
  manager = adminName;
  console.log(adminName,adminPwd,manager);
  con.query("select * from alist",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result[0].adminName);
      for(var i=0;i<result.length;i++){
        if(adminName == result[i].adminName && adminPwd == result[i].adminPwd){
          login = true;
        }else{
          continue;
        }
      }
      console.log(login);
      if(login == true){
        res.end('success');
      }else{
        res.end('error');
      }
    }
  })
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'home' });
});

// 用户管理
router.get('/user', function(req, res, next) {
  res.render('User/user', { title: 'user' });
});
//删除用户
router.post('/deluser', function(req, res, next) {
  var userName = req.body.userName;
  console.log(userName);
  res.end('success');
});
//搜索用户
router.post('/searchUser', function(req, res, next) {
  var userName = req.body.userName;
  console.log(userName);
  res.render('User/searchUser', { title: 'searchUser' });
});

// 客房管理
router.get('/room', function(req, res, next) {
  res.render('Room/room', { title: 'user' });
});
//添加客房
router.get('/addroom', function(req, res, next) {
  res.render('Room/addroom', { title: 'addroom' });
});
router.post('/addRoom', function(req, res, next) {
  console.log(req.body);
  res.end('success');
});
//删除客房
router.post('/delroom', function(req, res, next) {
  var roomType = req.body.roomType;
  console.log(roomType);
  res.end('success');
});
//编辑客房
router.get('/editroom', function(req, res, next) {
  var edit = req.query.edit;
  console.log(edit);
  res.render('Room/editroom', { title: 'editroom' });
});
router.post('/editRoom', function(req, res, next) {
  console.log(req.body);
  res.end('success');
});
//搜索客房
router.post('/searchRoom', function(req, res, next) {
  var roomType = req.body.roomType;
  console.log(roomType);
  res.render('Room/searchroom', { title: 'searchroom' });
});

// 预订管理
router.get('/reserve', function(req, res, next) {
  res.render('Reserve/reserve', { title: 'reserve' });
});
//搜索预订
router.post('/searchReserve', function(req, res, next) {
  var type = req.body.type;
  var date = req.body.date;
  console.log(type,date);
  res.render('Reserve/searchreserve', { title: 'searchreserve' });
});
//同意预定
router.post('/agreeReserve', function(req, res, next) {
  var agree = req.body.agree;
  console.log(agree);
  res.end('success'+'-xxx');
});
//拒绝预定
router.post('/refuseReserve', function(req, res, next) {
  var refuse = req.body.refuse;
  var reason = req.body.reason;
  console.log(refuse,reason);
  res.end('success');
});

// 订单管理
router.get('/order', function(req, res, next) {
  res.render('Order/order', { title: 'order' });
});
//删除订单
router.post('/delorder', function(req, res, next) {
  var userName = req.body.userName;
  console.log(userName)
  res.end('success');
});
//搜索订单
router.post('/searchOrder', function(req, res, next) {
  var order = req.body.order;
  console.log(order);
  res.render('Order/searchorder', { title: 'searchorder' });
});
//订单详情
router.get('/orderdetail', function(req, res, next) {
  var order = req.query.order;
  console.log(order);
  res.render('Order/orderdetail', { title: 'orderdetail' });
});

// 服务管理
router.get('/service', function(req, res, next) {
  res.render('Service/service', { title: 'service' });
});
//添加服务
router.get('/addservice', function(req, res, next) {
  res.render('Service/addservice', { title: 'addservice' });
});
router.post('/addService', function(req, res, next) {
  console.log(req.body);
  res.end('success');
});
//删除服务
router.post('/delservice', function(req, res, next) {
  var serviceName = req.body.serviceName;
  console.log(serviceName);
  res.end('success');
});
//编辑服务
router.get('/editservice', function(req, res, next) {
  var serviceName = req.query.serviceName;
  console.log(serviceName);
  res.render('Service/editservice', { title: 'editservice' });
});
router.post('/editService', function(req, res, next) {
  console.log(req.body);
  res.end('success');
});
//搜索服务
router.post('/searchService', function(req, res, next) {
  var serviceName = req.body.serviceName;
  console.log(serviceName);
  res.render('Service/searchservice', { title: 'searchservice' });
});

// 评论管理
router.get('/comment', function(req, res, next) {
  res.render('Comment/comment', { title: 'comment' });
});
//删除评论
router.post('/delcomment', function(req, res, next) {
  var comment = req.body.comment;
  console.log(comment);
  res.end('success');
});
//搜索评论
router.post('/searchComment', function(req, res, next) {
  var comment = req.body.comment;
  console.log(comment);
  res.render('Comment/searchcomment', { title: 'searchcomment' });
});
//回复评论
router.post('/replyComment', function(req, res, next) {
  console.log(req.body);
  res.end('success');
});
module.exports = router;
