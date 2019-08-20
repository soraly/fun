interface Animal {
    readonly name: string,
    age: number,
    size?: number,
    [prop: string]: any
}
var dog: Animal = {
    name: 'dogg',
    age: 123,
    height: 100
}
dog.age = 444;
dog.name = 'dd'; //readonly属性不能再次定义