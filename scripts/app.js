angular.module('ThinhApp', ['ngSanitize'])
    .controller('MainCtrl', function ($scope){
        console.log('MainCtrl', 'start ', true);
        $scope.nav = 'hello world';
        $scope.datasource = [
            {
                name: 'IconDock has been a labour of love for ',
                content: 'of the classic IconDock design, I decided to update the look and feel to reflect the current trends in web design that I follow, and give it a shiny new coat of paint. In addition, several icon sets have been',
                date: new Date(),
                type:'News'
            },
            {
                name: 'IconDock has been a labour of love for ',
                content: 'of the classic IconDock design, I decided to update the look and feel to reflect the current trends in web design that I follow, and give it a shiny new coat of paint. In addition, several icon sets have been',
                date: new Date(),
                type:'News'
            },
            {
                name: 'IconDock has been a labour of love for ',
                content: 'of the classic IconDock design, I decided to update the look and feel to reflect the current trends in web design that I follow, and give it a shiny new coat of paint. In addition, several icon sets have been',
                date: new Date(),
                type:'News'
            },
            {
                name: 'IconDock has been a labour of love for ',
                content: 'of the classic IconDock design, I decided to update the look and feel to reflect the current trends in web design that I follow, and give it a shiny new coat of paint. In addition, several icon sets have been',
                date: new Date(),
                type:'News'
            },
            {
                name: 'IconDock has been a labour of love for ',
                content: 'of the classic IconDock design, I decided to update the look and feel to reflect the current trends in web design that I follow, and give it a shiny new coat of paint. In addition, several icon sets have been',
                date: new Date(),
                type:'News'
            },
            {
                name: 'IconDock has been a labour of love for ',
                content: 'of the classic IconDock design, I decided to update the look and feel to reflect the current trends in web design that I follow, and give it a shiny new coat of paint. In addition, several icon sets have been',
                date: new Date(),
                type:'News'
            },
            {
                name: 'IconDock has been a labour of love for ',
                content: 'of the classic IconDock design, I decided to update the look and feel to reflect the current trends in web design that I follow, and give it a shiny new coat of paint. In addition, several icon sets have been',
                date: new Date(),
                type:'News'
            },
            {
                name: 'IconDock has been a labour of love for ',
                content: 'of the classic IconDock design, I decided to update the look and feel to reflect the current trends in web design that I follow, and give it a shiny new coat of paint. In addition, several icon sets have been',
                date: new Date(),
                type:'News'
            },
            {
                name: 'IconDock has been a labour of love for ',
                content: 'of the classic IconDock design, I decided to update the look and feel to reflect the current trends in web design that I follow, and give it a shiny new coat of paint. In addition, several icon sets have been',
                date: new Date(),
                type:'News'
            },
            {
                name: 'IconDock has been a labour of love for ',
                content: 'of the classic IconDock design, I decided to update the look and feel to reflect the current trends in web design that I follow, and give it a shiny new coat of paint. In addition, several icon sets have been',
                date: new Date(),
                type:'News'
            }
        ]

        $scope.loadMore = function (){
            for(var i=0 ; i< 20; i++){
                $scope.datasource.push({
                    name: 'IconDock has been a labour of love for ',
                    content: 'of the classic IconDock design, I decided to update the look and feel to reflect the current trends in web design that I follow, and give it a shiny new coat of paint. In addition, several icon sets have been',
                    date: new Date(),
                    type:'News'
                });
            }

        }
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
