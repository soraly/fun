//1. 基本用法：只要等号两边的模式相同，左边的变量就会被赋予对应的值
var [,[name],[[age]]] = [1,['xiang'],[[22]]] 
console.log(name,age) // xiang 22

var [head,,...tail] = [1,2,3,4,5];
console.log(head,tail) //1 [3,4,5]

//2. 解构Set
var [a,b,c] = new Set(['aaa','bbb','ccc'])
console.log(a,b,c) //aaa bbb ccc
//凡是某种数据结构有Iterator接口，都可以用解构赋值
