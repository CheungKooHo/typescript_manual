/*
 * @Author: Coan
 * @Date: 2022-07-11 16:21:54
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-12 13:39:08
 * @FilePath: /typescript_manual/snake/src/index.ts
 * @Description:
 */
import './index.less';
import GameContro from './modules/GameContro';

const gameContro = new GameContro();

gameContro.init();
setInterval(() => {
  // console.log(gameContro.direction);
}, 1000);
// gameContro.test();
