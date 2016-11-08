angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('conferenceXXX.conferenceGSKOnco2016', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/conferenceGSKOnco2016.html',
        controller: 'conferenceGSKOnco2016Ctrl'
      }
    }
  })

  .state('conferenceXXX', {
    url: '/side-menu21',
    templateUrl: 'templates/conferenceXXX.html',
    controller: 'conferenceXXXCtrl'
  })

  .state('conferenceXXX.signup', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('conferenceXXX.speakers', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/speakers.html',
        controller: 'speakersCtrl'
      }
    }
  })

  .state('conferenceXXX.login', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('conferenceXXX.testPage', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/testPage.html',
        controller: 'testPageCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});