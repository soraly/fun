var arr: number[] = [1, 2, 34, Number('3'), '3']; //number类型不允许出现 string
var arr2: (number | string)[] = [1, 2, 34, Number('3'), '3'];

//数组泛型
var arr3: Array<number> = [1, 2, 3, 4];

//接口表示数组
interface NumArray {
    [index: number]: number
}
var arr4: NumArray = [1, 2, 3];

//any
var arr5: any[] = [1,2,'3',true];
