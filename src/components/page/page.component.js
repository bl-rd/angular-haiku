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
    self.selectedHaiku = getRandomHaiku();
  };

  this.updateHaiku = function() {
    self.selectedHaiku = getRandomHaiku();
  };

  function getRandomHaiku() {
    let random = getRandomIntInclusive(0, self.haiku.length);
    return self.haiku[random];
  };
}

export { page }