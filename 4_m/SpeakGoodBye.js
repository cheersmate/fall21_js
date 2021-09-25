(function(window) {
    var byeSpeaker = {}
        //byeSpeaker.name = "";
    var speakWord = "Good Bye ";
    byeSpeaker.speak = function(name) {
        console.log(speakWord + name);
    }

    byeSpeaker.speakSimple = function() {

        return (function(name) {
            return speakWord + name;
        });
    }

    window.byeSpeaker = byeSpeaker;

})(window);