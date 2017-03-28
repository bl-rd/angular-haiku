import angular from 'angular';
import { haikuComponent } from './haiku.component';

(function() {
  angular.module('haiku', [])
    .component('haiku', haikuComponent);
})();
