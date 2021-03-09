var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('../config/dbconfig.json');
var con = mysql.createConnection(dbconfig);
con.connect();
var manager,editroom,editservice,commentId;

// 时间截取
function conver(s) {
  return s < 10 ? '0' + s : s;
}
function gettime(time){
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  time = year+'-'+conver(month)+'-'+conver(date);
  return time;
}
function gettime2(time){
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  time = year+'-'+conver(month)+'-'+conver(date)+' '+conver(hour)+':'+conver(minute)+':'+conver(second);
  return time;
}
// -----------登录------------
router.get('/', function(req, res, next) {
  manager = '';
  console.log(manager);
  res.render('login', { title: 'login' });
});
//身份验证
router.post('/login', function(req, res, next) {
  var adminName = req.body.adminName;
  var adminPwd = req.body.adminPwd;
  manager = './images/'+ adminName +'.jpg';
  console.log(adminName,adminPwd,manager);
  con.query("select * from alist where adminName=? and adminPwd=?",[adminName,adminPwd],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
      if(result == false){
        res.end('error');
      }else{
        res.end('success');
      }
    }
  })
});
//首页
router.get('/home', function(req, res, next) {
  var number1 = 0;
  var now = new Date();
  now = gettime(now);
  console.log(now);
  con.query("select * from user;select * from orders;",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      for(var i=0;i<result[0].length;i++){
        if(gettime(result[0][i].userDay) == now){
          number1++;
        }
      }
      res.render('home', { 
        manager: manager,
        number1: number1,
        number2:result[0].length,
        number3: result[1].length 
      });
    }
  })
});

// -----------用户管理------------
router.get('/user', function(req, res, next) {
  con.query("select * from user order by userId",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      for(var i=0;i<result.length;i++){
        result[i].userDay = gettime(result[i].userDay);
      }
      res.render('User/user', { manager: manager,data: result });
    }
  }) 
});
//删除用户
router.post('/deluser', function(req, res, next) {
  var userId = req.body.userId;
  console.log(userId);
  con.query("delete from user where userId=?",[userId],function(err,result){
    if(err){
      console.log(err);
      res.end('error');
    }
    else{
      res.end('success');
    }
  }) 
});
//搜索用户
router.post('/searchUser', function(req, res, next) {
  var userName = req.body.userName;
  console.log(userName);
  con.query("select * from user where userName=?",[userName],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      for(var i=0;i<result.length;i++){
        result[i].userDay = gettime(result[i].userDay);
      }
      res.render('User/searchUser', { manager: manager,data: result });
    }
  }) 
});

// -----------客房管理------------
router.get('/room', function(req, res, next) {
  con.query("select * from room order by roomId",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Room/room', { manager: manager,data: result });
    }
  }) 
});
//添加客房
router.get('/addroom', function(req, res, next) {
  res.render('Room/addroom', { manager: manager, });
});
router.post('/addRoom', function(req, res, next) {
  console.log(req.body);
  var type = req.body.roomType;
  var num = req.body.roomNum;
  var price= req.body.roomPrice;
  var inf= req.body.roomInf;
  con.query("insert into room(roomType,roomNumber,roomPrice,roomInf) values(?,?,?,?) ",[type,num,price,inf],function(err,result){
    if(err){
      console.log(err);
      res.end('error');
    }
    else{
      res.end('success');
    }
  }) 
});
//删除客房
router.post('/delroom', function(req, res, next) {
  var roomId = req.body.roomId;
  console.log(roomId);
  con.query("delete from room where roomId=?",[roomId],function(err,result){
    if(err){
      console.log(err);
      res.end('error');
    }
    else{
      res.end('success');
    }
  }) 
});
//编辑客房
router.get('/editroom', function(req, res, next) {
  editroom = req.query.roomId;
  console.log(editroom);
  con.query("select * from room where roomId=?",[editroom],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Room/editroom', { manager: manager,data: result[0] });
    }
  }) 
});
router.post('/editRoom', function(req, res, next) {
  console.log(req.body);
  console.log(editroom);
  var type = req.body.roomType;
  var num = req.body.roomNum;
  var price= req.body.roomPrice;
  var inf= req.body.roomInf;
  con.query("update room set roomType=?,roomNumber=?,roomPrice=?,roomInf=? where roomId=?",[type,num,price,inf,editroom],function(err,result){
    if(err){
      console.log(err);
      res.end('error');
    }
    else{
      res.end('success');
    }
  }) 
});
//搜索客房
router.post('/searchRoom', function(req, res, next) {
  var roomType = req.body.roomType;
  console.log(roomType);
  con.query("select * from room where roomType=?",[roomType],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Room/searchroom', { manager: manager,data: result });
    }
  }) 
});
//查看客房状态
router.get('/roomState', function(req, res, next) {
  var roomNum = req.query.roomnum;
  console.log(roomNum);
  con.query("select * from orders where number=?",[roomNum],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      for(var i=0;i<result.length;i++){
        result[i].inTime = gettime(result[i].inTime);
        result[i].outTime = gettime(result[i].outTime);
      }
      res.render('Room/roomstate', { manager: manager,number: roomNum,data: result });
    }
  }) 
});

// -----------预订管理------------
router.get('/reserve', function(req, res, next) {
  con.query("select * from orders where state in('待处理','已拒绝')",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      for(var i=0;i<result.length;i++){
        result[i].inTime = gettime(result[i].inTime);
        result[i].outTime = gettime(result[i].outTime);
        result[i].orderTime = gettime(result[i].orderTime);
      }
      console.log(result);
      res.render('Reserve/reserve', { manager: manager,data: result });
    }
  }) 
});
//搜索预订
router.post('/searchReserve', function(req, res, next) {
  var reserve = req.body.reserve;
  console.log(reserve);
  con.query("select * from orders where state in('待处理','已拒绝') and userName=?;",[reserve],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      for(var i=0;i<result.length;i++){
        result[i].inTime = gettime(result[i].inTime);
        result[i].outTime = gettime(result[i].outTime);
        result[i].orderTime = gettime(result[i].orderTime);
      }
      res.render('Reserve/searchreserve', { manager: manager,data: result});
    }
  })  
});
//查询房间余量
router.get('/searchnum', function(req, res, next) {
  con.query("select roomType from room group by roomType;",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Reserve/searchnum', { manager: manager,type: result});
    }
  }) 
});
router.post('/searchNum', function(req, res, next) {
  var type = req.body.type;
  var inTime = req.body.inTime;
  var outTime = req.body.outTime;
  var arr = [];
  for(var i=0;i<6;i++){
    arr.push(type,inTime,outTime);
  }
  arr.push(type);
  console.log(arr);
  con.query("select * from orders where number in(select roomNumber from room where roomType=?) and inTime=? and outTime=? and state in('正在进行','预定成功');"+
    "select * from orders where number in(select roomNumber from room where roomType=?) and inTime>? and outTime<? and state in('正在进行','预定成功');"+
    "select * from orders where number in(select roomNumber from room where roomType=?) and inTime=? and outTime<? and state in('正在进行','预定成功');"+
    "select * from orders where number in(select roomNumber from room where roomType=?) and inTime<? and outTime<? and state in('正在进行','预定成功');"+
    "select * from orders where number in(select roomNumber from room where roomType=?) and inTime>? and outTime=? and state in('正在进行','预定成功');"+
    "select * from orders where number in(select roomNumber from room where roomType=?) and inTime>? and outTime>? and state in('正在进行','预定成功');"+
    "select * from room where roomType=?;",arr,function(err,result){
      if(err){
        console.log(err);
        res.end('error'); 
      }
      else{
        console.log(result[0],result[1],result[2],result[3],result[4],result[5])
        var number = result[6].length - result[0].length - result[1].length - result[2].length - result[3].length - result[4].length - result[5].length;
        res.send(number + '');
      }
  }) 
});
//同意预定
router.post('/agreeReserve', function(req, res, next) {
  var agree = req.body.agree;
  con.query("select * from orders where orderNumber=?",[agree],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      var type = result[0].roomType;
      var inTime = result[0].inTime;
      var outTime = result[0].outTime;
      var arr = [];
      for(var i=0;i<6;i++){
        arr.push(type,inTime,outTime);
      }
      arr.push(type);
      console.log(arr);
      con.query("select * from orders where number in(select roomNumber from room where roomType=?) and inTime=? and outTime=? and state in('正在进行','预定成功');"+
        "select * from orders where number in(select roomNumber from room where roomType=?) and inTime>? and outTime<? and state in('正在进行','预定成功');"+
        "select * from orders where number in(select roomNumber from room where roomType=?) and inTime=? and outTime<? and state in('正在进行','预定成功');"+
        "select * from orders where number in(select roomNumber from room where roomType=?) and inTime<? and outTime<? and state in('正在进行','预定成功');"+
        "select * from orders where number in(select roomNumber from room where roomType=?) and inTime>? and outTime=? and state in('正在进行','预定成功');"+
        "select * from orders where number in(select roomNumber from room where roomType=?) and inTime>? and outTime>? and state in('正在进行','预定成功');"+
        "select * from room where roomType=?;",arr,function(err,result){
          if(err){
            console.log(err);
            res.end('error'); 
          }
          else{
            console.log(result[0].length,result[1].length,result[2].length,result[3].length,result[4].length,result[5].length);
            console.log(result[6].length);
            var length = result[0].length + result[1].length + result[2].length + result[3].length + result[4].length + result[5].length;
            console.log(length);
            if(length == 0){
              var number = result[6][0].roomNumber;
              console.log(number);
              con.query("update orders set state='预定成功',number=? where orderNumber=?",[number,agree],function(err,result){
                if(err){
                  console.log(err);
                }
                else{
                  res.end('success-'+number); 
                }
              })
            }
            else if(length < result[6].length){
              var roomNumber = [];
              for(var i=0;i<result[0].length;i++){ roomNumber.push(result[0][i].number); }
              for(var i=0;i<result[1].length;i++){ roomNumber.push(result[1][i].number); }
              for(var i=0;i<result[2].length;i++){ roomNumber.push(result[2][i].number); }
              for(var i=0;i<result[3].length;i++){ roomNumber.push(result[3][i].number); }
              for(var i=0;i<result[4].length;i++){ roomNumber.push(result[4][i].number); }
              for(var i=0;i<result[5].length;i++){ roomNumber.push(result[5][i].number); }
              console.log(roomNumber);
              con.query("select roomNumber from room where roomType=? and roomNumber not in(?);",[type,roomNumber],function(err,result){
                if(err){
                  console.log(err);
                }
                else{
                  var number = result[0].roomNumber;
                  console.log(number);
                  con.query("update orders set state='预定成功',number=? where orderNumber=?",[number,agree],function(err,result){
                    if(err){
                      console.log(err);
                    }
                    else{
                      res.end('success-'+number);
                    }
                  })
                }
              }) 
            }
            else{
              res.end('room-full');
            }
          }
      })  
    }
  })   
});
//拒绝预定
router.post('/refuseReserve', function(req, res, next) {
  console.log(req.body);
  var refuse = req.body.refuse;
  var reason = req.body.reason;
  con.query("update orders set state='已拒绝',refuseReason=? where orderNumber=?",[reason,refuse],function(err,result){
    if(err){
      console.log(err);
      res.end('error');
    }
    else{
      res.end('success');
    }
  }) 
});

// -----------订单管理------------
router.get('/order', function(req, res, next) {
  con.query("select * from orders where state not in('待处理','已拒绝');",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      for(var i=0;i<result.length;i++){
        result[i].inTime = gettime(result[i].inTime);
        result[i].outTime = gettime(result[i].outTime);
        result[i].orderTime = gettime(result[i].orderTime);
      }
      res.render('Order/order', { manager: manager,data: result });
    }
  }) 
});
//改变订单状态
router.post('/changeState', function(req, res, next) {
  console.log(req.body);
  var orderNumber = req.body.orderNumber;
  var state = req.body.state;
  console.log(state);
  con.query("select * from orders where orderNumber=?;",[orderNumber],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result[0].state);
      if(state != result[0].state && state != '更换状态'){
        con.query("update orders set state=? where orderNumber=?;",[state,orderNumber],function(err,result){
          if(err){
            console.log(err);
            res.send('error');
          }
          else{
            res.send('success');
          }
        })
      }
    }
  })   
});
//删除订单
router.post('/delorder', function(req, res, next) {
  var orderNumber = req.body.orderNumber;
  console.log(orderNumber);
  con.query("delete from orders where orderNumber=?",[orderNumber],function(err,result){
    if(err){
      console.log(err);
      res.end('error');
    }
    else{
      res.end('success');
    }
  }) 
});
//搜索订单
router.post('/searchOrder', function(req, res, next) {
  var order = req.body.order;
  console.log(order);
  con.query("select * from orders where userName=?",[order],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      for(var i=0;i<result.length;i++){
        result[i].inTime = gettime(result[i].inTime);
        result[i].outTime = gettime(result[i].outTime);
        result[i].orderTime = gettime(result[i].orderTime);
      }
      res.render('Order/searchorder', { manager: manager,data: result });
    }
  }) 
});
//订单详情
router.get('/orderdetail', function(req, res, next) {
  var total = 0,service = [],price = [];
  var number = req.query.ordernumber;
  console.log(number);
  con.query("select serviceName,servicePrice from service",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      service = result;
      con.query("select * from orders where orderNumber=?;select * from orderservice where orderNumber=?;",[number,number],function(err,result){
        if(err){
          console.log(err);
        }
        else{
          console.log(result[1]);
          for(var i=0;i<result[1].length;i++){
            result[1][i].serviceDate = gettime(result[1][i].serviceDate);
            for(var j=0;j<service.length;j++){
              if(result[1][i].serviceName == service[j].serviceName){
                price[i] = service[j].servicePrice;
                total += service[j].servicePrice;
                break;
              }
            }
          }
          res.render('Order/orderdetail', { 
            manager: manager,
            user: result[0],
            data: result[1],
            price: price,
            totalPrice: total 
          });
        }
      })
    }
  }); 
});

// -----------服务管理------------
router.get('/service', function(req, res, next) {
  con.query("select * from service order by serviceId",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Service/service', { manager: manager,data: result });
    }
  })
});
//添加服务
router.get('/addservice', function(req, res, next) {
  res.render('Service/addservice', { manager: manager, });
});
router.post('/addService', function(req, res, next) {
  console.log(req.body);
  var serviceName = req.body.serviceName;
  var servicePrice = req.body.servicePrice;
  var serviceInf = req.body.serviceInf;
  con.query("insert into service(serviceName,servicePrice,serviceInf) values(?,?,?)",[serviceName,servicePrice,serviceInf],function(err,result){
    if(err){
      console.log(err);
      res.end('error');
    }
    else{
      res.end('success');
    }
  })
});
//删除服务
router.post('/delservice', function(req, res, next) {
  var serviceId = req.body.serviceId;
  console.log(serviceId);
  con.query("delete from service where serviceId=?",[serviceId],function(err,result){
    if(err){
      console.log(err);
      res.end('error');
    }
    else{
      res.end('success');
    }
  })
});
//编辑服务
router.get('/editservice', function(req, res, next) {
  editservice = req.query.serviceId;
  console.log(editservice);
  con.query("select * from service where serviceId=?",[editservice],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Service/editservice', { manager: manager,data: result[0] });
    }
  })
});
router.post('/editService', function(req, res, next) {
  console.log(req.body);
  var serviceName = req.body.serviceName;
  var servicePrice = req.body.servicePrice;
  var serviceInf = req.body.serviceInf;
  con.query("update service set serviceName=?,servicePrice=?,serviceInf=? where serviceId=?",[serviceName,servicePrice,serviceInf,editservice],function(err,result){
    if(err){
      console.log(err);
      res.end('error');
    }
    else{
      res.end('success');
    }
  })
});
//搜索服务
router.post('/searchService', function(req, res, next) {
  var serviceName = req.body.serviceName;
  console.log(serviceName);
  con.query("select * from service where serviceName=?",[serviceName],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Service/searchservice', { manager: manager,data: result });
    }
  })
});

// -----------评论管理------------
router.get('/comment', function(req, res, next) {
  con.query("select * from post",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Comment/comment', { manager: manager,data: result });
    }
  })
});
//删除评论
router.post('/delcomment', function(req, res, next) {
  var postId = req.body.postId;
  console.log(postId);
  con.query("delete from post where postId=?",[postId],function(err,result){
    if(err){
      console.log(err);
      res.end('error');
    }
    else{
      res.end('success');
    }
  })
});
//搜索评论
router.post('/searchComment', function(req, res, next) {
  var comment = req.body.comment;
  console.log(comment);
  con.query("select * from post where userName=?",[comment],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render('Comment/searchcomment', { manager: manager,data: result });
    }
  })
});
//查看详情
router.get('/commentdetail', function(req, res, next) {
  commentId = req.query.commentId;
  console.log(commentId);
  con.query("select * from post where postId=?;select * from reply where postId=?;",[commentId,commentId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      result[0][0].postTime = gettime(result[0][0].postTime);
      for(var i=0;i<result[1].length;i++){
        result[1][i].replyTime = gettime(result[1][i].replyTime);
      }
      res.render('Comment/commentdetail', { manager: manager,post: result[0][0],reply: result[1] });
    }
  })
});
//回复评论
router.post('/replyComment', function(req, res, next) {
  console.log(req.body);
  var postId = req.body.postId;
  var content =req.body.content;
  var now = new Date();
  now = gettime(now);
  console.log(now);
  con.query("insert into reply(replyContent,postId,replyTime) values(?,?,?)",[content,postId,now],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end(postId);
    }
  })
});
//删除回复
router.post('/delreply', function(req, res, next) {
  var replyId = req.body.replyId;
  console.log(replyId);
  con.query("delete from reply where replyId=?;",[replyId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end(commentId);
    }
  })
});
module.exports = router;
