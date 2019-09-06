//1. CommonJS是运行时加载，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。
let { age, sayhi } = require('./require_data');
console.log(age, sayhi)

//2. ES6模块：实质是从module_data模块加载 2 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载
import { age, sayhi } from './module_data'

//3. ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。
//严格模式主要有以下限制:
//1.变量必须声明后再使用
//2.禁止this指向全局对象，顶层this指向undefined
//3.函数的参数不能有同名属性，否则报错


//4. 第一种写法：
export var name = 'xiang';
export var color = 'red';
//第二种写法：更推荐，因为可以直接看到整个模块输出了什么
export { age, size as sizeeee }

//5. export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
// 报错
export 1;
// 报错
var m = 1;
export m;
//原因：没有提供对外的接口，第一种写法直接输出 1，第二种写法通过变量m，还是直接输出 1。1只是一个值，不是接口
//正确写法：
export var m = 1;
var m = 1; export { m }

//6. export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
//这一点与 CommonJS 规范完全不同。CommonJS 模块输出的是值的缓存

//7.import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。
import { a } from './xxx.js'
a = {}; // Syntax Error : 'a' is read-only;
//但是，如果a是一个对象，改写a的属性是允许的。但这样写很难查错，建议凡是输入的变量，都当作完全只读，轻易不要改变它的属性。

//8. 由于import是静态执行，所以不能使用表达式和变量，因为他们只有在运行时才能得到结果。
// 报错
import { 'f' + 'oo' } from 'my_module';
// 报错
let module = 'my_module';
import { foo } from module;

//9. import多次模块，但是只会执行一次
import { color } from './base'
import { sizeeee } from './base'

//10. 整体加载
import * as all from './base'

//11. export default 命令  第一组
export default function crc32() { // 输出
    // ...
}
import crc32 from 'crc32'; // 输入
//第二组
export function crc32() { // 输出
    // ...
};
import { crc32 } from 'crc32'; // 输入
//export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出


//12.export 与 import 的复合写法
export { foo, bar } from 'my_module';
//等于
import { foo, bar } from 'my_module';
export { foo, bar };
//此时foo实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar。


//13.module()
//require是运行时加载，所以可以动态加载：
const path = './' + fileName;
const myModual = require(path);
//引擎处理import语句是在编译时，这时不会去分析或执行表达式，包括+ if 等
import() //返回一个 Promise 对象
//import()是运行时执行，类似于 Node 的require方法
export default {
    methods: {
    },
   async created(){
        var [a,b,c] = await Promise.all([
            this.getUrl(),
            this.getLocation(),
            import('./data.js')
        ])
        console.log(a,b,c,'a,b')
    }
}