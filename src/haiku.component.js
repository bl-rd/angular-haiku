import { getRandomIntInclusive } from './helpers';
import haikuSrc from './haiku';

let haikuComponent = {
  templateUrl: './templates/haiku.html',
  controller: function HaikuController() {
    let localHaiku = this.haiku = haikuSrc.haikuSrc;
      this.randomHaiku = getRandomHaiku();
      function getRandomHaiku() {
        let random = getRandomIntInclusive(0, localHaiku.length);
        return localHaiku[random];
      }
  }
};

export { haikuComponent }