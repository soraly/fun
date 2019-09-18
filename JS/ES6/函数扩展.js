//1. 函数参数默认值
function hello(name = 'xiang', age = 20) {
    console.log(name, age);
}
hello()
//参数默认值不是传值的，惰性求值
var x = 100;
function add(num = x) {
    console.log(x * x);
}
add();//10000
x++;
add();//10201

//2.和解构赋值一起使用
function hello2({ name = 'xiang', age }) {
    console.log(name, age);
}
// hello2();//报错 
hello2({}) //xiang  undefined

function hello2_new({ name = 'xiang', age } = {}) {
    console.log(name, age);
}
hello2_new() //xiang  undefined

    //3. 函数的length，返回没有指定默认值的参数个数
    ((a, b) => { }).length //2
    ((a, b = 1) => { }).length //1
    ((a = 1, b) => { }).length //0 设置默认值的参数不是尾参数，该参数后面的参数不计入length

//4. 作用域
x = 100;
function hello4(x, y = x) {
    console.log(y)
}
hello4(33) //y: 33 参数形成一个单独的作用域，所以变量x指向第一个参数x

//5.rest参数
//以前arguments用数组的方法时要先转换成数组才可以
function sortnums() {
    return Array.prototype.slice.call(arguments).sort();
}
//rest
function sortnums2(...rest) {
    return rest.sort();
}

//6.箭头函数
var add = ({ num1, num2 }) => num1 + num2;
add({ num1: 100, num2: 200 });
//注意点：
//1. 函数体内的this对象，就是定义时所在的对象，而不是使用时。
//2. 不可以当作构造函数，不能使用new
//3. 没有arguments对象，用rest参数代替
//4. 不可以使用yield，不能当作generator函数   

//7.不适用场合
//定义对象的方法且该方法内有this
var oo2 = {id:123,test:()=>{this.id++;console.log(this.id)}}
oo2.test() //NAN
//this指向了全局，如果是普通函数会指向被点击的button
var button = document.getElementById('press');
button.addEventListener('click', () => {
  this.classList.toggle('on');
});

