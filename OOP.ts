/*
 * @Author: Coan
 * @Date: 2022-07-10 22:29:21
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-11 15:01:27
 * @FilePath: /typescript_manual/OOP.ts
 * @Description:
 */

/**
 * 使用class关键字定义类
 *  */
(function () {
  class Person {
    // 定义实例属性——只能通过对象实例访问
    name: string = 'defName';
    // 在属性前使用static关键字可以定义类属性（也叫静态属性）——可以通过类直接访问
    static age: number = 18;
    // 在属性前使用readonly可限定属性为只读属性——只读属性不可修改
    readonly gender: string = 'male';
    static readonly profession = 'coder';

    // 定义方法——实例方法和类(静态)方法的规则与属性一致
    sayHello() {
      console.log('"coan" can say hello');
    }
    static sayBay() {
      console.log('but "Person" can say bay');
    }
  }
  /**
   * 使用new方法创建对应类的对象实例
   * 对象中主要包含了两个部分：
   *  属性：
   *  方法：
   */
  const coan = new Person();
  coan.name = 'coan';
  console.log(coan.name);
  // console.log(coan.age); // 这里使用对象访问静态属性时会报错
  Person.age = 25;
  console.log(Person.age);
  // Person.profession = 'beggar'; // 这里尝试修改只读属性会报错
  // coan.gender = 'female'; // 这里尝试修改只读属性会报错
  coan.sayHello();
  Person.sayBay();
})();

/**
 * 构造函数——constructor
 * 当我们需要基于一个类创建多个不同实例对象的时候，例如下面这个例子：
 * 基于Dog类创建两个狗的对象要求两个对象的name属性分别为：‘小黑’，‘大黄’，那么我们使用构造函数将会使我们创建对象的过程相对变得更加智能和方便；
 * 构造函数会在对象创建时调用——即new方法执行的时候
 */
(function () {
  class Dog {
    name: string = 'defName';
    constructor(name: string) {
      console.log('constructor is working');
      console.log(this); // 构造函数中的this指向构造函数执行时的对象实例
      this.name = name; // 在构造函数中我们可以通过this指向对当前创建的对象实例进行属性修改和添加
    }
    bark() {
      console.log(this.name + '汪汪！'); // 在实例方法中可以通过this来表示当前调用方法的对象
    }
  }
  const dog1 = new Dog('小黑');
  const dog2 = new Dog('大黄');
  console.log(dog1);
  console.log(dog2);
  dog1.bark();
  dog2.bark();
})();

/**
 * 继承：使用继承后，子类将会拥有父类中的所有属性和方法
 * 在类定义的时候可以使用extends关键字继承一个定义更广泛的类作为父类，从而可以使用父类中的属性和方法
 */
(function () {
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    canDo() {
      console.log("I'm " + this.name + ', I can eat and sleep');
    }
  }
  class Dog extends Animal {
    bark() {
      console.log(this.name + '汪汪！'); // 在各个子类中所独有的代码（属性和方法）则互不影响
    }
  }
  class Cat extends Animal {
    bark() {
      console.log(this.name + '喵喵！'); // 在各个子类中所独有的代码（属性和方法）则互不影响
    }
    canDo(): void {
      console.log("this function can rewrite Animal's function"); // 在子类中定义与父类中相同的方法我们称之为对父类方法的重写，重写可替换父类中的方法
    }
  }
  const dog1 = new Dog('旺财', 2);
  dog1.bark();
  dog1.canDo();
  const cat1 = new Cat('嘻嘻', 1);
  cat1.bark();
  cat1.canDo();
})();

/**
 * super
 */
(function () {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    bark() {
      console.log(this.name + ' is barking');
    }
  }
  class Dog extends Animal {
    age: number;
    constructor(name: string, age: number) {
      // 如果在父类中写了构造函数，那么在子类的构造函数中必须对父类的构造函数进行调用才可以正常使用
      super(name); // 调用父类构造函数
      this.age = age;
    }
    bark() {
      super.bark(); // 在类的方法中使用super就表示当前类的父类
    }
  }
  const dog = new Dog('旺财', 2);
  dog.bark();
})();

/**
 * 抽象类
 * 抽象类以abstract关键字开头定义的类，我们称之为抽象类
 * 抽象类只能被其他子类继承，而不能直接被用来创建对象
 */
(function () {
  abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    abstract bark(): void; // 在抽象类中，使用abstract关键字开头定义的方法称之为抽象方法，抽象方法没有方法体，且子类必须对父类的抽象方法进行重写
  }
  class Dog extends Animal {
    bark() {
      console.log(this.name + ' is barking');
    }
  }
  const dog = new Dog('旺财');
  dog.bark();
  // const animal1 = new Animal(); // 这里尝试使用抽象类Animal来创建对象，此时会报错
})();

/**
 * 接口
 * 用来定义一个类结构，用来定义类中应该包含哪些属性和方法
 * 接口也可以当成类型声明来使用
 */
(function () {
  // 接口当成类型声明来使用的时候，可以重复声明，最终以多个相同接口声明的并集限定为准
  interface objInterface {
    name: string;
    age: number;
  }
  interface objInterface {
    gender: string;
  }
  const obj: objInterface = {
    name: 'coan',
    age: 18,
    gender: 'male',
  };
  console.log(obj);
  // 使用接口来限制在定义类的时候的结构
  interface classInterface {
    name: string; // 接口中的所有属性都不能有实际的值，接口只定义对象的结构
    fun(): void; // 在接口中的所有方法都是抽象方法
  }
  class ClassInterface implements classInterface {
    // 实现接口限定的类时，使用implements关键字来实现当前接口的限定类
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    fun() {
      console.log('this is a fun');
    }
  }
  const objClassInterface = new ClassInterface('coan');
  console.log(objClassInterface);
})();

/**
 * 属性的封装——使用属性修饰符对属性进行修饰封装
 */
(function () {
  class Person {
    public name: string; // public（公有属性）修饰的属性可以在任意位置被访问（修改），没有修饰符时默认为public
    private _age: number; // private（私有属性）修饰的属性只能在类的内部进行访问（修改）
    private _gender: string; // private（私有属性）修饰的属性只能在类的内部进行访问（修改）
    // protected (保护属性) 只能在当前类以及继承当前类的子类中被访问（修改）
    constructor(name: string, _age: number, _gender: string) {
      this.name = name;
      this._age = _age;
      this._gender = _gender;
    }
    // 在类中定义方法（getAge、setAge）用来获取和设置私有属性
    getAge() {
      return this._age;
    }
    setAge(age: number) {
      if (age > 0) {
        this._age = age;
      } else {
        this._age = 18;
      }
    }
    // TS当中已经提供了对应的的getter，setter方法用来实现上述功能，我们称之为属性存取器
    get gender() {
      return this._gender;
    }
    set gender(genderValue) {
      if (genderValue === 'male' || genderValue === 'female') {
        this._gender = genderValue;
      }
    }
  }
  const coan = new Person('coan', 18, 'male');
  coan.name = 'coder';
  coan.setAge(25);
  coan.setAge(-25);
  coan.gender = 'female';
  console.log(coan.gender);
  console.log(coan);
})();

/**
 * 构造函数语法糖——可以直接将属性定义在构造函数中，这样可以免去一些简单代码
 */
(function () {
  class Sugar {
    constructor(public name: string, private age: number) {}
  }
  const sugar = new Sugar('coan', 18);
  console.log(sugar);
})();
