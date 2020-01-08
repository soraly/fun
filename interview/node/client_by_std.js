/*client.js*/
var net = require('net');
process.stdin.resume(); 

var client = net.createConnection({port: 8899},()=>{
    //process.stdin可以获取到用户的输入
    process.stdin.on('data',input=>{
        client.write(input)
    })
})

//这儿接收服务端的返回数据
client.on('data',data=>{
    console.log(data.toString());
    if(data.toString()==='登录成功'){
        //process.exit();
    }
})