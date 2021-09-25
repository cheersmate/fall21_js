(function(window) {
    var helloSpeaker = {}

    //helloSpeaker.name = "";
    var speakWord = "Hello ";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + name);
    }

    helloSpeaker.speakSimple = function() {

        return (function(name) {
            return speakWord + name;
        });

    }

    window.helloSpeaker = helloSpeaker;

})(window);