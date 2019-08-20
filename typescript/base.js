//布尔值
var mark = true;
var mark2 = Boolean(1);
var mark3 = new Boolean(1); //boolean是数据类型，Boolean是构造函数
//mark 和 mark2效果一样，都是布尔值，mark3返回的是一个 Boolean 对象
//数字
var num1 = 123;
var num2 = 0x123; //十六进制
var num3 = 22; //二进制
var num4 = 4168; //八进制
//字符串
var str1 = 'hello,xiang';
//空值
var empty = null; //void类型只能赋值为null或者undefined
//null和undefined
var nn = null;
var uu = undefined;
var num6 = undefined; //undefined 和 null 是所有类型的子类型。故undefined 类型的变量，可以赋值给 number 类型的变量
//任意值
var aa = 123;
aa = true;
var bb = aa.name.age;
//类型推论--》TypeScript 会在没有明确的指定类型的时候推测出一个类型
var num7 = 77;
//num7 = 'hello';  //编译会报错
var num8; //定义的时候没有赋值,会被推断成 any 类型
num8 = 88;
num8 = 'hello'; //编译不报错
//联合类型
var doubleVal;
console.log(doubleVal.length);
