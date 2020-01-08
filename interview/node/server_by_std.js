  /*server.js*/
var net = require('net');
//这儿用一个对象来模拟数据库，保存用户名和密码
var user = {
    admin: '123',
    test: '333',
    lucy: '222',
}
//该协议是无状态的，所以需要临时变量来保存用户输入的内容
var username = '';

var server = net.createServer((socket)=>{
    console.log('服务器已连接');
    socket.write('请输入用户名：');
    socket.on('data',(data)=>{
        //通过stdin输入的内容是buffer，需要转成字符串且清除空格
        data = data.toString().trim();
        if(!username){
            if(user[data]){
                socket.write('请输入密码：');
                username = data;
            }else{
                socket.write('用户名不对，请输入用户名：');
            }
        }else {
            if(user[username] === data){
                socket.write('登录成功');
                username = '';
                socket.write('请输入用户名：');
            }else {
                socket.write('密码不对，请输入密码：');
            }
        }
    });
    socket.on('close',data=>{
        console.log(data);
    })
})

server.listen(8899,()=>{
    console.log('服务器监听8899端口中')
})