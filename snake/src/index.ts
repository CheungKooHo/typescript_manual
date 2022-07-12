/*
 * @Author: Coan
 * @Date: 2022-07-11 16:21:54
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-12 11:59:28
 * @FilePath: /typescript_manual/snake/src/index.ts
 * @Description:
 */
import './index.less';
import Food from './modules/Food';
import ScorePanel from './modules/ScorePanel';

const food = new Food();
console.log(food);
const scorePanel = new ScorePanel(3, 3);
setInterval(() => {
  scorePanel.addScore();
}, 1000);
