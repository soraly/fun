//进程Process是计算机中的程序关于某数据集合上的一次运行活动
const http = require('http');

const server = http.createServer();
server.listen(3000,()=>{
    process.title='程序员成长指北测试进程';
    console.log('进程id',process.pid)
})
