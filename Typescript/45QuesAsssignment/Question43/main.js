"use strict";
const magicians = ['Harry', 'David', 'Chris'];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
function make_great(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
const great_magicians = make_great(magicians.slice());
show_magicians(great_magicians);
const unchanged_magicians = make_great(magicians.slice());
show_magicians(unchanged_magicians);
show_magicians(magicians);
