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

function fn<G>(a: G): G {
  return a;
}
console.log(fn(3));
console.log(fn<string>('generics'));

function fn2<T, K>(a: T, b: K): T {
  // 泛型可以同时指定多个
  console.log(b);
  return a;
}
console.log(fn2<string, number>('coan', 18));

interface Inter {
  length: number;
}
function fn3<I extends Inter>(a: I): number {
  // <I extends Inter> 表示泛型I必须是Inter的实现类或子类
  return a.length;
}
console.log(fn3({ name: 'arr', length: 88 }));
console.log(fn3('arr'));
// console.log(fn3(123));

class MyClass<T> {
  // 泛型在类中的使用
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}
