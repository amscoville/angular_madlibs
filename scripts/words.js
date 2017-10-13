(function(){
    angular
    .module('MadLibs')
    .factory('Words', words);

    function words() {
        this.nouns = [];
        this.verbs = [];
        this.adjectives = [];
        this.adverbs = [];
    }

})();



