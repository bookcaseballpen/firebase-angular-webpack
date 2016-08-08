import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routing.js' ;
import buttonComponent from './components/button.component';
import inputComponent from './components/input.component';

export default angular.module('app.home', [uirouter])
    .config(routing)
    .controller('homeCtroller',function(){
    })
    .component('buttonComponent', buttonComponent)
    .component('inputComponent', inputComponent)
    .name;

