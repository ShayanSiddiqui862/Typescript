let guests : string[] = ["Shaheer","Uzair", "Bazil"];

console.log("Unfortunately, there is a problem and can only invite two people for dinner.");

for(let i = guests.length - 1; i >= 2; i-- ){
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

