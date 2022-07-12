/*
 * @Author: Coan
 * @Date: 2022-07-11 16:21:54
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-12 12:14:17
 * @FilePath: /typescript_manual/snake/src/index.ts
 * @Description:
 */
import './index.less';
import Food from './modules/Food';
import ScorePanel from './modules/ScorePanel';
import Snake from './modules/Snake';

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
