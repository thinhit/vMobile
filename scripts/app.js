angular.module('ThinhApp', ['ngSanitize'])
    .controller('MainCtrl', function ($scope){
        console.log('MainCtrl', 'start ', true);
        $scope.nav = 'hello world';
        //eventType, cb, $element[0]


        ionic.onGesture('swipe', function ($event){
            console.log($event);
        }, document.getElementsByTagName('nav')[0]);
    })

    .directive('myMenu', function (){
        return {
            restrict:'ECMA',
            transclude: false,
            link: function (scope, el, attr){

                var navMenu = angular.element(el).find('nav');
                var open = false;

                scope.$on('OPEN_NAV_MENU', function (){
                    navMenu.addClass('open');
                });
                scope.$on('CLOSE_NAV_MENU', function (){
                    navMenu.removeClass('open');
                });


            }
        }
    })
    .directive('closeMenu', function (){
        return {
            restrict:'ECMA',
            transclude: false,
            link: function (scope, el, attr){

                angular.element(el).on('click', function(){
                    var menuEl = document.querySelectorAll('my-menu'),
                    menuHasOpen = angular.element(menuEl).find('nav').hasClass('open');


                    if(!menuHasOpen){
                        scope.$broadcast('OPEN_NAV_MENU');
                    }else {
                        scope.$broadcast('CLOSE_NAV_MENU');
                    }
                });



            }
        }
    })
    .directive('myContent', function (){
        return {
            restrict:'ECMA',
            transclude: false,
            link: function (scope, el, attr){

            }
        }
    })
    .directive('navBar', function (){
        return {
            restrict:'ECMA',
            transclude: false,
            link: function (scope, el, attr){

            }
        }
    });
