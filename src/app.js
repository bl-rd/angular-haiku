import angular from 'angular';
import haikuSrc from './haiku';
import { getRandomIntInclusive } from './helpers';

(function() {
  angular.module('haiku', [])
    .component('haiku', {
      templateUrl: './templates/haiku.html',
      controller: function HaikuController() {
        let localHaiku = this.haiku = haikuSrc.haikuSrc;
        this.randomHaiku = getRandomHaiku();
        function getRandomHaiku() {
          let random = getRandomIntInclusive(0, localHaiku.length);
          return localHaiku[random];
        }
      }
    });
})();
