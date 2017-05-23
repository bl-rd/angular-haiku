import { getRandomIntInclusive } from '../../helpers';
import { mergeData } from '../../haikuAggregator';

let page = {
  templateUrl: './src/components/page/page.tmpl.html',
  controller: pageController
};

function pageController() {

  let self = this;

  this.$onInit = function() {
    self.haiku = mergeData();
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