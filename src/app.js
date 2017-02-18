import angular from 'angular';
import haikuSrc from './haiku';

(function() {
  angular.module('haiku', [])
    .component('haiku', {
      templateUrl: './templates/haiku.html',
      controller: function HaikuController() {
        // wierd transpiler stuff happening here...
        this.haiku = haikuSrc.haikuSrc;
      }
    });
})();
