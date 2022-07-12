/*
 * @Author: Coan
 * @Date: 2022-07-12 12:00:24
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-12 15:49:07
 * @FilePath: /typescript_manual/snake/src/modules/Snake.ts
 * @Description:
 */
class Snake {
  element: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;
  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  set X(val) {
    if (this.X === val) return;
    // if (val >= 290 || val <= 0) {
    //   throw new Error('靠近墙壁');
    // }
    // if (val > 290) {
    //   val = 0;
    // }
    // if (val < 0) {
    //   val = 290;
    // }
    this.head.style.left = val + 'px';
  }
  set Y(val) {
    if (this.Y === val) return;
    // if (val < 0 || val > 290) {
    //   throw new Error('靠近墙壁');
    // }
    this.head.style.top = val + 'px';
  }
  addBodies() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }
}
export default Snake;
