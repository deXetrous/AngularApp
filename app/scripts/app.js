'use strict';

angular.module('medicalApp',['ui.router','ngResource','ngDialog'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'HeaderController'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'HomeController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })

            .state('app.hairTransplant', {
                url:'hairTransplant',
                views: {
                    'content@': {
                        templateUrl : 'views/hairTransplant.html',
                        controller  : 'hairTransplantController'
                    }
                }

            })

            .state('app.diodeHairRemoval', {
                url:'diodeHairRemoval',
                views: {
                    'content@': {
                        templateUrl : 'views/diodeHairRemoval.html',
                        controller  : 'diodeHairRemovalController'
                    }
                }

            });
        /*
            .state('app.diodeLaserHairRemoval', {
                url:'diodeLaserHairRemoval',
                views: {
                    'content@': {
                        templateUrl : 'views/diodeLaserHairRemoval.html',
                        controller  : 'diodeLaserHairRemovalController'
                    }
                }

            })

            .state('app.diodeLaser', {
                url:'diodeLaser',
                views: {
                    'content@': {
                        templateUrl : 'views/diodeLaser.html',
                        controller  : 'diodeLaserController'
                    }
                }

            })

            .state('app.vitiligo', {
                url:'vitiligo',
                views: {
                    'content@': {
                        templateUrl : 'views/vitiligo.html',
                        controller  : 'vitiligoController'
                    }
                }

            })

            .state('app.aboutUs', {
                url:'aboutUs',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutUs.html',
                        controller  : 'aboutUsController'
                    }
                }

            });
*/
           
          $urlRouterProvider.otherwise('/');

      })
;