(function(){
    angular
    .module('MadLibs')
    .factory('DefaultWords', words);

    function words() {
        //local variables
        var verbs = [
            'surround',
            'stab',
            'return',
            'medicate',
            'blindside',
            'boogie',
            'flap',
            'trip',
            'swat',
            'suck in',
            'harass',
            'trap',
            'snoop',
            'explode',
            'sketchy',
            'scatter',
            'challenge',
            'fight',
            'bury',
            'splatter',
            'smack',
        ];
        var nouns = [
            'blood rage',
            'factory reset button',
            'idiot',
            'toaster',
            'legend',
            'death wish',
            'therapy',
            'goal in life',
            'marketing idea',
            'psychic',
            'knife',
            'sandwich',
            'hunting ground',
            'lettuce',
            'kitty',
            'friendly grandma',
            'french chef',
            'antidepressant drug',
            'corn cake',
            'president of the night',
            'candlestick maker',
            'coffee pot',
            'brethren',
            'national security agency',
            'tank',
            'useless brakes',
            'international law enforcement agency',
            'sound barrier',
            'skinny woman',
            'private investor',
            'main people',
            'stock car',
            'elastic band',
            'whole blood',
            'telephone',
            'mad cow disease',
            'scourge upon the earth',
            'rough-skinned newt',
            'karate',
            'pistol',
            'legal warrant',
            'people who are hurt',
            'idea he suggested',
            'party of the first part',
            'place of business',
            'double fault',
            'kitty cat',
            'famous landscape painting',
            'hairy legs',
            'old irish cottage',
            'pocket flask',
            'liquid oxygen',
            'laser beams',
            'preventive strike',
            'dingle berry',
            'reading party',
            'generalized bond',
            'indirect expression',
            'messiness',
            'love of her life',
            'trust fund',
            'volcanic crater',
            'travel guidebook',
            'electric furnace',
            'internal respiration',
            'police squad',
            'mad-dog skullcap',
            'sneaky criminal',
            'new version',
            'keepsake machete',
            'gaming laptop',
            'hissy fit',
            'dog poop',
            'dragon',
            'mediation',
            'patrolman',
            'pervert',
            'toilet seat',
            'haunted graveyard',
            'really tough guy',
            'twinkling uncleanness',
            'wrinkle',
            'personal credit line',
            'multi-billionaire',
            'mental disorder',
            'sweet tailpipe',
            'boiling water',
            'deer antler',
            'background story',
            'mood',
            'nibblets',
            'striped hyena',
            'weed whacker'
        ];
        var adjectives = [
            'cowardly',
            'haunting',
            'startled',
            'alcoholic',
            'demanding',
            'shivering',
            'offensive',
            'nighttime',
            'startling',
            'disgusting',
            'slap happy',
            'disturbing',
            'adulterous',
            'blathering',
            'flickering',
            'rebellious',
            'impertinent',
            'bull headed',
            'hyperactive',
            'infuriating',
            'outnumbered',
            'pea-brained',
            'territorial',
            'underhanded',
            'zombie like',
            'mischievous',
            'at-the-ready',
            'free-loading',
            'house-broken',
            'up-to-no-good',
            'self-absorbed',
            'cruel-hearted',
            'fiercely-loyal',
            'misunderstood',
            'fear-inspiring',
            'narrow-minded',
            'mentally impaired',
            'out-of-control'
        ];
        var adverbs = [
            'officially',
            'acidly',
            'wildly',
            'dimly',
            'readily',
            'weakly',
            'fiercely',
            'quietly',
            'perfectly',
            'judgmentally',
            'regularly',
            'gently',
            'madly',
            'knowledgeably',
            'scarily',
            'helpfully',
            'enormously',
            'never',
            'mostly',
            'gladly',
            'greatly',
            'frightfully',
            'woefully',
            'irritably',
            'fortunately',
            'ultimately',
            'noisily',
            'honestly',
            'utterly',
            'heavily',
            'extremely',
            'enthusiastically',
            'reluctantly',
            'patiently',
            'kindly',
            'faithfully',
            'especially',
            'courageously',
            'rightfully',
            'closely',
            'gracefully',
            'shakily',
            'loosely',
            'equally',
            'commonly',
            'oddly',
            'coaxingly',
            'exactly',
            'helplessly',
            'eventually',
            'politely',
            'likely',
            'evenly'
        ];
        
        var service = {
            verbs: verbs,
            nouns: nouns,
            adjectives: adjectives,
            adverbs: adverbs,
            getWordsArr: getWordsArr,
            getRandNum: getRandNum,
            getRandWords: getRandWords
        };
        //return service
        return service;

        //methods and functions
        function getWordsArr(str, wordType) {
            if (str[str.length-1] === ',') {
                str = str.slice(0, -1);
            }
            var arr = str.split(',');
            if (arr.length < 4) { 
                var newArr = service.getRandWords(arr, wordType);
            }
            return newArr;
        }

        function getRandNum(arrLength) {
            return Math.round(Math.random() * (arrLength -1));
        }

        function getRandWords(arr, wordType) {
            var num = 4 - arr.length;
            if (arr[0] === "") {
                arr[0] = service[wordType][service.getRandNum(service[wordType].length)]; 
            }
            for (var i = 0; i < num; i++) {
                var index = service.getRandNum(service[wordType].length);
                arr.push(service[wordType][index]);
            }
            return arr;
        }
    }
})();