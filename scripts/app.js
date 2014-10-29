angular.module('ThinhApp', ['ngSanitize'])
    .controller('MainCtrl', function ($scope){
        console.log('MainCtrl', 'start ', true);
        $scope.nav = 'hello world';
    })

    .directive('myMenu', function (){
        return {
            restrict:'ECMA',
            transclude: false,
            link: function (scope, el, attr){

                var navMenu = angular.element(el).find('nav');
                var open = false;
                setInterval(function (){
                    open = !open;
                    if(open){
                        scope.$emit('OPEN_NAV_MENU');
                        navMenu.addClass('open');
                    }else {
                        scope.$emit('CLOSE_NAV_MENU');
                        navMenu.removeClass('open');
                    }
                }, 2000)


            }
        }
    })
    .directive('myContent', function (){
        return {
            restrict:'ECMA',
            transclude: false,
            link: function (scope, el, attr){
                console.log('Hello i am menu');

            }
        }
    });
