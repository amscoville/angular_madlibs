(function(){
    angular
    .module('MadLibs')
    .controller('madlibsController', madlibsCtrl);

    function madlibsCtrl(Words) {
        var vm = this;
        vm.test = test;

        vm.userWords = {
            verbs: [],
            nouns: [],
            adjectives: [],
            adverbs: []
        };  

        vm.selected = null;

        function pushWords() {
            for (var i = 0; i < vm.userWords.verbs; i++) {
                Words.nouns.push(vm.userWords.verbs[i]);
            }
        }
        
        function test() {
            console.log('test');
            console.log('vm.userWords:', vm.userWords);
            console.log('vm.selected:', vm.selected);
        }

    }
})();