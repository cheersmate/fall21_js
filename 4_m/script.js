var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var person in names) {

    if (names[person].toLowerCase().charAt(0) == 'j') {
        byeSpeaker.speak(names[person]);
        var simple_bye = byeSpeaker.speakSimple();
        simple_bye(names[person]);
        //console.log(simple_bye(names[person]));

    } else {
        helloSpeaker.speak(names[person]);
        var simple_hello = helloSpeaker.speakSimple();
        simple_hello(names[person]);
        //console.log(simple_hello(names[person]));
    }
}

function mapReduce_single(names) {

    if (names.toLowerCase().charAt(0) == 'j') {
        var simple_bye = byeSpeaker.speakSimple();
        return (simple_bye(names));
        //return ("Bye " + names);
    } else {
        var simple_hello = helloSpeaker.speakSimple();
        return (simple_hello(names));
        //return ("Hello " + names);
    }
}
console.log(names.map(mapReduce_single));


function mapReduce_double(names) {

    if (names.toLowerCase().charAt(0) == 'j') {
        var simple_bye = byeSpeaker.speakSimple();
        return (simple_bye(names));
        //return ("Bye " + names);
    } else {
        var simple_hello = helloSpeaker.speakSimple();
        return (simple_hello(names));
        //return ("Hello " + names);
    }
}
console.log(names.map(mapReduce_double));


//Reduce; 
//You are required to use {hello: [], bye: []} as your initialValue.