/*
 * @Author: Coan
 * @Date: 2022-07-12 13:19:10
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-12 15:20:07
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
    if (keysArr.indexOf(event.key) + 1) {
      this.direction = event.key;
    }
  }
  run() {
    switch (this.direction) {
      case 'ArrowDown':
      case 'Down':
        this.snake.Y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        this.snake.X -= 10;
        break;
      case 'ArrowUp':
      case 'Up':
        this.snake.Y -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        this.snake.X += 10;
        break;
      default:
        this.snake.X += 10;
        break;
    }
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
    if (this.isBegin && this.isLive) {
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
  }
  test() {
    // 测试代码
    const food = new Food();
    const scorePanel = new ScorePanel(7, 5);
    const snake = new Snake();
    setInterval(() => {
      scorePanel.addScore();
      food.change();
      snake.addBodies();
      snake.X += 10;
      snake.Y += 10;
    }, 1000);
  }
}
export default GameContro;
