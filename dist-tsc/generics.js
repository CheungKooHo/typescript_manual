"use strict";
/*
 * @Author: Coan
 * @Date: 2022-07-11 15:36:39
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-11 15:55:17
 * @FilePath: /typescript_manual/generics.ts
 * @Description:
 */
/**
 * 在定义函数或者类时，如果遇到类型不明确的就可以使用泛型
 */
function fn(a) {
    return a;
}
console.log(fn(3));
console.log(fn('generics'));
function fn2(a, b) {
    // 泛型可以同时指定多个
    console.log(b);
    return a;
}
console.log(fn2('coan', 18));
function fn3(a) {
    // <I extends Inter> 表示泛型I必须是Inter的实现类或子类
    return a.length;
}
console.log(fn3({ name: 'arr', length: 88 }));
console.log(fn3('arr'));
// console.log(fn3(123));
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
