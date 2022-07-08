<!--
 * @Author: Coan
 * @Date: 2021-06-16 20:07:00
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-08 14:01:27
 * @FilePath: /TypeScript/TypeScript.md
 * @Description:
-->
---

## TypeScript介绍

一门基于js之上的编程语言，解决了js自由的类型系统的不足，使用TypeScript可以大大提高代码可靠程度
+ 以JavaScript为基础构建的语言
+ 一个JavaScript的超集
+ 可以在任何支持JavaScript的平台中执行
+ TypeScript扩展了JavaScript，并添加了类型
+ TypeScript不能被JS解析器直接执行（比如浏览器，执行需要编译为JS）
> TypeScript增加了什么
> 类型、支持ES的新特性、添加ES不具备的新特性、丰富的配置选项、强大的开发工具

---

## 开发环境搭建

1、下载Nodejs
2、安装Nodejs
3、使用npm全局安装typescript `npm i -g typescript`
4、创建一个ts文件
5、使用tsc对ts文件进行编译 `tsc test00.ts`

---

## 类型声明

### 类型声明

类型申明是TS非常重要的一个特点
通过类型声明可以指定TS中变量（参数、行参）的类型
指定类型后，类型声明给变量设置了类型，TS编译器会自动检查是否符合类型声明，符合则赋值，否则报错
简而言之，类型声明给变量设制了类型，是的变量只能存储某种类型的值

> 语法：
  ```typescript
  let 变量: 类型；
  let 变量: 类型 = 值;
  function fn (参数: 类型, 参数: 类型): 类型{
    ...
  }
  ```

### 自动判断类型

TS拥有自动的类型判断机制
当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型
所以如果变量的声明和赋值同时进行时，可以省略掉类型声明

### 类型

| 类型    | 例子            | 描述                             |
| ------- | --------------- | -------------------------------- |
| number  | 1,-33,2.5       | 任意数字                         |
| string  | 'a','b','coan'  | 任意字符串                       |
| boolean | true,false      | 布尔值true或false                |
| 字面量  | 其本身          | 限制变量的值就是改字面量的值     |
| any     | *               | 任意类型                         |
| unknown | *               | 类型安全的any                    |
| void    | 空值(undefined) | 没有值（或者undefined）          |
| never   | 没有值          | 不能是任何值                     |
| object  | {name:'coan'}   | 任意的JS对象                     |
| array   | [1,2,3]         | 任意JS数组                       |
| tuple   | [4,5]           | 元素，TS新增类型，固定长度的数组 |
| enum    | enum{A,b}       | 枚举，TS中新增类型               |

---

## 编译选项

> `**`表示任意目录，`*`表示任意文件

### 1. 自动编译文件`tsc test00.ts -w`，【-w】选项可以监听TS文件是否发生改变从而自动执行编译操作

### 2. 使用`tsc`编译所有TS文件

  + 前提是当前目录下必须包含`tsconfig.json`文件

### 3. `tsconfig.json`配置选项

  + `include`定义希望被编译的文件所在的目录
    > 默认值：`["**/*"]`
    > 示例：`"include":["src/**/*","test/**/*"]`【表示所有src目录和test目录下的所有ts文件都会被编译】

  + `exclude`定义需要排除在外的目录
    > 默认值：`["node_modules","bower_components","jspm_packages"]`
    > 示例：`"exclude":["./src/hello/**/*"]`【表示src/hello目录下的ts文件将都不会被编译】

  + `extends`定义被继承的配置文件
    > 示例：`"extends":"./configs/base"`【表示当前配置文件中将会自动继承（包含）configs目录下的base.json中的所有配置信息】

  + `files`指定被编译文件的列表，只有需要编译的文件少的时候才会用到
    > 示例：`"files":["core.ts"]`【表示指定core.ts文件将被编译】

  + `compilerOptions`TS编译器的选项，是配置文件中非常重要也是比较复杂的配置选项，在`compilerOptions`中包含多个子项，用来完成对编译的配置

    **项目选项**

    + `target`设置ts代码编译的目标版本
      > 可选值：ES3(默认),ES5,ES6/ES2015,ES7/ES2016,ES2017,ES2018,ES2019,ES2020,ES2021,ES2022,ESNext
      > 示例：
        ```json
          "compilerOptions":{
           	"target": "ES6"
          }
        ```

    + `module`指定要是用的模块化规范
      > 可选值：CommonJS,AMD,System,UMD,ES6,ES2015,ES2020,ESNext,None,ES2022,Node16,NodeNext

    + `lib`指定代码运行时包含的库（宿主环境）
      > 可选值：ES3,ES5,ES6/ES2015,ES7/ES2016,ES2017,ES2018,ES2019,ES2020,ES2021,ES2022,ESNext,DOM,WebWorker,ScriptHost...

    + `rootDir`用来指定编译文件的根目录，编译器会在根目录查找入口文件
    + `outDir`指定编译后的文件输出目录
    + `outFile`将全局作用域中的ts文件编译后的js文件合并为一个指定的文件进行输出
    + `allowJS`输出是否包含原有的js文件，默认是false
    + `checkJS`是否检查js代码是否符合ts规范，默认是false
    + `removeComments`是否移除注释，默认是false
    + `noEmit`只进行编译过程，不生成编译后的文件，默认false
    + `noEmitOnError`如果报错，则只进行编译过程，不生成编译后的文件，默认false

    **语法检查**

    + `strict`所有严格检查的总开关
    + `alwaysStrict`设置在编译后的js文件是否使用严格模式，默认false
    + `noImplicitAny`设置不允许隐式的any类型
    + `noImplicitThis`设置不允许不明确类型的this
    + `strictNullChecks`设置严格检查空值

    **其他选项**

    + `declaration`用来指定是否在编译的时候生成相的d.ts声明文件，如果设为true,编译每个ts文件之后会生成一个js文件和一个声明文件，但是declaration和allowJs不能同时设为true
    + `declarationMap`用来指定编译时是否生成.map文件
    + `socuceMap`用来指定编译时是否生成.map文件
    + `jsx`指定jsx代码用于的开发环境:'preserve','react-native',or 'react

    完整编译选项地址：*https://www.tslang.cn/docs/handbook/compiler-options.html*

  + `compileOnSave`在最顶层设置compileOnSave标记，可以让IDE在保存文件的时候根据tsconfig.json重新生成文件。
  + `references`指定要引用的项目，一个对象数组

---

## 使用webpack打包ts代码

> `npm init`
> `pnpm --save install webpack webpack-cli typescript ts-loader html-webpack-plugin webpack-dev-server clean-webpack-plugin @babel/core @babel/preset-env babel-loader core-js`
> `webpack.config.js`新建webpack配置文件

---

## 面向对象

---

## 类

---

## 构造函数和this

---

## 继承

---

## super关键字

---

## 抽象类

---

## 接口

---

## 属性的封装

---

## 泛型

---

## 贪吃蛇项目
