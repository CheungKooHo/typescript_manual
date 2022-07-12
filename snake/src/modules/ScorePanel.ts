/*
 * @Author: Coan
 * @Date: 2022-07-12 11:58:11
 * @LastEditors: Coan
 * @LastEditTime: 2022-07-12 11:58:12
 * @FilePath: /typescript_manual/snake/src/modules/ScorePanel.ts
 * @Description:
 */

class ScorePanel {
  score: number = 0;
  level: number = 1;
  scoreEle: HTMLElement = document.getElementById('score')!;
  levelEle: HTMLElement = document.getElementById('level')!;
  maxLevel: number;
  upScore: number;
  constructor(maxLevel: number = 7, upScore: number = 10) {
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
  addScore() {
    this.scoreEle.innerHTML = ++this.score + '';
    if (!(this.score % this.upScore)) {
      this.levelUp();
    }
  }
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}
export default ScorePanel;
