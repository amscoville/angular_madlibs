(function(){
    angular
    .module('MadLibs')
    .directive('mlPressEnter', mlPressEnter)

    function mlPressEnter() {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.mlPressEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    }; 
})();

