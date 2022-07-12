/*
 * @Author: Coan
 * @Date: 2022-07-12 12:00:24
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-12 17:21:33
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
    this.head.style.left = val + 'px';
  }
  set Y(val) {
    if (this.Y === val) return;
    this.head.style.top = val + 'px';
  }
  addBodies() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      (this.bodies[i] as HTMLElement).style.left =
        (this.bodies[i - 1] as HTMLElement).offsetLeft + 'px';
      (this.bodies[i] as HTMLElement).style.top =
        (this.bodies[i - 1] as HTMLElement).offsetTop + 'px';
    }
  }
}
export default Snake;
