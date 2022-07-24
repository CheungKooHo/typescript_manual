/*
 * @Author: Coan
 * @Date: 2022-07-12 13:19:10
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-24 12:30:16
 * @FilePath: /typescript_manual/snake/src/modules/GameContro.ts
 * @Description:
 */
import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';
class GameContro {
  food: Food;
  scorePanel: ScorePanel;
  snake: Snake;
  direction: string = '';
  isBegin: boolean = false;
  isLive: boolean = true;
  isCheckWall: boolean = true;
  constructor() {
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.snake = new Snake();
  }
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this));
  }
  keydownHandler(event) {
    if (event.key === ' ' && !this.isBegin) {
      this.isBegin = !this.isBegin;
      this.isLive = true;
      this.run();
    } else if (event.key === ' ' && this.isBegin) {
      this.isBegin = !this.isBegin;
    }
    let keysArr = [
      'ArrowDown',
      'ArrowLeft',
      'ArrowUp',
      'ArrowRight',
      'Down',
      'Left',
      'Up',
      'Right',
    ];
    let _Direction = event.key;
    if (keysArr.indexOf(_Direction) + 1) {
      this.direction = _Direction;
    }
  }
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direction) {
      case 'ArrowDown':
      case 'Down':
        Y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10;
        break;
      case 'ArrowUp':
      case 'Up':
        Y -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10;
        break;
      default:
        X += 10;
        break;
    }
    this.checkEat(X, Y);
    try {
      this.cheakBody();
      this.snake.X = X;
      this.snake.Y = Y;
      this.checkWall();
    } catch (error) {
      alert(error.message);
      this.snake.X = 0;
      this.snake.Y = 0;
      this.isLive = false;
      this.isBegin = false;
      this.direction = '';
      this.snake.element.innerHTML = '<div id="head"></div>';
    }
    if (this.isBegin && this.isLive) {
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
  }
  checkEat(_X: number, _Y: number) {
    if (_X === this.food.X && _Y === this.food.Y) {
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBodies();
    }
  }
  checkWall() {
    if (!this.isCheckWall) {
      if (this.snake.X >= 290) {
        this.snake.X = 0;
      }
      if (this.snake.X < 0) {
        this.snake.X = 290;
      }
      if (this.snake.Y >= 290) {
        this.snake.Y = 0;
      }
      if (this.snake.Y < 0) {
        this.snake.Y = 290;
      }
    } else {
      if (
        this.snake.X < 0 ||
        this.snake.X > 290 ||
        this.snake.Y < 0 ||
        this.snake.Y > 290
      ) {
        throw new Error('嚯，喝多少哇这，都撞死了！');
      }
    }
  }
  cheakBody() {
    for (let index = 1; index < this.snake.bodies.length; index++) {
      let body = this.snake.bodies[index] as HTMLElement;
      if (this.snake.X === body.offsetLeft && this.snake.Y === body.offsetTop) {
        console.log(999);
        // throw new Error('嚯，喝多少哇这，都撞死了！');
      }
    }
  }
}
export default GameContro;
