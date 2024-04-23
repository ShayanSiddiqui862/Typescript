"use strict";
function make_shirt_default(size = 'large', message = 'I love TypeScript') {
    console.log(`The shirt is ${size} size and has the message: ${message}`);
}
make_shirt_default();
make_shirt_default('medium');
make_shirt_default('small', 'Hello, TypeScript!');
