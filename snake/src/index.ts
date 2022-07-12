/*
 * @Author: Coan
 * @Date: 2022-07-11 16:21:54
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-12 11:14:44
 * @FilePath: /typescript_manual/snake/src/index.ts
 * @Description:
 */
import './index.less';

class Food {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('food')!;
  }
  get X() {
    return this.element.offsetLeft;
  }
  get Y() {
    return this.element.offsetTop;
  }
  change() {
    this.element.style.left =
      (Math.round(Math.random() * 29) * 10).toString() + 'px';
    this.element.style.left =
      (Math.round(Math.random() * 29) * 10).toString() + 'px';
  }
}
const food = new Food();
food.change();
console.log(food.X, food.Y);
