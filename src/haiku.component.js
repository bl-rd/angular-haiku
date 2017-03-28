import { getRandomIntInclusive } from './helpers';
import haikuSrc from './haikuAggregator';

let haikuComponent = {
  templateUrl: './templates/haiku.html',
  controller: function HaikuController() {
    let localHaiku = this.haiku = haikuSrc();
      this.randomHaiku = getRandomHaiku();
      function getRandomHaiku() {
        let random = getRandomIntInclusive(0, localHaiku.length);
        return localHaiku[random];
      }
  }
};

export { haikuComponent }