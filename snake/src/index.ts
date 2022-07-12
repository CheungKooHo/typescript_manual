/*
 * @Author: Coan
 * @Date: 2022-07-11 16:21:54
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-12 11:32:54
 * @FilePath: /typescript_manual/snake/src/index.ts
 * @Description:
 */
import './index.less';

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

class ScorePanel {
  score: number = 0;
  level: number = 1;
  scoreEle: HTMLElement = document.getElementById('score')!;
  levelEle: HTMLElement = document.getElementById('level')!;
  maxLevel: number;
  constructor(maxLevel: number = 7) {
    this.maxLevel = maxLevel;
  }
  addScore() {
    this.scoreEle.innerHTML = ++this.score + '';
    if (!(this.score % 10)) {
      this.levelUp();
    }
  }
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}
const scorePanel = new ScorePanel();
// setInterval(() => {
//   scorePanel.addScore();
// }, 100);
