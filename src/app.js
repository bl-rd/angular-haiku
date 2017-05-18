import angular from 'angular';
import { haikuComponent } from './components/haiku/haiku.component';
import { page } from './components/page/page.component';

(function() {

  angular.module('haiku', [])
    .component('page', page)
    .component('haiku', haikuComponent());

})();
