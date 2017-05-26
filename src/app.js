import angular from 'angular';
import { haikuComponent } from './components/haiku/haiku.component';
import { lineComponent } from './components/line/line.component';
import { page } from './components/page/page.component';
import { control } from './components/control/control.component';

(function() {

  angular.module('haiku', [])
    .component('page', page)
    .component('haiku', haikuComponent())
    .component('control', control)
    .component('line', lineComponent);

})();
