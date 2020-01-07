var net = require('net');

//创建一个TCP服务器
var server = net.createServer((socket) => {
    //'connect'事件的回调函数
    console.log('客户端已连接');
    socket.on('end', () => {
        console.log('客户端已断开');
    })
    //接收来自客户端的数据
    socket.on('data', (data) => {
        console.log(data.toString(), 'data');
        var readSize = socket.bytesRead;
        console.log('the size of data is ' + readSize);
    })

    //向客户端写入数据
    socket.write('hello\r\n');

    server.getConnections(function (err, count) {

        console.log('the count of clieent is' + count);
    
    });

})

//设置连接最大数量
server.maxConnection = 3;

server.listen(8989, () => {
    console.log('服务器已启动');
    //获取地址信息
    var address = server.address();
    //获取地址端口
    console.log('the port of server is ' + address.port);
    console.log('the address of server is ' + address.address);
    console.log('the ip family of server is ' + address.family);
})

// 除listening事件外，TCP服务器还支持以下事件：
// connection:当前新的链接创建时触发，回调函数的参数为socket连接对象。
// close：TCP服务器关闭的时候触发，回调函数没有参数
// error：TCP服务器发生错误的时候触发，回调函数的参数为error对象

// server.on('connection', (socket) => {
//     //console.log(socket,'socket');
//     socket.write('hello,xiang\n');
//     // console.log('connected')
// })

server.on('error', (err) => {
    throw err
})





//判断一个地址是否是ip
//console.log(net.isIP('127.0.0.1'))