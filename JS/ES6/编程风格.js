//1. 用let取代var
//var命令存在变量提升效用，let命令没有.
if (true) {
    console.log(x); // ReferenceError
    let x = 'hello';
}
//因为变量声明提升到代码块的头部。这违反了变量先声明后使用的原则。所以用let比较好

//2. 多使用const，比let、var更好
//因为const可以提醒阅读程序的人，这个变量不应该改变。还能防止了无意间修改变量值所导致的错误。
//而且const符合函数的编程式思想，运算不改变值，只是新建值。
//还有一个原因是JS编译器会对const优化，执行效率更高
var a = 1, b = 2, c = 3;// bad

const a = 1;// good
const b = 2;
const c = 3;

const [a, b, c] = [1, 2, 3]; // best

//3. 静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。
const a = "foobar"; //bad
const a = 'foobar'; //good

//4. 使用数组成员对变量赋值时，优先使用解构赋值。
var arr = ['xiang', 'fenfen'];
var xx = arr[0]; //bad
var [xx, ff] = arr; //good
//对象赋值
function getList(data) {  //bad
    var name = data.name;
    var age = data.age;
}
function getList2(data) { //good
    const { name, age } = data
}
function getList3({ name, age }) { //best
}
//如果函数返回多个值，优先使用对象的解构赋值
function processInput(input) {
    return { left, right, top, bottom };
}
const { left, right } = processInput(input);

//5. 单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。
// good
const a = { k1: v1, k2: v2 };
const b = {
    k1: v1,
    k2: v2,
};

//6. 对象尽量静态化，一旦定义，就不得随意添加新的属性。
const a = {}; a.name = 'xiang'; //bad
const b = {}; Object.assign(b, { name: 'xiang' }); //good
const c = { name: null }; c.name = 'xiang'; //good