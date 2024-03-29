/*
 * @Author: Coan
 * @Date: 2022-07-12 12:00:24
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-24 12:30:08
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
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val) {
      if (val > this.X) {
        val = this.X - 10;
      } else {
        val = this.X + 10;
      }
    }
    this.moveBody();
    this.head.style.left = val + 'px';
  }
  set Y(val) {
    if (this.Y === val) return;
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val) {
      if (val > this.Y) {
        val = this.Y - 10;
      } else {
        val = this.Y + 10;
      }
    }
    this.moveBody();
    this.head.style.top = val + 'px';
  }
  addBodies() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }
}
export default Snake;
