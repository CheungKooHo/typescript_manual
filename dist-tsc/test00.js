"use strict";
/*
 * @Author: Coan
 * @Date: 2022-07-04 17:21:22
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-08 10:36:43
 * @FilePath: /TypeScript/dist-tsc/test00.js
 * @Description:
 */
console.log('hello typescript');
/**
 * 变量和类型声明
 */
let testNumber; // 声明一个变量testNumber，并且指定它的类型为number，testNumber的类型设置为了number，那么在以后的使用过程中testNumber的值只能是数字
testNumber = 10;
// testNumber = 'abc'; // 此行代码会报错，因为变量testNumber的类型是number，不能赋值为字符串
let testString = 'abc'; // 声明完变量直接进行赋值
let testBoolean = false; // 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检查，那么下一行代码讲会报错
// testBoolean = 123;
function sum(a, b) {
    return a + b;
} // 给函数参数和返回值使用类型声明
// console.log(sum(123, '456'));
let result = sum(123, 456);
console.log(result);
let a; // 直接使用字面量进行类型声明
// a = 11;
let b; // 可以使用|来链接多个类型（联合类型）
b = 'coder';
// b = 'coan1';
let b1;
b1 = 123;
b1 = 'abc';
let c; // any表示的是任意类型，一个变量使用了any设置类型后相当于对改变量关闭了TS的类型检查
c = 1;
c = 'a';
c = true;
let c1; // 声明变量的时候如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式any）
c1 = 1;
c1 = 'a';
c1 = true;
b1 = c; // any类型的值可以直接赋值给其他变量【造成污染】
let d; // unknown，表示未知类型的值（类型安全的any）
d = 1;
d = 'a';
d = true;
// b1 = d; // unknown类型的值不能直接赋值给其他变量，如果必须要赋值，则需要【1人工进行类型检查】或者【2类型断言】
// 【1人工进行类型检查】
if (typeof d === 'number') {
    b1 = d;
}
// 【2类型断言】
b1 = d;
b1 = d;
function fn() { } // void用来表示空类型，以函数为例，就表示没有返回值的函数【TS函数一般会根据自身函数体自动判断返回值类型】
function fn1() {
    throw new Error('报错了啥');
} // never表示永远不返回结果，常用来报错
let e; // object表示一个JS对象属性
e = {};
e = function () { };
let e1; // 【{属性名0:属性值0,属性名1:属性值1}】用来指定对象及其中可以包含哪些属性
e1 = { name: 'coan' }; // 在属性名后边加上?，表示当前属性是可选的
let e2; // 【[propName: string]: any】表示当前对象中除了指定属性外可以有任意类型（any）的属性
e2 = { name: 'coan', age: 25, gender: '男' };
let f; // 【(行参0:类型0,行参1:类型1)=>返回值类型】使用尖头函数的方式设置函数结构的类型声明
let g; // 【string[]】表示字符串数组类型
g = ['a', 'b'];
let g1; // 【Array<number>】表示number数组类型
g1 = [1, 2, 3];
let h; // tuple元组，固定长度的数组
h = ['a', 'b'];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender["Unknow"] = "null";
})(Gender || (Gender = {})); // enmu枚举，在特定值里选择的枚举类类型
let i;
i = {
    name: 'coan',
    gender: Gender.Female,
    age: 25,
};
let j; // 【&】表示同时满足
j = { name: 'coan', age: 25 };
let k;
k = 5;
let box = document.querySelector('.box');
box === null || box === void 0 ? void 0 : box.addEventListener('click', () => {
    console.log('click this box');
});
