//第一种写法
// const net = require('net');

// const server = net.createServer();

// server.on('connection', (socket) => {
//     socket.on('data',(data)=>{
//         console.log(data.toString(), 'data')
//     })
// })

// server.listen(8989);

// server.on('listening', (res)=>{
//     console.log('in listen...')
// })

//第二种写法
var net = require('net');
//创建tcp服务器
var server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(data.toString(), 'data..')
    })
});
//设置监听端口
server.listen(8989, (res) => {
    console.log('in listen...')
});
