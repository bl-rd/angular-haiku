import { getRandomIntInclusive } from '../../helpers';
import haikuSrc from '../../haikuAggregator';

let page = {
  templateUrl: './src/components/page/page.tmpl.html',
  controller: pageController
};

function pageController() {

  let self = this;

  this.$onInit = function() {
    self.haiku = haikuSrc();
  };

  this.getRandomHaiku = function() {
    let random = getRandomIntInclusive(0, self.haiku.length);
    return this.haiku[random];
  };
}

export { page }