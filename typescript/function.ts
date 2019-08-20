function add1(a: number, b: number): string {
    return '' + a + b
}
add1(12, 2);

//可选参数
function add2(a: number, b: number, c?: number) { //可选参数必须接在必需参数后面
    return a + b + c
}
add2(2, 3, 4);

//参数默认值
function add3(a: number, b: number = 123) {
    return a + b
}
add3(12)

//重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

//断言
function add4(a: number | string, b: string) {
    console.log(a.toString());
    console.log(b.length);
    
    //当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
    console.log(a.length) //wrong!!
    console.log((<string>a).length); //true!!
}