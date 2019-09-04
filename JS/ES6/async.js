const axios = require('axios')
function getGithub(key) {
    return new Promise((resolve, reject) => {
        axios.get('http://api.github.com/users/github').then((res) => {
            resolve(res.data[key]);
        }).catch(function (error) {
            console.log(error);
        }).finally(error => error && console.log(error, 'err'))

    })
}
var genFn = async function () {
    var res1 = await getGithub('events_url');
    var res2 = await getGithub('gists_url');
    console.log(res1, 'res1');
    console.log(res22, 'res2');
    return res1 + res2
}
//genFn()
//async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。

//async函数会返回一个promise
genFn().then(res => {
    console.log(res, 'res');
}).catch(err => { console.log(err, 'err') })

//错误处理
//1. 将await放在try...catch中
async function myFn1() {
    try {
        await getGithub()
    } catch (err) {
        console.log(err);
    }
}
//2. 因为await会返回promise，所以可以紧跟catch
async function myFn2() {
    await getGithub().catch(err => console.log(err));
}