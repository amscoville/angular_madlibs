(function(){
    angular
    .module('MadLibs')
    .directive('myEnter', enter)

    function enter() {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.myEnter);
                    });
    
                    event.preventDefault();
                }
            });
        };
    }
})();
