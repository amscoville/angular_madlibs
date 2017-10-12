(function(){
    angular
    .module('madlibs')
    .factory('stories', storiesFctry);

    function storiesFctry(storyName) {
        if (storyName === 'Christmas Tree') {
            return 'Every Christmas we (Verb) to a (Adjectives) tree farm far away. This is not just any (Adjectives) tree farm. My dad and I (Verb) onto the (noun) to (Verb) for the perfect (noun).  Some people like them (Adjectives), but I prefer them (Adjectives). After  searching for hours I usually (adverb) exclaim "Dad! The perfect tree is over there!" Off we (Verb) to get the tree. The problem is we always forget the (noun) and the (noun). But at the end of the day we (adverb) get the tree and head home (adverb). "I wish it was Christmas all year round" I (adverb) think to myself.';
        } else if (storyName === 'Shopping') {
            return 'Today I went shopping. When I arrived at the store I saw a (Adjectives) (noun), who upon noticing me (adverb) said "I need to (Verb)." "Well, that was (Adjectives)" I thought to myself and walked in the store. The store had rearranged its inventory, so I felt (adverb) lost. I walked up to store clerk and said (adverb), "I am looking for a (Adjectives) (noun) that doesn’t (Verb) as often as the last one I had." The store clerk looked at me with a (Adjectives) look in his eye and said, "What you are looking for can be found by the (noun). If you see a (noun) that (adverb) can (Verb), then you\ve gone too far." As I tried to understand his directions, I thought to myself, "I should have just ordered it on amazon.com, Their products seem to (Verb) the perfect amount."';
        } else if (storyName === 'Brainstorm') {
            return 'Many say that brainstorming is (Adjectives) and does not (Verb). However, with the combination of the right computer and (noun) anyone can lead a good (Verb). When you have (adverb) pulled together a (Adjectives) group of (noun) in a big room with lots of TV\s then  magical things will happen. In the past we have (adverb) suggested participants work together to find the most (Adjectives) solution. The most difficult part is many (Adjectives) (noun) like to (Verb). This has proved to be (adverb) problematic.  But in the end the most important (noun) usually is brought to light.  Typically we try to encourage ideas to (Verb), and never shut ideas down. This concludes our instructions. Thanks for (adverb) listening!';
        }
    }
})();