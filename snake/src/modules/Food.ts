/*
 * @Author: Coan
 * @Date: 2022-07-12 11:57:32
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-12 11:57:33
 * @FilePath: /typescript_manual/snake/src/modules/Food.ts
 * @Description:
 */

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
export default Food;
