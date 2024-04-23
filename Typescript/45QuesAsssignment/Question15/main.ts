let guests : string[] = ["Uzair","Shaheer","Bazil"];
guests.forEach(guest => {
    console.log(`${guest},Can you eat the dinner with me.`);
});
let unavailabeguest = "Bazil"
console.log(`${unavailabeguest}, is unable to attend dinner.`);

let newguest = "Fardan"
guests[guests.indexOf(unavailabeguest)] = newguest;

guests.forEach(guest => {
     console.log(`${guest},Can you eat the dinner with me.`);
})