const magicians: string[] = ['Harry', 'David', 'Chris'];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);


function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

const great_magicians = make_great(magicians.slice());
show_magicians(great_magicians);


const unchanged_magicians = make_great(magicians.slice());
show_magicians(unchanged_magicians);
show_magicians(magicians);