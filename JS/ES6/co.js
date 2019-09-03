const co = require('co');
const axios = require('axios');

function getGithub(key){
    return new Promise((resolve, reject) => {
        axios.get('http://api.github.com/users/github').then((res)=>{
            resolve(res.data[key])
        }).catch(function (error) {
            console.log(error);
          }).finally(error=>error && console.log(error,'err'))
        
    })
}
var genFn = function*(){
    var res1 = yield getGithub('events_url');
    var res2 = yield getGithub('gists_url');
    console.log(res1,'res1');
    console.log(res2,'res2');
  }

  //手写gen函数
  var gen = genFn();
  gen.next().value.then(res1=>{
    gen.next(res1).value.then(res2=>{
        gen.next(res2)
    })    
  })

  //利用co函数
  co(genFn)