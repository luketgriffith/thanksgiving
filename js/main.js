import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import config from './app.core/config';
import HomeController from './controllers/HomeController';
import PeopleController from './controllers/PeopleController';
import AddController from './controllers/AddController';
import PARSE from './app.core/constants';

angular
  .module('app', ['ui.router', 'ngCookies'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('PeopleController', PeopleController)
  .controller('AddController', AddController)
  .constant('PARSE', PARSE)
;
