const net = require('net');

//创建一个客户端
const client = net.connect({ port: 8989 }, () => {
    console.log('连接到服务器');
    //向服务端发送数据
    client.write('hello，i am from client');
})

//监听事件，当服务端发送数据过来时会触发该事件
client.on('data', (data) => {
    console.log(data, 'data');
    //client.end()
})

client.on('end', () => {
    console.log('已从服务器断开');
});