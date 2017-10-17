(function(){
    angular
    .module('MadLibs')
    .controller('madlibsController', madlibsCtrl);

    function madlibsCtrl(DefaultWords, SpaceFiller) {
        // local variables (vars)
        var vm = this;

        // bound methods
        vm.submit = submit;

        // bound properties
        vm.userWords = {
            verbs: '',
            nouns: '',
            adjectives: '',
            adverbs: ''
        };

        vm.final = {
            verbs: new Array(4),
            nouns: new Array(4),
            adjectives: new Array(4),
            adverbs: new Array(4)
        };

        vm.selected = null;
        vm.submitted = false;

        // bound method implementations

        function submit() {
            if (!vm.selected) {
                alert('You must select a story!');
            } else {
                setFinalWords();
                vm.submitted = true;
            }
        }

        // utility functions

        function setFinalWords() {
            vm.final = SpaceFiller.getFinalWords(vm.userWords);
        }
    }
})();