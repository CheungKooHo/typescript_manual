/*
 * @Author: Coan
 * @Date: 2022-07-12 13:19:10
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-12 14:38:11
 * @FilePath: /typescript_manual/snake/src/modules/GameContro.ts
 * @Description:
 */
import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';
class GameContro {
  Food: Food;
  ScorePanel: ScorePanel;
  snake: Snake;
  direction: string = '';
  constructor() {
    this.Food = new Food();
    this.ScorePanel = new ScorePanel();
    this.snake = new Snake();
  }
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    setInterval(this.run.bind(this), 1000);
  }
  keydownHandler(event) {
    console.log(event.key);
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
