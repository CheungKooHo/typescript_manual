<!--
 * @Author: Coan
 * @Date: 2021-06-16 20:07:00
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-11 16:11:25
 * @FilePath: /typescript_manual/README.md
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
5、使用tsc对ts文件进行编译 `tsc variables.ts`

---

## 类型声明
*相关代码：/variables.ts*

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
*相关代码：/tsconfig.json;/base.json*

> `**`表示任意目录，`*`表示任意文件

### 1. 自动编译文件

`tsc variables.ts -w`，【-w】选项可以监听TS文件是否发生改变从而自动执行编译操作

###  2. 使用`tsc`编译所有TS文件

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
*相关代码：/webpack.config.js*

> `npm init`
> `pnpm --save install webpack webpack-cli typescript ts-loader html-webpack-plugin webpack-dev-server clean-webpack-plugin @babel/core @babel/preset-env babel-loader core-js`
> `webpack.config.js`新建webpack配置文件

---

## 面向对象
*相关代码：/OOP.ts*

> 面向对象是程序中一个非常重要的思想，简而言之就是程序中所有的操作都需要通过对象来完成。
> 举例来说：操作浏览器要使用window对象；操作网页要使用document对象；操作控制台要使用console对象。
> 一切操作都要通过对象，也就是所谓的面向对象，那么对象到底是什么呢？
> 这就要先说到程序是什么，计算机程序的本质就是对现实事物的抽象，抽象的反义词是具体，比如：照片是一个具体的人的抽象，汽车模型是对具体汽车的抽象。程序也是对事物的抽象，在程序中我们可以表示一个人、一条狗、一把枪、一颗子弹等等所有的事物。一个事物到了程序中就变成了一个对象。
> 在程序中所有的对象都被分成了两个部分的组成，数据和功能，以人为例，人的姓名、性别、年龄、身高、体重等属性属于数据，而人可以说话、走路、吃饭、睡觉等这些方法属于人这个对象的功能。数据在对象中被称为属性，而功能则称之为方法。
> 所以，简而言之，在程序中一切皆是对象！

### 类(class)

> 想要面向对象，操作对象，首先就要拥有对象。
> 要创建对象就必须先定义类，所谓的类就可以理解成对象的原始模型，程序中可以根据类创建指定类型的对象，举例来说：我们可以通过Person类来创建张三这个人的对象，通过Dog类来创建大黄这条狗的对象，通过Car类则可以创建出一辆汽车的对象，不同的类可以用来创建不同的对象。

### 构造函数和this

> 构造函数——constructor
> 当我们需要基于一个类创建多个不同实例对象的时候，例如下面这个例子：
> 基于Dog类创建两个狗的对象要求两个对象的name属性分别为：‘小黑’，‘大黄’，那么我们使用构造函数将会使我们创建对象的过程相对变得更加智能和方便；
> 构造函数会在对象创建时调用——即new方法执行的时候
> 构造函数中的this指向构造函数执行时的对象实例
> 在构造函数中我们可以通过this指向对当前创建的对象实例进行属性修改和添加
> 在实例方法中可以通过this来表示当前调用方法的对象

### 继承

> 使用继承后，子类将会拥有父类中的所有属性和方法
> 在类定义的时候可以使用extends关键字继承一个定义更广泛的类作为父类，从而可以使用父类中的属性和方法
> 通过继承操作可以将多个子类中共有的相同代码都放在一个父类中，从而简化我们的代码数量，提高代码的可复用性，从而提高代码质量
> 而在各个子类中所独有的代码（属性和方法）则互不影响
> 在子类中定义与父类中相同的方法我们称之为对父类方法的重写，重写可替换父类中的方法

### super关键字

> 如果在父类中写了构造函数，那么在子类的构造函数中必须对父类的构造函数进行调用才可以正常使用
> 在类的方法中使用super就表示当前类的父类

### 抽象类

> 抽象类以abstract关键字开头定义的类，我们称之为抽象类
> 抽象类只能被其他子类继承，而不能直接被用来创建对象
> 在抽象类中，使用abstract关键字开头定义的方法称之为抽象方法，抽象方法没有方法体，且子类必须对父类的抽象方法进行重写

### 接口

+ 用来定义一个类结构，用来定义类中应该包含哪些属性和方法
  > 使用接口来限制在定义类的时候的结构
  > 接口中的所有属性都不能有实际的值，接口只定义对象的结构
  > 在接口中的所有方法都是抽象方法
  > 实现接口限定的类时，使用implements关键字来实现当前接口的限定类
+ 接口也可以当成类型声明来使用
  > 接口当成类型声明来使用的时候，可以重复声明，最终以多个相同接口声明的并集限定为准

### 属性的封装

使用属性修饰符对属性进行修饰封装
+ public（公有属性）修饰的属性可以在任意位置被访问（修改），没有修饰符时默认为public
+ private（私有属性）修饰的属性只能在类的内部进行访问（修改）
 > 通过在类中定义方法（getAge、setAge）可以用来在类外部实现获取和设置类的私有属性值
 > TS当中已经提供了对应的的getter，setter方法用来实现上述功能，我们称之为属性存取器
+ protected (保护属性) 只能在当前类以及继承当前类的子类中被访问（修改）

---

## 泛型`<泛型名>`
*相关代码：generics.ts*
> 在定义函数或者类时，如果遇到类型不明确的就可以使用泛型
> ```ts
  function fn<G>(a: G): G {
    return a;
  }
  console.log(fn(3));
  console.log(fn<string>('generics'));
  ```

---

## 贪吃蛇项目（Snake）
*相关代码：/snake*
