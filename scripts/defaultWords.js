(function(){
    angular
    .module('MadLibs')
    .factory('DefaultWords', words);

    function words() {
        //local variables
        var verbs = ['frown', 'breathe', 'occur', 'surprise'];
        var nouns = ['nature', 'bathroom', 'police', 'poem'];
        var adjectives = ['wonderful', 'healthy', 'poor', 'united'];
        var adverbs = ['roughly', 'justly', 'frankly', 'sweetly'];

        var service = {
            verbs: verbs,
            nouns: nouns,
            adjectives: adjectives,
            adverbs: adverbs
        };
        //return service
        return service;

        //methods and functions
        function method(){

        }
    }

})();



