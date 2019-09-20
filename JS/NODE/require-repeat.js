var a = require('./a');
var b = require('./b');
console.log('this is end...',a,b); //this is end... { done: true } { done: true }
// 上面的代码证明了两件事。一是，在b.js之中，a.js没有执行完毕，只执行了第一行。
//二是，main.js执行到第二行时，不会再次执行b.js，而是输出缓存的b.js的执行结果，即done为true