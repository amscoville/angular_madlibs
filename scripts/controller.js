(function(){
    angular
    .module('MadLibs')
    .controller('madlibsController', madlibsCtrl);

    function madlibsCtrl(DefaultWords) {
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
            if (vm.selected === null) {
                alert('You must select a story!');
            } else {
                setFinalWords();
                vm.submitted = true;
            }
        }

        // utility functions

        function setFinalWords() {
            vm.final.verbs = getWordsArr(vm.userWords.verbs, 'verb');
            vm.final.nouns = getWordsArr(vm.userWords.nouns, 'noun');
            vm.final.adjectives = getWordsArr(vm.userWords.adjectives, 'adjective');
            vm.final.adverbs = getWordsArr(vm.userWords.adverbs, 'adverb');
            
        }

        function getWordsArr(str, wordType) {
            if (str[str.length-1] === ',') {
                str = str.slice(0, -1);
            }
            var arr = str.split(',');
            if (arr.length < 4) {
                if (wordType === 'verb'){
                    var newArr = getRandVerbs(arr);
                    return newArr;
                } else if (wordType === 'noun'){
                    var newArr = getRandNouns(arr);
                    return newArr;
                } else if (wordType === 'adjective'){
                    var newArr = getRandAdjectives(arr);
                    return newArr;
                } else if (wordType === 'adverb'){
                    var newArr = getRandAdverbs(arr);
                    return newArr;
                }   
            }
            return arr;
        }

        function getRandNum(arrLength) {
            return Math.round(Math.random() * (arrLength -1));
        }

        function getRandNouns(arr) {
            var num = 4 - arr.length;
            if (arr[0] === "") {
                arr[0] = DefaultWords.nouns[getRandNum(DefaultWords.nouns.length)]; 
            }
            for (var i = 0; i < num; i++) {
                var index = getRandNum(DefaultWords.nouns.length);
                arr.push(DefaultWords.nouns[index]);
            }
            return arr;
        }

        function getRandVerbs(arr) {
            var num = 4 - arr.length;
            if (arr[0] === "") {
                arr[0] = DefaultWords.verbs[getRandNum(DefaultWords.verbs.length)]; //returning same random number each time (1)
            }
            for (var i = 0; i < num; i++) {
                var index = getRandNum(DefaultWords.verbs.length);
                arr.push(DefaultWords.verbs[index]);
            }
            return arr;
        }

        function getRandAdjectives(arr) {
            var num = 4 - arr.length;
            if (arr[0] === "") {
                arr[0] = DefaultWords.adjectives[getRandNum(DefaultWords.adjectives.length)];
            }
            for (var i = 0; i < num; i++) {
                var index = getRandNum(DefaultWords.adjectives.length);
                arr.push(DefaultWords.adjectives[index]);
            }
            return arr;
        }

        function getRandAdverbs(arr) {
            var num = 4 - arr.length;
            if (arr[0] === "") {
                arr[0] = DefaultWords.adverbs[getRandNum(DefaultWords.adverbs.length)];
            }
            for (var i = 0; i < num; i++) {
                var index = getRandNum(DefaultWords.adverbs.length);
                arr.push(DefaultWords.adverbs[index]);
            }
            return arr;
        }
    }
})();