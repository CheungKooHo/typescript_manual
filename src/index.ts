/*
 * @Author: Coan
 * @Date: 2022-07-06 17:30:41
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-08 15:05:35
 * @FilePath: /TypeScript/src/index.ts
 * @Description:
 */
import { log } from './i';
console.log(log);
const obj = { name: 'coan', age: 25 };
console.log(obj);
obj.name = 'coder';
obj.age = 18;
console.log(obj);
let tsWeb: string = 'ts-web';
tsWeb = 'rewrite-ts-web';
console.log('hello typescript with webpack【', tsWeb, '】');
// console.log(Promise);
